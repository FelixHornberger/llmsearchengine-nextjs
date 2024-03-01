'use client';
import { useState } from "react";
import { KeyboardEvent } from 'react';
import {
    createParser,
    ParsedEvent,
    ReconnectInterval,
} from 'eventsource-parser';
import TaskButton from "../buttons/TaskButton";
import React from "react";
import { useMessageStore } from "@/src/message";
import Loader from "./Loader";
import { generatePrompt } from "@/utils/prompt";
import { useTaskTopicStore } from "@/src/tasktopic";
import { useConditionStore } from "@/src/condition";



function ChatInput() {
    const [loading, setLoading] = useState(false);
    const [generatedAnswers, setGeneratedAnswers] = useState<String>('');
    const [showButton, setVisbility] = useState(false);
    const [counterChat, setCounterChat] = useState(0);
    const addMessageZustand = useMessageStore((state) => state.addMessage);
    const updateMessage = useMessageStore((state) => state.updateMessage);
    const messages = useMessageStore();
    const condition = useConditionStore();
    const taskTopic = useTaskTopicStore();

    const generateAnswer = async (e: any, prompt: string) => {
        e.preventDefault();
        setGeneratedAnswers("");
        setLoading(true);
        console.log("prompt: ", prompt)
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // We need to make changes to the prompt at the moment this is just he user message but for testin its fine
            body: JSON.stringify({
                prompt,
            }),
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = response.body;
        if (!data) {
            return;
        }
        let currentID = counterChat + 1;
        let updateCounter = 0
        let update_string = ""
        const onParseGPT = (event: ParsedEvent | ReconnectInterval) => {
            if (event.type === 'event') {
                const data = event.data;
                try {
                    const text = JSON.parse(data).text ?? '';
                    setGeneratedAnswers((prev) => prev + text);
                    update_string += text
                    if (updateCounter === 0) {
                        addMessageZustand({ id: currentID, user: "System", content: update_string as string, timestamp: new Date().toLocaleTimeString() })
                    } else {
                        /* console.log("I should update");
                        console.log(`My Id is: ${currentID}, user is System, content is: ${generatedAnswers}`); */
                        updateMessage({ id: currentID, user: "System", content: update_string as string, timestamp: new Date().toLocaleTimeString() })
                    }
                    updateCounter++;
                } catch (e) {
                    console.error(e);
                }
            }
        };
        const reader = data.getReader();
        const decoder = new TextDecoder();
        const parser = createParser(onParseGPT);
        let done = false;
        while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            const chunkValue = decoder.decode(value);
            parser.feed(chunkValue);
        }
        setLoading(false);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
        if (!loading){
            if (event.key === 'Enter' && !event.shiftKey) {
                const messageText = event.currentTarget.value.trim();
                if (messageText !== '') {
                    addMessageZustand({
                        id: counterChat,
                        user: "User",
                        content: messageText,
                        timestamp: new Date().toLocaleTimeString()
                    }
                    );
                    event.currentTarget.value = '';
                    if (counterChat === 0) {
                        generateAnswer(event, generatePrompt(messageText, taskTopic.taskTopic, condition.condition, null));
                    } else {
                        generateAnswer(event, generatePrompt(messageText, taskTopic.taskTopic, condition.condition, messages.messages));
                    }
    
                    if (!showButton) {
                        setVisbility(true);
                    } 
                    setCounterChat(counterChat + 2);
                }
            }
        }
    }
    return (
        <div className="justify-center items-center flex-col w-full pb-2.5 bg-gray-700 sticky bottom-0">
            <div className="justify-center items-center flex flex-col px-2.5">
                <div>
                    {loading && <Loader />}
                </div>
                <textarea
                    className="bg-transparent w-full sm:w-[70%] mx-5 border-white border focus:outline-none shadow-xl focus:ring-1
                    rounded-lg mt-3"
                    placeholder="Type a message..."
                    id="message-input"
                    defaultValue={""}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {showButton && <TaskButton />}
        </div>
    );
};

export default ChatInput;
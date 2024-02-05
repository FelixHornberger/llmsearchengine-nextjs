import SelectedTaskBox from '@/components/SelectedTaskBox'
import ChatInput from "@/components/chatSystem/ChatInput";
import Message from "@/components/chatSystem/Message";
import { useMessageStore } from '@/src/message';
import { useEffect, useRef } from 'react';
import { useTaskTopicStore } from '@/src/tasktopic';



function Task({ }) {
    const { messages } = useMessageStore();
    const chatMessagesRef = useRef(null);
    const taskTopic = useTaskTopicStore();

    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.style.height = '500px';
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);
    // Better sizes for the chat-messages
    // TODO: ADD Costume WIDTH and HEIGHT
    return (
        <div id='task-root' className="flex-col flex">
            <h1 className="text-center">Use our system to ask questions about the topic in such a way that you would claim to be informed</h1>
            <SelectedTaskBox topic={taskTopic['taskTopic']} />
            <div className="h-full w-[80%] border mb-2 mt-2 overflow-hidden self-center w-128">
                <div className="w-full">
                    <div className="min-h-96 overflow-y-scroll overflow-x-hidden p-2.5 break-words" id="chat-messages" ref={chatMessagesRef}>
                        {messages.map((message) => (
                            <Message key={message.id} id={message.id} user={message.user} message={message.content} />
                        ))}
                    </div>
                </div>
            </div>
            <ChatInput />
        </ div>
    )
}

export default Task;
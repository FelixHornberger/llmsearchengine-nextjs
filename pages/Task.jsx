import SelectedTaskBox from '@/components/SelectedTaskBox'
import ChatInput from "@/components/ChatInput";
import Message from "@/components/Message";
import { useMessageStore } from '@/src/message';
import { useEffect, useRef } from 'react';
import { useTaskTopicStore } from '@/src/tasktopic';



function Task({ }) {
    const { messages } = useMessageStore();
    const chatMessagesRef = useRef(null);
    const taskTopic = useTaskTopicStore();

    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);
    // Better sizes for the chat-messages
    return (
        <div id='task-root' className="flex-col flex">
            <h1 className="text-center">Use our system to ask questions about the topic in such a way that you would claim to be informed</h1>
            <SelectedTaskBox topic={taskTopic['taskTopic']} />
            <div className="h-full w-9/12 border mb-2 mt-2 overflow-hidden self-center">
                <div className="w-full">
                    <div className="min-h-96 overflow-y-scroll overflow-x-hidden p-2.5" id="chat-messages" ref={chatMessagesRef}>
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
import SelectedTaskBox from '@/components/SelectedTaskBox'
import ChatInput from "@/components/chatSystem/ChatInput";
import Message from "@/components/chatSystem/Message";
import { useMessageStore } from '@/src/message';
import { useEffect, useRef } from 'react';
import { useTaskTopicStore } from '@/src/tasktopic';


//TODO: ADD Condition

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
    return (
        <div id='task-root' className="flex-col flex w-full min-h-screen">
            <div className='flex-1 overflow-hidden'>
                <div className='relative h-full'>
                    <div className='w-full h-full overflow-y-auto'>
                        <div className='flex flex-col h-full'>
                            <div className='sticky top-0'>
                                <div className='flex w-full border-b justify-center text-center'>
                                    <h2 className='py-2'>Topic: {taskTopic['taskTopic']}</h2>
                                </div>
                            </div>
                            <div className="flex w-full p-2 h-full mt-2 overflow-hidden self-center w-128">
                                <div className="w-full h-full">
                                    <div className="min-h-96 overflow-y-scroll overflow-x-hidden p-2.5 break-words" id="chat-messages" ref={chatMessagesRef}>
                                        {messages.map((message) => (
                                            <Message key={message.id} id={message.id} user={message.user} message={message.content} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChatInput />
        </ div>
    )
}

export default Task;
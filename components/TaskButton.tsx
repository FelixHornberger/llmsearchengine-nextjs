'use client';
import { useMessage } from '@/src/message';
import React from 'react'

const TaskButton = ({}) => {

    const updateMessage = useMessage((state) => state.updateMessage);
    const { messages } = useMessage();

    const handleClick = () => {
        //updateMessage({id:1, user:"System", content:"This is a test for updating felix"});
        console.log(messages)
    }
    return (
        <div className='text-center'>
            <button className='bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3' onClick={handleClick}>Next Page</button>
        </div>
    )
}

export default TaskButton
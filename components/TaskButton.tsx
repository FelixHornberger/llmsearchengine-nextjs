'use client';
import { useMessageStore } from '@/src/message';
import { usePageStore } from '@/src/pagecounter';
import React from 'react'

// TODO: ADD Time Zustand.
const TaskButton = ({}) => {

    const nextPage = usePageStore((state) => state.increse);
    const { messages } = useMessageStore();

    const handleClick = () => {
        console.log(messages)
        nextPage(1);
    }
    return (
        <div className='text-center'>
            <button className='bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3' onClick={handleClick}>Next Page</button>
        </div>
    )
}

export default TaskButton
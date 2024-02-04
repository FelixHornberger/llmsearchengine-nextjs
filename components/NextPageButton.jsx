
'use client';
import React from 'react'
import { usePageStore } from '@/src/pagecounter';

const NextPageButton = () => {
    const nextPage = usePageStore((state) => state.increse) ;
    const handleClick = () => {
        nextPage(1);
    }
    return (
        <div className='text-center'>
            <button className='bg-custom-accent p-2 text-custom-accent-text font-semibold' onClick={handleClick}>Start Survey</button>
        </div>
    )
}

export default NextPageButton
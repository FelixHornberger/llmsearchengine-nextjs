
'use client';
import React from 'react'

const NextPageButton = ({ nextPage, addTime }) => {
    const handleClick = () => {
        addTime('startTime');
        nextPage();
    }
    return (
        <div className='text-center'>
            <button className='bg-custom-accent p-2 text-custom-accent-text font-semibold' onClick={handleClick}>Start Survey</button>
        </div>
    )
}

export default NextPageButton
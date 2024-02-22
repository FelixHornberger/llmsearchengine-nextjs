'use client';
import React from 'react'
import { usePageStore } from '@/src/pagecounter';
import { useTimeDataStore } from '@/src/time';

// At the moment only used in the intro.page -> Later we want to give it a parameter to check if it should track time. This way we can use it also for the information consent.
const NextPageButton = () => {
    const nextPage = usePageStore((state) => state.increse);
    const setTime = useTimeDataStore((state) => state.setTimeData);
    const handleClick = async () => {
        setTime({ start: new Date().toLocaleTimeString() })
        // try {
        //     const response = await fetch('/api/getCondition');
        //     if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        //     }
        //     const data = await response.json();
        //     console.log('Participants:', data.participants);
        // } catch (error) {
        //     console.error('Error fetching data:', error.message);
        // }
        nextPage(1);
    }
    return (
        <div className='text-center'>
            <button className='bg-custom-accent p-2 text-custom-accent-text font-semibold' onClick={handleClick}>Start Survey</button>
        </div>
    )
}

export default NextPageButton
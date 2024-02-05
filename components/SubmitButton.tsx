'use client'
import { useTimeDataStore } from '@/src/time'; 

export default function SubmitButton() {
    
    const setTime = useTimeDataStore((state) => state.setTimeData);

    const handleclick = () => {
        setTime({postStudy: new Date().toLocaleTimeString()});
        console.log("Sumbit needs a connection to the db")
    }
    return (
        <button className='bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3' onClick={() => handleclick()}>Submit</button>
    );
};
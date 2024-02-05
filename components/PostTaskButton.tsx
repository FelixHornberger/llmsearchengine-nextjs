'use client'
import { useTopicGradingStore } from '@/src/topicgrades';
import { usePageStore } from '@/src/pagecounter';
import { useTimeDataStore } from '@/src/time'; 
import next from 'next';


export default function PostTaskButton(){

    const topicGrads = useTopicGradingStore();
    const setTime = useTimeDataStore((state) => state.setTimeData);
    const nextPage = usePageStore((state) => state.increse);

    const handleClick = () => {
        if (topicGrads['topicGrading']['evalGrade'] !== ''){
            setTime({postTask: new Date().toLocaleTimeString()});
            nextPage(1);
        }
    }
    return(
        <button className="bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3" onClick={() => handleClick()}>Continue</button>
    )
}

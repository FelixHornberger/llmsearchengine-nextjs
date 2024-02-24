'use client'
import { useTopicGradingStore } from '@/src/topicgrades';
import { usePageStore } from '@/src/pagecounter';
import { useMildnessStore } from '@/src/mildness'
import { selectTask } from "@/utils/selecttasktopic";
import { useTaskTopicStore } from '@/src/tasktopic';
import { useTimeDataStore } from '@/src/time';
import { useState } from 'react';
import PreStudyUserFeedback from '../PreStudyUserFeedback';
import { useConditionStore } from '@/src/condition';

// This could be its own file!
function returnCondition(arr) {
  const [first, middle, last] = arr;
  if (first === middle && middle === last) {
    const randomIndex = Math.floor(Math.random() * 3);
    return ["pro", "con", "neutral"][randomIndex];
  } else if (first <= middle && first <= last) {
    return "pro";
  } else if (middle <= first && middle <= last) {
    return "neutral";
  } else {
    return "con";
  }
}

export default function PreStudyButton() {

  const topicGrads = useTopicGradingStore();
  const conditionStore = useConditionStore();
  const nextPage = usePageStore((state) => state.increse);
  const setMildness = useMildnessStore((state) => state.setMildness);
  const setTaskTopic = useTaskTopicStore((state) => state.setTaskTopic);
  const setCondition = useConditionStore((state) => state.setCondition);
  const setTime = useTimeDataStore((state) => state.setTimeData);

  const [showUserFeedback, setVisbility] = useState(false);

  const handleClick = async () => {
    if (topicGrads['topicGrading']['firstTopic'] !== '' &&
      topicGrads['topicGrading']['secondTopic'] !== '' &&
      topicGrads['topicGrading']['thirdTopic'] !== '') {
      // eslint-disable-next-line default-case
      switch (selectTask(topicGrads['topicGrading'])) {
        case 'firstTopic':
          if (topicGrads['topicGrading']['firstTopic'] >= -1 && topicGrads['topicGrading']['firstTopic'] <= 1) {
            setMildness(true);
          }
          setTaskTopic("Should students wear school uniform?");
          break;
        case 'secondTopic':
          if (topicGrads['topicGrading']['secondTopic'] >= -1 && topicGrads['topicGrading']['secondTopic'] <= 1) {
            setMildness(true);
          }
          setTaskTopic("Should intellectual property rights exist?");
          break;
        case 'thirdTopic':
          if (topicGrads['topicGrading']['thirdTopic'] >= -1 && topicGrads['topicGrading']['thirdTopic'] <= 1) {
            setMildness(true);
          }
          setTaskTopic("Is Obesity a Disease?");
          break;
      }
      setTime({ preStudy: new Date().toLocaleTimeString() })
      try {
        const response = await fetch('api/getCondition');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Todo make this look smoother.
        setCondition(returnCondition(data.conditions[0]['condition_counts']))
        nextPage(1);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    } else {
      setVisbility(true);
    }
  }
  // This Button needs changes. wraps the row instead of
  return (
    <div className='felx-col text-center'>
      {showUserFeedback && <PreStudyUserFeedback />}
      <button onClick={() => handleClick()} className="bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3">
        Continue
      </button>
    </div>
  )
}


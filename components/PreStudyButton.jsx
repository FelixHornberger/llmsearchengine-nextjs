'use client'
import { useTopicGradingStore } from '@/src/topicprestudy'
import { usePageStore } from '@/src/pagecounter';
import { useMildnessStore } from '@/src/mildness'
import { selectTask } from "@/utils/selecttasktopic";
import { useTaskTopicStore } from '@/src/tasktopic';
//TODO: ADD Zustand

function PreStudyButton() {

  const topicGrads = useTopicGradingStore();
  const nextPage = usePageStore((state) => state.increse);
  const setMildness = useMildnessStore((state) => state.setMildness);
  const setTaskTopic = useTaskTopicStore((state) => state.setTaskTopic);

  const handleClick = () => {
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
      nextPage(1);
    }
  }
  return (
    <button onClick={() => handleClick()} className="bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3">
      Continue
    </button>
  )
}

export default PreStudyButton;
'use client'

//TODO: ADD Zustand

function PreStudyButton({ id, nextPage, topicGrads, setTaskTopic, setMildness, addTime}){
    const handleClick = () => {
        if (topicGrads['firstTopic'] !== '' &&
        topicGrads['secondTopic'] !== '' &&
        topicGrads['thirdTopic'] !== '') {
        // eslint-disable-next-line default-case
        switch(selectTask(topicGrads)){
          case 'firstTopic':
            if (topicGrads['firstTopic'] >= -1 && topicGrads['firstTopic'] <= 1) {
              setMildness(true);
            }
            setTaskTopic("Should students wear school uniform?");
            break;
          case 'secondTopic':
            if (topicGrads['secondTopic'] >= -1 && topicGrads['secondTopic'] <= 1) {
              setMildness(true);
            }
            setTaskTopic("Should intellectual property rights exist?");
            break;
          case 'thirdTopic':
            if (topicGrads['thirdTopic'] >= -1 && topicGrads['thirdTopic'] <= 1) {
              setMildness(true);
            }
            setTaskTopic("Is Obesity a Disease?");
            break;
        }
        addTime('preStudyTime');
        nextPage();
        }
    console.log("Systemid:", id)
    }
    return (
    <button onClick={() => handleClick(id, nextPage, topicGrads, setTaskTopic, setMildness, addTime)} className="bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3">
          Continue
    </button>
    )
}

export default PreStudyButton;
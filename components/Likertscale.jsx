'use client'

function Likertscale({ topic, likertChange, valuation}) {
    const handleRadioChange = (e) => {
      const selectedValue = parseInt(e.target.value, 10);
      if (!valuation){
        likertChange((prevTopicGrading) => {
          switch (topic) {
            case "Should students wear school uniform?":
              return { ...prevTopicGrading, firstTopic: selectedValue };
            case "Should intellectual property rights exist?":
              return { ...prevTopicGrading, secondTopic: selectedValue };
            case "Is Obesity a Disease?":
              return { ...prevTopicGrading, thirdTopic: selectedValue };
            default:
              return prevTopicGrading;
          }
        });
      } else {
        likertChange(selectedValue);
      }
    };
    return (
      <div className="flex content-center inline">
        <p className="">Strongly Disagree</p>
        <ul className="flex list-none px-5 place-content-around content-center" id={topic}>
          {[...Array(7).keys()].map((index) => (
            <li key={index} className="px-2 scale-150">
              <input
                id={`${topic}-answer-${index + 1}-li`}
                type="radio"
                name={topic}
                value={index - 3}
                onChange={handleRadioChange}
              />
            </li>
          ))}
        </ul>
        <p>Strongly Agree</p>
      </div>
    );
}
  
export default Likertscale;
import QuestionElement from "@/components/QuestionElement";
import PreStudyButton from "@/components/PreStudyButton";

const questionlist = [
  "Should students wear school uniform?",
  "Should intellectual property rights exist?",
  "Is Obesity a Disease?",
];

export default function PreStudy() {
  return (
    <>
      <h1 className="flex mb-3 justify-center">
        Please state to which degree you agree or disagree with the following
        topics
      </h1>
      <div className="flex flex-col">
        <div className="flex flex-col w-3/5 place-self-center">
          <QuestionElement question={questionlist[0]} likertChange={undefined} />
          <QuestionElement question={questionlist[1]} likertChange={undefined} />
          <QuestionElement question={questionlist[2]} likertChange={undefined} />
        </div>
      </div>
      <PreStudyButton id={undefined} nextPage={undefined} topicGrads={undefined} setTaskTopic={undefined} setMildness={undefined} addTime={undefined} />
    </>
  );
}
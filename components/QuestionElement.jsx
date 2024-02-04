import Likertscale from "./Likertscale";

function QuestionElement({question, likertChange}) {
    return (
        <div className="flex-col border p-5 mb-3">
            <div className="flex justify-center mb-3">
                <h2>{question}</h2>
            </div>
            <Likertscale topic={question} likertChange={likertChange} valuation={false}/>
        </div>
    );
}

export default QuestionElement
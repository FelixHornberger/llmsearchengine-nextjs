import Likertscale from "./Likertscale";

function QuestionElement({question}) {
    // Does this need a costume color?
    return (
        <div className="flex-col border p-5 mb-3">
            <div className="flex justify-center mb-3">
                <h2>{question}</h2>
            </div>
            <Likertscale topic={question} valuation={false} />
        </div>
    );
}

export default QuestionElement
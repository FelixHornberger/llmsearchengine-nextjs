import NextPageButton from "@/components/buttons/NextPageButton";

function Intro({ nextPage, addTime }) {
    return (
        <>
            <div className="text-center place-items-center mb-3">
                <h1 >Welcome to our Study</h1>
            </div>
            <div className="px-5 flex justify-center">
                <div className="task-box mb-3 max-w-prose place-items-center px-5 border border-white">
                    <p className="text-padding text-center">
                    You are invited to take part in an online study investigating behaviour with a generative (chat-based) information system. The study will be conducted by Noah Meißner and Felix Hornberger and supervised by Dr David Elsweiler from the University of Regensburg. The study with an expected 69 participants will take place from 12.02.2024 to 01.03.2024. The duration of the study is 15 minutes. Students at the University of Regensburg will receive 0.25 credit hours. The study can only be started once and should be completed in one go.
                    </p>
                </div>
            </div>
            <NextPageButton nextPage={nextPage} addTime={addTime}></NextPageButton>
        </>);
}


export default Intro;
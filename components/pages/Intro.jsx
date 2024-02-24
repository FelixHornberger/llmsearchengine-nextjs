import NextPageButton from "@/components/buttons/NextPageButton";

function Intro({nextPage, addTime}){
    return(
    <>
        <div className="text-center place-items-center mb-3">
            <h1 >Welcome to our Study</h1>
        </div>
        <div className="px-5 flex justify-center">
            <div className="task-box mb-3 max-w-prose place-items-center px-5 border border-white">
                <p className="text-padding text-center">
                The purpose of this research is to investigate how Generative Information Retrieval systems and their
                source materials influence users&apos attitudes and interaction patterns regarding contentious topics. The
                goal of this study is to analyze how the Generative Information Retrieval systems and answers
                provided by GIR System (and the way these are generated) affect users&apos perspectives and engagement
                behaviors on controversial subjects. Your participation will help us achieve this research goal. The
                results of this research may be presented at scientific or professional meetings or published in
                scientific proceedings and journals.
                </p>
            </div>
        </div>
        <NextPageButton nextPage={nextPage} addTime={addTime}></NextPageButton>
    </>);
}


export default Intro;
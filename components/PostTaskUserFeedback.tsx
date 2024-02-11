export default function  PreStudyUserFeedback(){
    const feedbackText = 'You cannot go to the next page without having state the topics';
    return(
        <div className="flex flex-col">
            <div className="flex justify-center place-self-center bg-custom-secondary w-3/5 p-2">
                <p>{feedbackText}</p>
            </div>
        </div>
        
    )
}
'use client'
function PreTaskButton({nextPage, setArgumentsBevorTask, addTime}){
    const handleClick = () => {
        const userArguments = document.getElementById('message-input');
        setArgumentsBevorTask(userArguments.value);
        addTime('preTaskTime');
        nextPage();
    }
    return(
        <button className="bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3" onClick={() => handleClick(nextPage, setArgumentsBevorTask, addTime)}>Continue</button>
    )
}

export default PreTaskButton;
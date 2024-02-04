import SelectedTaskBox from "@/components/SelectedTaskBox";
import PreTaskButton from "@/components/PreTaskButton";

function PreTask({topic, nextPage, setArgumentsBevorTask, mildness, addTime}) {
    // TODO: - Implemnt strong_opninion; (selection of it)
    let headline ="You previously selected that you did have a strong opinion about the following topic:"
    if (mildness === true){
        headline = "You previously selected that you did not have a strong opinion about the following topic:"
    }
    return (
        // TODO: Selected TaskBox now hold a test String
        <div className="flex-coloum">
            <h1>{headline}</h1>
            <SelectedTaskBox topic={topic}/>
            <p>If you had to explain, which arguments for and against do you see in the following topic. Please explain your thinking.
                <br></br>
                (It's okay if you don't know anything about the subject - you are not forced to write anything.)
            </p>
            <textarea type="text" className="w-full bg-transparent border-custom-primary border-2 border-primary focus:outline-none shadow-xl focus:ring-1
            rounded-lg h-32 mt-3" 
            placeholder="Type a message..." id="message-input"></textarea>
            <PreTaskButton />
        </div>
    );
}

function handleClick(nextPage, setArgumentsBevorTask, addTime){
    const userArguments = document.getElementById('message-input');
    setArgumentsBevorTask(userArguments.value);
    addTime('preTaskTime');
    nextPage();
}

export default PreTask
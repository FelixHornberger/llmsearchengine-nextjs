import SelectedTaskBox from "@/components/SelectedTaskBox";
import PreTaskButton from "@/components/PreTaskButton";
import ArgumenTextarea from "@/components/ArgumenTextarea";
import {useMildnessStore} from '@/src/mildness';
import { useTaskTopicStore } from '@/src/tasktopic';

function PreTask() {
    const mildness = useMildnessStore();
    const taskTopic = useTaskTopicStore();
    // TODO: - Implemnt strong_opninion; (selection of it)
    let headline ="You previously selected that you did have a strong opinion about the following topic:"
    if (mildness['mildness'] === true){
        headline = "You previously selected that you did not have a strong opinion about the following topic:"
    }
    return (
        // TODO: Selected TaskBox now hold a test String
        <div className="flex-coloum">
            <h1>{headline}</h1>
            <SelectedTaskBox topic={taskTopic['taskTopic']}/>
            <p>If you had to explain, which arguments for and against do you see in the following topic. Please explain your thinking.
                <br></br>
                (It's okay if you don't know anything about the subject - you are not forced to write anything.)
            </p>
            <ArgumenTextarea before={true}/>
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
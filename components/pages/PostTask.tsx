import SelectedTaskBox from "@/components/SelectedTaskBox";
import Likertscale from "@/components/Likertscale";
import PostTaskButton from "@/components/buttons/PostTaskButton";
import { useTaskTopicStore } from '@/src/tasktopic';
import { useArgumentsBeforeStore } from '@/src/argumentbefore';
import ArgumenTextarea from "@/components/ArgumenTextarea";
import { useArgumentsAfterStore } from "@/src/argumentsafter";


export default function PostTask() {
    const argument = useArgumentsAfterStore();
    const taskTopic = useTaskTopicStore();
    const argumentbefore = useArgumentsBeforeStore();
    const changeArgument = useArgumentsAfterStore((state) => state.setArgumentsAfter);
    const formattedMessage = argumentbefore['arguments'].replace(/\n/g, '<br>');

    return (
        <div className="flex flex-col justify-center items-center text-center px-5">
            <h1 >Please state to which degree you agree or disagree with the following topic</h1>
            <SelectedTaskBox topic={taskTopic['taskTopic']} />
            <Likertscale topic={taskTopic['taskTopic']} valuation={true} />
            <div className="flex justify-center mt-5 mb-2.5">
                <div className="flex flex-col w-full border px-5 pb-5 pt-2">
                    <h2 className="mb-3">In the beginning you gave the following explanation regarding your stance on the topic:</h2>
                    <span id="prev-arguments" className="m-px break-words text-base overflow-y-auto max-h-60" dangerouslySetInnerHTML={{ __html: formattedMessage }}></span>
                </div>
            </div>
            <p>After having informed yourself about the topic, are there any reasons previously not mentioned? If so please explain them here:</p>
            <ArgumenTextarea argument={argument} changeArgument={changeArgument} />
            <PostTaskButton />
        </div>
    );
};
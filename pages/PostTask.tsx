import SelectedTaskBox from "@/components/SelectedTaskBox";
import Likertscale from "@/components/Likertscale";
import PostTaskButton from "@/components/PostTaskButton";
import { useTaskTopicStore } from '@/src/tasktopic';
import { useArgumentsBeforeStore } from '@/src/argumentbefore';


export default function PostTask() {
    const taskTopic = useTaskTopicStore();
    const argumentbefore = useArgumentsBeforeStore();
    const formattedMessage = argumentbefore['arguments'].replace(/\n/g, '<br>');
    
    return (
        <div className="flex-col justify-center">
            <h1>Please state to which degree you agree or disagree with the following topic</h1>
            <SelectedTaskBox topic={taskTopic['taskTopic']} />
            <Likertscale topic={taskTopic['taskTopic']} valuation={true} likertChange={undefined} />
            <div className="flex justify-center mt-5">
                <div className="flex flex-col w-full border px-5 pb-5 pt-2">
                    <h2 className="mb-3">In the beginning you gave the following explanation regarding your stance on the topic:</h2>
                    <span className="m-px break-words text-base" dangerouslySetInnerHTML={{ __html: formattedMessage }}></span>
                </div>
            </div>
            <p>After having informed yourself about the topic, are there any reasons previously not mentioned? If so please explain them here:</p>
            <textarea className="w-full bg-transparent border-custom-primary border-2 border-primary focus:outline-none shadow-xl focus:ring-1
            rounded-lg h-32 mt-3"
                placeholder="Type a message..." id="message-input"></textarea>
            <PostTaskButton nextPage={undefined} setArgumentsBevorTask={undefined} addTime={undefined} />
        </div>
    );
};
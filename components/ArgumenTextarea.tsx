'use client'
import { useArgumentsBeforeStore } from "@/src/argumentbefore";
import { useArgumentsAfterStore } from "@/src/argumentsafter";

export default function ArgumentTextarea({before}: {before: boolean}) {
    let argument;
    let changeArgument;
    if (before){
        changeArgument = useArgumentsBeforeStore((state) => state.setArgumentsBefore);
        argument = useArgumentsBeforeStore();
    } else {
        changeArgument = useArgumentsAfterStore((state) => state.setArgumentsAfter);
        argument = useArgumentsAfterStore();
    }
    return (
        <textarea className="w-full bg-transparent border-custom-primary border-2 border-primary focus:outline-none shadow-xl focus:ring-1
            rounded-lg h-32 mt-3" value={argument['arguments']}
            placeholder="Type a message..." id="message-input" onChange={(e) => changeArgument(e.currentTarget.value)}></textarea>
    );
}

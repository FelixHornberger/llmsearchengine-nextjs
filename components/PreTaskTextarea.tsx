'use client'
import { useArgumentsBeforeStore } from "@/src/argumentbefore";

export default function PreTaskTextarea() {
    const argument = useArgumentsBeforeStore();
    const changeArgumentsbefore = useArgumentsBeforeStore((state) => state.setArgumentsBefore);
    return (
        <textarea className="w-full bg-transparent border-custom-primary border-2 border-primary focus:outline-none shadow-xl focus:ring-1
            rounded-lg h-32 mt-3" value={argument['arguments']}
            placeholder="Type a message..." id="message-input" onChange={(e) => changeArgumentsbefore(e.currentTarget.value)}></textarea>
    );
}

'use client'
import { useArgumentsBeforeStore } from "@/src/argumentbefore";
import { useArgumentsAfterStore } from "@/src/argumentsafter";

interface ArgumenTextareaProps {
  changeArgument: (value: string) => void;
  argument: any;
}

export default function ArgumentTextarea({ changeArgument, argument }: ArgumenTextareaProps) {

  return (
    <textarea className="w-full bg-transparent border-custom-primary border-2 border-primary focus:outline-none shadow-xl focus:ring-1 rounded-lg h-32 mt-3"
      value={argument['arguments']}
      placeholder="Type a message..."
      id="message-input"
      onChange={(e) => changeArgument(e.currentTarget.value)} />
  );
}

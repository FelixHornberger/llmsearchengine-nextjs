"use client";

import { useRef } from "react";

import { useMessage } from "@/src/message";

interface Message {
    id: number;
    user: string;
    content: string;
}

function MessageInitializer({messages}: { messages: Message[]}) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useMessage.setState({ messages });
    initialized.current = true;
  }
  return null;
}

export default MessageInitializer;
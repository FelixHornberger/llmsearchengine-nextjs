import { create } from 'zustand'

interface Message {
    id: number;
    user: string;
    content: string;
}
  
interface UseMessageState {
  messages: Message[];
  addMessage: (newMessage: Message) => void;
  updateMessage: (updatedMessage: Message) => void;
}

export const useMessage = create<UseMessageState>()((set) => ({
  messages: [],
  addMessage: (newMessage) =>
  set((state) => ({
    messages: [...state.messages, newMessage],
  })),
  updateMessage: (updatedMessage) =>
  set((state) => ({
    messages: state.messages.map((message) =>
      message.id === updatedMessage.id ? updatedMessage : message
    ),
  })),
}))

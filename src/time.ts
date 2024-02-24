import { create } from 'zustand'

interface TimeData {
    start: string;
    preStudy: string;
    preTask: string;
    taskDescription: string;
    task: string;
    postTask: string;
    postStudy: string;
}

interface TimeDataState {
    timeData: TimeData;
    setTimeData: (newValues: Partial<TimeData>) => void;
}

export const useTimeDataStore = create<TimeDataState>()((set) => ({
    timeData: {
        start: '',
        preStudy: '',
        preTask: '',
        taskDescription:'',
        task: '',
        postTask: '',
        postStudy: '',
    },
    setTimeData: (newValue: any) =>
      set((state) => ({
        timeData: { ...state.timeData, ...newValue }
      })),
}));
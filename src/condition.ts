import { create } from 'zustand'

interface conditionState {
    condition: string;
    setlevelOfEducation: (by: string) => void;
}

export const useConditionStore = create<conditionState>()((set) =>({
    condition: "",
    setlevelOfEducation: (by) => set(({condition: by}))
}));
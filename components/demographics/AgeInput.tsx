'use client';
import { useAgeStore } from "@/src/age";

export default function AgeInput() {
    const setAge = useAgeStore((state) => state.setAge)
    return (
        <input type="number" className="h-6 w-full text-custom-accent-text" onChange={(e) => setAge(e.target.value)} placeholder="e.g.18" id="age"></input>
    );
}
'use client';
import { useLevelOfEducationStore } from "@/src/education";

export default function Education(){

    const setLevelOfEducation = useLevelOfEducationStore((state) => state.setlevelOfEducation)

    return(
    <select id="highest-level-of-education" className="h-6 w-full text-custom-accent-text" onChange={(e) => setLevelOfEducation(e.target.value)}>
        <option disabled selected>
            Select an option
        </option>
        <option id="placeholder">less than high school</option>
        <option id="placeholder">high school</option>
        <option id="placeholder">bachelor</option>
        <option id="placeholder">master</option>
        <option id="placeholder">doctorate</option>
        <option id="none">Don&apos;t want to specify</option>
    </select>);
}
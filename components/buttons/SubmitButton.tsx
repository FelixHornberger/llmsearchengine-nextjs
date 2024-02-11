'use client'
import { useTimeDataStore } from '@/src/time'; 
import { useAgeStore } from "@/src/age";
import { useLevelOfEducationStore } from "@/src/education";
import { useGenderStore } from '@/src/gender';
import { useOccupationStore } from '@/src/occupation';

// TODO: Add all zustaende, generate Userfeedback
// AGE, Education, Gender, Occupation (Wee need to check if age is numeric)


export default function SubmitButton() {
    
    const setTime = useTimeDataStore((state) => state.setTimeData);
    const ageStore = useAgeStore();
    const educationStore = useLevelOfEducationStore();
    const genderStore = useGenderStore();
    const occupationStore = useOccupationStore();

    const handleclick = () => {
        // fill in validate logic
        if (isNaN(Number(ageStore.age))) {
            console.log("TEST")
        }
        setTime({postStudy: new Date().toLocaleTimeString()});
        console.log("Sumbit needs a connection to the db")
    }
    return (
        <button className='bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3' onClick={() => handleclick()}>Submit</button>
    );
};
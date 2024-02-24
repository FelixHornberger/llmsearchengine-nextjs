'use client'
import { useTimeDataStore } from '@/src/time';
import { useAgeStore } from "@/src/age";
import { useLevelOfEducationStore } from "@/src/education";
import { useGenderStore } from '@/src/gender';
import { useOccupationStore } from '@/src/occupation';
import { useVPStore } from '@/src/vp';
import { usePageStore } from '@/src/pagecounter';

// TODO: Add all zustaende, generate Userfeedback
// AGE, Education, Gender, Occupation (Wee need to check if age is numeric)


export default function SubmitButton() {

    const setTime = useTimeDataStore((state) => state.setTimeData);
    const nextPage = usePageStore((state) => state.increse)
    const ageStore = useAgeStore();
    const educationStore = useLevelOfEducationStore();
    const genderStore = useGenderStore();
    const occupationStore = useOccupationStore();
    const setVP = useVPStore((state) => state.setVP);
    let occupation = occupationStore['occupation'];
    occupation = occupation.toLocaleLowerCase();

    const handleclick = () => {
        // fill in validate logic and create a feedback for the user that only numbers are accepted as value at the value age;
        if (isNaN(Number(ageStore.age))) {
            console.log("TEST")
        }

        if (occupation.includes('student')) {
            setVP(true);
        }

        setTime({ postStudy: new Date().toLocaleTimeString() });
        nextPage(1);
        console.log("Sumbit needs a connection to the db")
    }
    return (
        <button className='bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3' onClick={() => handleclick()}>Submit</button>
    );
};
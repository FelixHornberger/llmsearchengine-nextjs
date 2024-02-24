'use client'
import { useVPStore } from "@/src/vp";

// TODO: Need a validation logic for this


export default function SubmitVPButton() {

    const setVP = useVPStore((state) => state.setVP);
    
    const handleclick = () => {
        setVP(false);
        console.log("Sumbit needs a connection to the db")
    }
    return (
        <button className='bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3' onClick={() => handleclick()}>SubmitVP</button>
    );
};
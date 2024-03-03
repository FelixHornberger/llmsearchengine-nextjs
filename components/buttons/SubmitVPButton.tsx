'use client'
import { useDegreeProgrammStore } from "@/src/degreeprogramm";
import { useFirstNameStore } from "@/src/firstname";
import { useLastNameStore } from "@/src/lastname";
import { useMatrikelStore } from "@/src/matrikel";
import { useVPStore } from "@/src/vp";
import UserFeedback from "../UserFeedback";
import { useState } from "react";

// TODO: Need a validation logic for this


export default function SubmitVPButton() {

    const setVP = useVPStore((state) => state.setVP);

    const { matrikel } = useMatrikelStore();
    const { firstName } = useFirstNameStore();
    const { lastName } = useLastNameStore();
    const { degreeProgramm } = useDegreeProgrammStore();

    const [showUserFeedback, setVisbility] = useState(false);

    const handleclick = () => {
        if (matrikel !== '' &&
            firstName !== '' &&
            lastName !== '' &&
            degreeProgramm !== '') {
            setVP(false);

            const submitData = async () => {
                const response = await fetch('/api/submitStudent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "matrikel": matrikel,
                        "firstname": firstName,
                        "lastname": lastName,
                        "degreeProgramm": degreeProgramm,
                        "time": new Date().toDateString()
                    }),
                });
            }
            submitData();
        } else {
            setVisbility(true);
        }
    }
    return (
        <>
            {showUserFeedback && <UserFeedback feedbackText='In order for the VP hours to be credited, we need all the data!' />}
            <button className='bg-custom-accent p-2 font-semibold my-3' onClick={() => handleclick()}>SubmitVP</button>
        </>
    );
};
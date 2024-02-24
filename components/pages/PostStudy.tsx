import SubmitButton from "@/components/buttons/SubmitButton";
import Occupation from "../demographics/Occupation";
import Education from "../demographics/Education";
import Gender from "../demographics/Gender";
import AgeInput from "../demographics/AgeInput";

// TODO: Submission needs to return Date by Input of Matrikelnummer
// TODO: Add for every Input a Zustand
// Refactor every input component to a client side component

export default function PostStudy() {
    return (
        <div className="text-center px-5">
            <p className="mb-3">
                Thank you for your work so far. For the last step all you have to do is
                answer some question pretaining to your personal demographics.
            </p>
            <div className="mb-3">
                <p>How old are you?</p>
                <AgeInput></AgeInput>
            </div>
            <div className="mb-3">
                <p> What gender do you identify with? </p>
                <Gender></Gender>
            </div>
            <div className="mb-3">
                <p>What&apos;s your highest level of education&apos;</p>
                <Education></Education>
            </div>
            <div className="mb-3">
                <p>
                    What&apos;s your current occupation? (e.g.: if you are currently studying
                    at a university insert &apos;Student&apos;)
                </p>
                <Occupation></Occupation>
            </div>
            <SubmitButton></SubmitButton>
        </div>
    );
};
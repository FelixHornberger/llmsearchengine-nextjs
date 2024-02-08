import SubmitButton from "@/components/buttons/SubmitButton";

// TODO: Submission needs to return Date by Input of Matrikelnummer
// Refactor every input component to a client side component

export default function PostStudy() {
    return (
        <>
            <p className="mb-3">
                Thank you for your work so far. For the last step all you have to do is
                answer some question pretaining to your personal demographics.
            </p>
            <div className="mb-3">
                <p>How old are you?</p>
                <input type="number" className="h-6 w-full text-custom-accent-text" placeholder="e.g.18" id="age"></input>
            </div>
            <div className="mb-3">
                <p> What gender do you identify with? </p>
                <select id="gender" className="h-6 w-full text-custom-accent-text">
                    <option value="" disabled selected>
                        Select an option
                    </option>
                    <option id="female">Female</option>
                    <option id="male">Male</option>
                    <option id="divers">Divers</option>
                    <option id="none">Don&apos;t want to specify</option>
                </select>
            </div>
            <div className="mb-3">
                <p>What&apos;s your highest level of education&apos;</p>
                <select id="highest-level-of-education" className="h-6 w-full text-custom-accent-text">
                    <option disabled selected>
                        Select an option
                    </option>
                    <option id="placeholder">less than high school</option>
                    <option id="placeholder">high school</option>
                    <option id="placeholder">bachelor</option>
                    <option id="placeholder">master</option>
                    <option id="placeholder">doctorate</option>
                </select>
            </div>
            <div className="mb-3">
                <p>
                    What&apos;s your current occupation? (e.g.: if you are currently studying
                    at a university insert &apos;Student&apos;)
                </p>
                <input
                    id="occupation"
                    className="h-6 w-full text-custom-accent-text"
                    type="text"
                    placeholder="e.g Student"
                ></input>
            </div>
            <SubmitButton></SubmitButton>
        </>
    );
};
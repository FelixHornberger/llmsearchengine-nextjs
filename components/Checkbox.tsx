'use client'
import { useCheckboxStore } from "@/src/checkbox";

export default function Checkbox({checkboxText}: {checkboxText:string}) {
    // I accept the conditions
    const checkboxStore = useCheckboxStore();
    const setIC = useCheckboxStore((state) => state.setAccpted);

    return (
        <div className="px-5 sm:justify-center sm:flex mb-2" >
            <input type="checkbox" name="InformedConsent" id="InformedConsentCheckBox" onChange={() => setIC(!checkboxStore['accepted'])} />
            <label htmlFor="InformedConsentCheckBox" className="px-1">{checkboxText}</label>
        </div>
    );
}
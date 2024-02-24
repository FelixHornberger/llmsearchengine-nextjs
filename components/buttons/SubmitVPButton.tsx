'use client'

// TODO: Add all zustaende, generate Userfeedback
// AGE, Education, Gender, Occupation (Wee need to check if age is numeric)


export default function SubmitVPButton() {
    


    const handleclick = () => {
        console.log("Sumbit needs a connection to the db")
    }
    return (
        <button className='bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3' onClick={() => handleclick()}>SubmitVP</button>
    );
};
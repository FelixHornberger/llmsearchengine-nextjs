'use client'
import { usePageStore } from '@/src/pagecounter';



function PreTaskButton() {

    const nextPage = usePageStore((state) => state.increse);
    //TODO: ADDTime Function
    const handleClick = () => {
        nextPage(1);
    }
    return (
        <button className="bg-custom-accent p-2 text-custom-accent-text font-semibold mt-3" onClick={() => handleClick()}>Continue</button>
    )
}

export default PreTaskButton;
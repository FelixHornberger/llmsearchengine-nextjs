import NextPageButton from "@/components/buttons/NextPageButton";

function Intro({nextPage, addTime}){
    return(
    <>
        <div className="text-center place-items-center mb-3">
            <h1 >Welcome to our Study</h1>
        </div>
        <div className="task-box mb-3 max-w-prose place-items-center px-5 border border-white">
            <p className="text-padding text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <NextPageButton nextPage={nextPage} addTime={addTime}></NextPageButton>
    </>);
}


export default Intro;
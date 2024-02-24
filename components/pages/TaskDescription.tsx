/*
    This ist just a Page where we define the Text:
    This is the page where the user is only shown the description of the next page.
    We need to introduce a new variable in the TimeStore state where the submit is tracked. Whereby we could theoretically understand this as task time? But I don't know how clever that is?
*/

import TaskDescriptionButton from "../buttons/TaskDescirptionButton";

export default function TaskDescription(){
    return(
    <div className="flex flex-col text-center justify-center">
        <p>Lorem Ipsum tralla</p>
        <TaskDescriptionButton/>
    </div>);
}
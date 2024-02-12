// TODO: fill in the Strings

const schoolUniform: { [key: string]: string } = {
    pro: '',
    neutral: '',
    con: ''
}

const propertyRights: { [key: string]: string } = {
    pro: '',
    neutral: '',
    con: ''
}

const obesity: { [key: string]: string } = {
    pro: '',
    neutral: '',
    con: ''
}

interface Message {
    id: number;
    user: string;
    content: string;
    timestamp: string;
}

export function generatePrompt(userInput:string, taskTopic:string, condition:string, messages:Message[] | null ) {
    let prompt ='You are a Informationsystem your task is to inform the user with the following information: \n';

    switch (taskTopic){
        case 'Should students wear school uniform?':
            prompt += schoolUniform[condition];
            break;
        case 'Should intellectual property rights exist?':
            prompt += propertyRights[condition];
            break;
        case 'Is Obesity a Disease?':
            prompt += obesity[condition];
            break;
    };
    if (messages !== null){
        prompt += '\n The following is the chat history:'
        for (let message of messages){
            prompt += `\n ${message['user']}: ${message['content']} \ndate of message: ${message['timestamp']}`;
        }
    }
    return prompt += '\n This is the prompt of the user: ' + userInput;
}
function Message({ id, user, message }: { id: number, user: string, message: string }) {

    const formattedMessage = message.replace(/\n/g, '<br>');

    return(
        <div className="mb-2.5" id={`message-${id}`}>
            <span className="font-semibold">{user}:</span>
            <br/>
            <span className="m-px break-words" dangerouslySetInnerHTML={{ __html: formattedMessage }}></span>
        </div>
    )
}

export default Message
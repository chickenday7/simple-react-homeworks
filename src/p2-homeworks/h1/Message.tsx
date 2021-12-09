import React, {FC} from 'react'
import MessageItem from "./MessageItem";

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time:string
}


const Message:FC<MessagePropsType> = (props) => {
    return (
        <>
            <div className={'message'}>
                <MessageItem {...props} />
                <div className={'message__text'}>
                    <textarea  placeholder={'Write text'} />
                </div>
                <div className={'message__button'}>
                    <button>Send</button>
                </div>
            </div>
        </>
)
}

export default Message
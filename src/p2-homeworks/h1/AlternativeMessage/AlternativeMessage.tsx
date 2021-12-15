import React, {FC} from 'react'
import AlternativeMessageItem from "./AlternativeMessageItem/AlternativeMessageItem";
import {messageDataType} from "../../../Redux/H1/H1Reducer";

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time:string
}


const AlternativeMessage = (props:any) => {


    let listMessage = props.messageData.map((elem: messageDataType) => {
        return <AlternativeMessageItem key={elem.id} id={elem.id} message={elem.message}
                            avatar={elem.avatar} name={elem.name} time={elem.time}/>
    })



    let textAreaMessage:any = React.createRef()



    type onUpdateMessageType = () => void
    const onUpdateMessage:onUpdateMessageType = () => {
        let text = textAreaMessage.current.value
        props.updateMessageText(text)
    }


    type onAdddMessageType = () => void
    const onAddMessage:onAdddMessageType = () => {
        const time = `${new Date().getHours()}:${new Date().getMinutes() }`
        props.newMessageText.trim() === ''
            ? alert('Message === null')
            : props.addMessage(time)
    }



    return (
        <>
            <span>ТУТ С РЕДАКСОМ</span>
            <div className={'message'}>
                {listMessage}
                <div className={'message__text'}>
                    <textarea ref={textAreaMessage} onChange={onUpdateMessage}
                              value={props.newMessageText} placeholder={'Write text'} />
                </div>
                <div className={'message__button'}>
                    <button onClick={onAddMessage} >Send</button>
                </div>
            </div>
        </>
    )
}

export default AlternativeMessage
import React from "react";


const MessageItem = (props:any) => {


    return (
        <div className={'messageItem'}>
            <div className={'messageItem__avatar'}>
                <img src={props.avatar} alt={'avatar'}/>
            </div>
            <div className={'arrow'} >

            </div>
            <div className={'messageItem__description'}>
                <div className={'description'}>
                    <div className={'description__name'}>
                        <span>{props.name}</span>
                    </div>
                    <div className={'description__text'}>
                        {props.message}
                    </div>
                    <div className={'description__time'}>
                        <span>{props.time}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MessageItem
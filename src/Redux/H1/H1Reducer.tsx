

const NEW_TEXT = 'NEW_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

export type messageDataType = {
    key?:number
    avatar: string
    id:number
    name:string
    message:string
    time:string
}
export type stateMessageType = {
    messageData: Array<messageDataType>
    newMessageText :string
}

let initialState:stateMessageType = {
    messageData: [
        {id:1, avatar:'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',name:'chickenDay', message:'Send me msg, pls ', time:'this time'},

    ],
    newMessageText: ''
}

const messageDataReducer:any = (state:stateMessageType = initialState , action:any) => {
    switch (action.type){
        case NEW_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData,
                    {
                        id: state.messageData.length + 1,
                        avatar:'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                        name: 'chickenDay',
                        message: state.newMessageText,
                        time: action.time,
                    }
                ],
                newMessageText: '',
            }
        default:
            return state
    }



}

export default messageDataReducer


export const addMessageAC = (time:string) => {
    return {
        type: ADD_MESSAGE,
        time: time
    }
}


export const updateMessageTextAC = (text:string) => {
    return {
        type:NEW_TEXT,
        text: text
    }
}
import React from "react";
import {connect} from "react-redux";
import {stateType} from "../../../Redux/store";
import {addMessageAC, updateMessageTextAC} from "../../../Redux/H1/H1Reducer";
import AlternativeMessage from "./AlternativeMessage";
import {Dispatch} from "redux";


class AlternativeMessageAPI extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <AlternativeMessage messageData={this.props.messageData}
                         newMessageText={this.props.newMessageText}
                         updateMessageText = {this.props.updateMessageText}
                         addMessage = {this.props.addMessage}
        />
    }
}

let mapStateToProps = (state: stateType) => {
    return {
        messageData:state.homework1.messageData,
        newMessageText: state.homework1.newMessageText
    }
}

type MapDispatchPropsType = {
    updateMessageText: (text: string) => void,
    addMessage: (time: string) => void,
}

    let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateMessageText: (text:string) => {
            dispatch(updateMessageTextAC(text))
        },
        addMessage: (time:string) => {
            dispatch(addMessageAC(time))
        }
    }
}


export const AlternativeMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AlternativeMessageAPI)















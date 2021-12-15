import React, {FC} from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number) => void // need to fix any
}
const spanStyle = {
    margin:'5px'
}


const Affair:FC<AffairPropsType> = (props) => {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id) }// need to fix

    return (
        <div>
            <span style={spanStyle} >{props.affair.name}</span>
            <span style={spanStyle}>{props.affair.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

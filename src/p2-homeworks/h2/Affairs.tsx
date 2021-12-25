import React, {FC,MouseEvent}  from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from "./HW2";





type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (arg0: FilterType) => void
    deleteAffairCallback: (_id:number) => void
}



const Affairs:FC<AffairsPropsType> = (props) => {





    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (e:string) => {props.setFilter(e as "all" | "high" | "middle" | "low")}
    const setAllButton = (e:MouseEvent<HTMLButtonElement>)=>{setAll(e.currentTarget.name)}


    return (
        <div>
            {mappedAffairs}
            <button name={'all'} onClick={setAllButton}>All</button>
            <button name={'high'} onClick={setAllButton}>High</button>
            <button name={'middle'} onClick={setAllButton}>Middle</button>
            <button name={'low'} onClick={setAllButton}>Low</button>
        </div>
    )
}

export default Affairs

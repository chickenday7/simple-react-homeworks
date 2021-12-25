import React from 'react'
import s from './Greeting.module.css'
import {AddUser, SetNameCallback} from "./GreetingContainer";

type GreetingPropsType = {
    name: string
    setNameCallback: SetNameCallback
    addUser: AddUser
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? s.error : s.notError // need to fix with (?:)
    return (
        <div>
            <input value={name}
                   onChange={(e) => {setNameCallback(e.currentTarget.value)} }
                   className={inputClass} />
            <span>{error}</span>
            <button disabled={name.trim() === ''}  onClick={() => {addUser(name)} }>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting

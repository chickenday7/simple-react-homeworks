import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import { v1 as uuidv1 } from 'uuid';

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
    key: string
}
export type AddUserCallback = (name:string) => void

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any



    const addUserCallback:AddUserCallback = (name) => { // need to fix any
        setUsers([...users,{_id: uuidv1(), name:name, key: uuidv1()}]) // need to fix
    }
    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3

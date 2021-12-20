import React, {useState} from 'react'
import Greeting from './Greeting'
import {AddUserCallback, UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: AddUserCallback // need to fix any
}
export type SetNameCallback = (e: string) => void
export type AddUser = (name: string) => void
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback: SetNameCallback = (e) => { // need to fix any
        setName(e) // need to fix
    }
    const addUser: AddUser = (text) => {
        if (text.trim() === ''){
            setError('Давай без пустых строк, браток')
            setName('')
        }else if (text.trim().length < 3){
            setError('Имя должно быть больше 3 символов')
            setName(text.trim())
        }else{
            setError('')
            alert(`Hello ${text.trim()} !`)
            addUserCallback(text)
            setName('')
        }


    }

    const totalUsers: number = users.length // need to fix

    const arrayUsers = users.map(elem => {
        return <div key={elem.key}><span>{elem.name}</span></div>
    })

    return (
        <>
            {arrayUsers}
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        </>
    )
}

export default GreetingContainer

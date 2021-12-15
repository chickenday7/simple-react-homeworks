import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type FilterType = 'all' | AffairPriorityType

export type AffairType = {
    _id: number,
    name: string,
    priority:FilterType,
}


// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions


type FilterAffairs = (affairs:Array<AffairType>, filter:FilterType) => Array<AffairType>
//_____________________________________________________________________________
export const filterAffairs:FilterAffairs = (affairs, filter)  => { // need to fix any
    if (filter === 'all') return affairs
    if (filter === "high")return affairs.filter((elem:AffairType) => elem.priority === 'high')
    if (filter === 'middle') return affairs.filter((elem:AffairType) => elem.priority === 'middle')
    if (filter === 'low') return affairs.filter((elem:AffairType) => elem.priority === 'low')
    else return affairs
}


type DeleteAffair = (affairs: Array<AffairType>, _id:number) => Array<AffairType>
//_____________________________________________________________________________
export const deleteAffair:DeleteAffair = (affairs, _id) => {
    return affairs.filter((elem:AffairType) => elem._id !== _id)
}

function HW2() {

    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)


    type DeleteAffairCallback = (_id:number) => void
    const deleteAffairCallback:DeleteAffairCallback = (_id) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2

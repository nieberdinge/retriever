import React from 'react'
import Activity from './components/Activity';

export default function Home() {
    
    let cards = (
        <div>
            {/* <h3>Activity Calendar</h3> */}
            <div className='calendar'>
                {createCalendar()}
            </div>
        </div>
    )
    return cards;
}

function createCalendar() {
    let days = []
    for (let i = 0; i < 31; i++){
        days.push(<Activity key={i} day={i}/>)
    }
    return days
}
import React from 'react'
import { arrayBuffer } from 'stream/consumers';

export default function Home() {
    
    let cards = (
        <div>
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
        days.push(<div className='card' key={i}>day {i+1}</div>)
    }
    return days
}
import React from 'react'
import '../sidebar/sidebar.css'

export default function sidebar() {
    return (
        <div className='container'>
            <div className='sidebar'>
            <h1>Sidebar</h1>
            <div className='search'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input></input>
            </div>
            </div>
        </div>
    )
}

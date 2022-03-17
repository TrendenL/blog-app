import React from 'react'
import {Link} from 'react-router-dom'
import '../navbar/navbar.css'

export default function Modal(props) {
        return (
                <div className='modalContainer' onMouseLeave={() => props.setOpenModal(false)}>
                        <Link to='/Settings'>
                                <li><i class="fa-solid fa-gear"></i></li>
                        </Link>
                        <li>Logout <i class="fa-solid fa-right-from-bracket"></i></li>
                </div>
        )
}

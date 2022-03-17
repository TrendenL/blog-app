import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import '../navbar/navbar.css'

export default function Navbar() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className='navbar'>
            <div className='nav'>
                <div className='logo'>FH</div>
                <div className='nav-items'>
                    <Link to='/'>
                        <i class="fa-solid fa-house"></i>
                        <span>Home</span>
                    </Link>
                    <Link to='/Write'>
                        <i class="fa-solid fa-pen-to-square"></i>
                        <span>Write</span>
                    </Link>
                        <i class="fa-brands fa-adn"></i>
                        <i class="fa-solid fa-paper-plane"></i>
                </div>
                
                <div>

                <div className='search'></div>

                <div className='profile'>
                    <i onClick={() => openModal ? setOpenModal(false) :  openModal ? false : setOpenModal(true)} class="fa-regular fa-user"></i>
                    </div>
                </div> 
            </div>
            {openModal && <Modal setOpenModal={setOpenModal}/>}
        </div>
    )
}

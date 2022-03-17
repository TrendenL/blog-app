import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/pages/Home/Home'
import SinglePage from './components/pages/singlePost/singlePost'
import WritePage from './components/pages/writePage/WritePage'
import Settings from './components/pages/settingsPage/Settings'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import Sidebar from './components/sidebar/Sidebar'
import './style.css'

export default function App() {
    const user = true
    return (
        <div className='container'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Login' element={user ? <Home /> : <Login />}/>
                <Route path='/Register' element={user ? <Home /> :  <Register />}/>
                <Route path='/Write' element={user ? <WritePage /> : <Register />}/>
                <Route path='/Post/:PostId' element={<SinglePage />}/>
                <Route path='/Settings' element={ user ? <Settings /> : <Register />}/>
            </Routes>
            <Sidebar />
        </div>
    )
}

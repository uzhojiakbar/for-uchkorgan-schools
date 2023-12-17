import React from 'react'
import { MainRoot } from './style'
import './style.css'
import Navbar from '../Components/Navbar'

const Root = () => {
    return (
        <MainRoot className='main'>
            <Navbar />
        </MainRoot>
    )
}

export default Root
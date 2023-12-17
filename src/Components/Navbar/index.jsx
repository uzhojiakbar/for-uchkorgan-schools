import React, { useState } from 'react'
import { Links, NavbarDesign, Options, Title } from './style'
import { useNavigate } from 'react-router-dom'
import { NavbarData } from '../../Mock/navbar';
const Navbar = () => {
    const navigate = useNavigate();

    const [bar, setBar] = useState(false)

    const GoHome = () => {
        navigate('/')
        setBar(false)
    }
    return (
        <NavbarDesign id='header' >
            <Title onClick={GoHome} className="title">
                2-maktab
            </Title>
            <Links bar={bar} className="links">
                <div className="option">
                    <Title onClick={GoHome} className="title">
                        2-maktab
                    </Title>
                    <div onClick={() => setBar(!bar)} className="close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
                {
                    NavbarData.map((v) => {
                        return <a key={v.id} onClick={() => setBar(false)} href={`#${v.idPath}`}>{v.name}</a>
                    })
                }
            </Links>

            <Options>
                {/* <div className="box">
                    <i class="fa-regular fa-eye"></i>
                </div> */}
                <i onClick={() => setBar(!bar)} class="fa-solid fa-bars"></i>
            </Options>
        </NavbarDesign >
    )
}

export default Navbar
import React from 'react'
import { Links, NavbarDesign, Options, Title } from './style'
import { useNavigate } from 'react-router-dom'
import { NavbarData } from '../../Mock/navbar';
const Navbar = () => {
    const navigate = useNavigate();

    // const [bar, setBar] = useState(false)
    return (
        <NavbarDesign id='header' >
            <Title onClick={() => navigate('/')} className="title">
                2-maktab
            </Title>
            <Links className="links">
                {
                    NavbarData.map((v) => {
                        return <a key={v.id} href={`#${v.idPath}`}>{v.name}</a>
                    })
                }
            </Links>

            <Options>
                {/* <div className="box">
                    <i class="fa-regular fa-eye"></i>
                </div> */}
                <i class="fa-solid fa-bars"></i>
            </Options>
        </NavbarDesign >
    )
}

export default Navbar
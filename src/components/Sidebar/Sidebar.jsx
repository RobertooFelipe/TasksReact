import CustomButton from '../CustomButton/CustomButton'
import { useNavigate } from 'react-router-dom'

import './Sidebar.scss'
import logo from '../../assets/images/logoTasksRobertoo.svg'

const Sidebar = () => {

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        navigate('/login')
    }

    return(
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Robertoo Felipe Taks" />
            </div>

            <div className="sign-out">
                <CustomButton onClick={handleLogoutClick}>
                    Sair
                </CustomButton>
            </div>
        </div>
    )
}

export default Sidebar;
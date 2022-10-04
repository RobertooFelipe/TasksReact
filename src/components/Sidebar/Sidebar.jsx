import CustomButton from '../CustomButton/CustomButton'

import './Sidebar.scss'
import logo from '../../assets/images/logoTasksRobertoo.svg'

const Sidebar = () => {
    return(
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Robertoo Felipe Taks" />
            </div>

            <div className="sign-out">
                <CustomButton>
                    Sair
                </CustomButton>
            </div>
        </div>
    )
}

export default Sidebar;
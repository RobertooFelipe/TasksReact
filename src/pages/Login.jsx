import { useNavigate } from 'react-router-dom'
import CustomButton from '../components/CustomButton/CustomButton'

import './Login.scss'
import logo from '../assets/images/logoTasksRobertoo.svg'

const Login = () => {

    const navigate = useNavigate();

    const handleSiginClick = () => {
        navigate('/Roberto')
    }

    return(
        <div className="login-container">
            <img src={logo} alt="Logo Robertoo Felipe Task" />
            <div className="button-container">
                <CustomButton onClick={handleSiginClick}>
                    Entrar
                </CustomButton>
            </div>
        </div>
    )
}

export default Login;
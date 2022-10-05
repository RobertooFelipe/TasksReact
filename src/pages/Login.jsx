import CustomButton from '../components/CustomButton/CustomButton'

import './Login.scss'
import logo from '../assets/images/logoTasksRobertoo.svg'

const Login = () => {
    return(
        <div className="login-container">
            <img src={logo} alt="Logo Robertoo Felipe Task" />
            <div className="button-container">
                <CustomButton>
                    Entrar
                </CustomButton>
            </div>
        </div>
    )
}

export default Login;
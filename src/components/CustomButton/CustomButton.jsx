import './CustomButton.scss'

const CustomButton = ({ children, onClick }) => {
    <div className="custom-button-container" onClick={onClick}>
        {children}
    </div>
}

export default CustomButton;
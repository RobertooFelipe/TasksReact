import "./CustomInput.scss"

const CustomInput = ({ label, value, onChange }) => {
    return (
        <div className="custom-input-container">
        <input 
            type="text" 
            className="custom-input"
            onChange={(e) => onChange(e)} />

        {label ? (
            <label className={`${
                value.lenght > 0 ? "shrink" : ""
            } custom-input-label`}
            >{label}</label>
        ) : null}
    </div>
    )
}

export default CustomInput
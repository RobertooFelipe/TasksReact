const CustomInput = ({ label, value }) => {
    return (
        <div className="custom-input-container">
        <input type="text" className="custom-input" />

        {label ? (
            <label className={`${
                value.lenght !== 0 ? "shrink" : ""
            } custom-input-label`}
            ></label>
        ) : null}
    </div>
    )
}

export default CustomInput
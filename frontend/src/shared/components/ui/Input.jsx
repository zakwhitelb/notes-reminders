import PropTypes from "prop-types";

function Input({ type, name, placeholder, value, handleChange, colorPassword, create_account }) {
    return (
        <div className="flex flex-col gap-[10px]">
            <label 
                htmlFor={name}
                className="text-start text-[18px] text-[var(--black2white)] font-[heebo-semi-bold]"
            >
                {placeholder}
            </label>
            
            {type === "password" && create_account ?
                <div className="flex h-[40px] ">
                    <input 
                        type={type}
                        placeholder={placeholder} 
                        value={value} 
                        onChange={(e) => {handleChange(name, e.target.value)}}
                        className="flex items-center w-full h-full bg-[var(--skyWhite2skyBlack)] text-[16px] text-[var(--black2white)] font-[heebo-regular] outline-none focus:border-[1px] focus:border-r-0 focus:border-[var(--black2white)] placeholder:text-[var(--placeholder)] placeholder:font-[heebo-regular] rounded-l-[8px] px-[14px]"
                        required
                    />
                    <div className={`w-[15px] h-full rounded-r-[8px] ${colorPassword}`}></div>
                </div>
                :
                <input 
                    type={type}
                    placeholder={placeholder} 
                    value={value} 
                    onChange={(e) => {handleChange(name, e.target.value)}}
                    className="flex items-center h-[40px] bg-[var(--skyWhite2skyBlack)] text-[16px] text-[var(--black2white)] font-[heebo-regular] outline-none focus:border-[1px] focus:border-[var(--black2white)] placeholder:text-[var(--placeholder)] placeholder:font-[heebo-regular] rounded-[8px] px-[14px]"
                    required
                />
            }
        </div>
    )
}

// Define prop types
Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    colorPassword: PropTypes.string,
    create_account: PropTypes.bool.isRequired,
};

// Set default props
Input.defaultProps = {
    type: "text",
    name: "",
    placeholder: "",
    value: "",
    colorPassword: "bg-[var(--red)]",
    create_account: false,
};

export { Input };
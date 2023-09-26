import "./CustomButton.css";

const CustomButton = ({ children, btnStyle, handleClick }) => {
    return (
        <button onClick={handleClick} className={`Button ${btnStyle}`}>
            {children}
        </button>
    );
};

export default CustomButton;

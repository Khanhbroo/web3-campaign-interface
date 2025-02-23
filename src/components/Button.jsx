const Button = ({ btnType, title, handleClick, styles }) => {
    return (
        <button
            type={btnType}
            className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[16px] cursor-pointer hover:opacity-80 ${styles}`}
            onClick={handleClick}
        >
            {title}
        </button>
    );
};

export default Button;

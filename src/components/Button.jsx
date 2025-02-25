const Button = ({ btnType, title, handleClick, styles, disabled }) => {
    return (
        <button
            type={btnType}
            className={`font-epilogue font-semibold text-[16px] leading-[26px] text-[#173622] min-h-[52px] px-4 rounded-[16px] cursor-pointer ${
                disabled
                    ? 'opacity-50 cursor-not-allowed '
                    : 'cursor-pointer hover:opacity-80'
            } ${styles}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {title}
        </button>
    );
};

export default Button;

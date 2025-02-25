const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => {
    return (
        <div
            className={`w-[48px] h-[48px] rounded-[10px] ${
                isActive && isActive === name && 'bg-[#A3D1C6]'
            } flex justify-center items-center ${
                !disabled && 'cursor-pointer'
            } ${styles}`}
            onClick={handleClick}
        >
            {!isActive ? (
                <img src={imgUrl} alt={name} className="w-1/2 h-1/2" />
            ) : (
                <img
                    src={imgUrl}
                    alt={name}
                    className={`w-1/2 h-1/2 ${
                        isActive !== name && 'grayscale'
                    }`}
                />
            )}
        </div>
    );
};

export default Icon;

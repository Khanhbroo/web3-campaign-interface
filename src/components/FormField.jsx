const FormField = ({
    labelName,
    placeholder,
    inputType,
    isTextArea,
    value,
    handleOnChange,
}) => {
    return (
        <label className="flex-1 w-full flex flex-col">
            {labelName && (
                <span className="font-epilogue font-medium text-[14px] leading-[24px] text-[#3D8D7A] mb-[10px]">
                    {labelName}
                </span>
            )}
            {isTextArea ? (
                <textarea
                    required
                    value={value}
                    onChange={handleOnChange}
                    type={inputType}
                    rows={10}
                    placeholder={placeholder}
                    className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3D8D7A] bg-transparent font-epilouge text-[#173622] text-[14px] placeholder:text-[#6D706B] rounded-[10px] sm:min-w-[300px]"
                />
            ) : (
                <input
                    required
                    value={value}
                    onChange={handleOnChange}
                    type={inputType}
                    step="0.1"
                    placeholder={placeholder}
                    className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3D8D7A] bg-transparent font-epilouge text-[#173622] text-[14px] placeholder:text-[#6D706B] rounded-[10px] sm:min-w-[300px]"
                />
            )}
        </label>
    );
};

export default FormField;

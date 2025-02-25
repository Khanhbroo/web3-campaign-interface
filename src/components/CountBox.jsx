const CountBox = ({ title, value }) => {
    return (
        <div className="flex flex-col items-center w-[150px]">
            <h4 className="font-epilogue font-bold text-[30px] text-[#173622] bg-[#B3D8A8] rounded-t-[10px] w-full text-center truncate">
                {value}
            </h4>
            <p className="font-epilogue font-normal text-[16px] text-white bg-[#3D8D7A] rounded-b-[10px] px-3 py-2 w-full text-center truncate">
                {title}
            </p>
        </div>
    );
};

export default CountBox;

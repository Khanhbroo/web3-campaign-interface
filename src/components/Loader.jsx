import { loader } from '../assets';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-10 h-screen bg-black/64 flex flex-col items-center justify-center">
            <img
                src={loader}
                alt="loader"
                className="w-[100px] h-[100px] object-contain"
            />
            <div className="font-epilogue font-bold text-[20px] text-center text-white">
                <p>Transaction is in progress.</p>
                <p>Please wait...</p>
            </div>
        </div>
    );
};

export default Loader;

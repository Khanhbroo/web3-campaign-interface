import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { parseUnits } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { Button, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { createCampaign, address, open } = useStateContext();
    const [form, setForm] = useState({
        name: '',
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: '',
    });

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        checkIfImage(form.image, async (exists) => {
            if (exists) {
                setIsLoading(true);
                await createCampaign({
                    ...form,
                    target: parseUnits(form.target, 18),
                });
                setIsLoading(false);
                navigate('/');
            } else {
                alert('Provide valid image URL');
                setForm({ ...form, image: '' });
            }
        });
    };

    const handleConnectWallet = async () => {
        await open();
    };

    return (
        <div className="bg-[#B3D8A8] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
            {isLoading && <Loader />}
            <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#A3D1C6] rounded-[10px]">
                <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px]  leading-[38px] text-black">
                    Start a Campaign
                </h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full mt-[65px] flex flex-col gap-[30px]"
            >
                <div className="flex flex-wrap gap-[40px]">
                    <FormField
                        labelName="Your Name *"
                        placeholder="Input your name"
                        inputType="text"
                        value={form.name}
                        handleOnChange={(e) => handleFormFieldChange('name', e)}
                    />
                    <FormField
                        labelName="Compaign Title *"
                        placeholder="Write a title"
                        inputType="text"
                        value={form.title}
                        handleOnChange={(e) =>
                            handleFormFieldChange('title', e)
                        }
                    />
                </div>
                <FormField
                    labelName="Description *"
                    placeholder="Write your story"
                    isTextArea
                    value={form.description}
                    handleOnChange={(e) =>
                        handleFormFieldChange('description', e)
                    }
                />

                <div className="w-full flex justify-start items-center p-4 bg-[#3D8D7A] h-[120px] rounded-[10px]">
                    <img
                        src={money}
                        alt="money"
                        className="w-[40px] h-[40px] object-contain"
                    />
                    <h4 className="font-epilouge font-bold text-[25px] text-[#F8E8D9] ml-[20px]">
                        You will get 100% of the raised amount
                    </h4>
                </div>

                <div className="flex flex-wrap gap-[40px]">
                    <FormField
                        labelName="Goal *"
                        placeholder="ETH 0.50"
                        inputType="text"
                        value={form.target}
                        handleOnChange={(e) =>
                            handleFormFieldChange('target', e)
                        }
                    />
                    <FormField
                        labelName="End Date *"
                        inputType="date"
                        value={form.deadline}
                        handleOnChange={(e) => {
                            const selectedDate = new Date(e.target.value);
                            const minDate = new Date();
                            minDate.setDate(minDate.getDate() + 2); // Set minimum date to 2 days from today

                            if (selectedDate < minDate) {
                                alert(
                                    'The deadline must be at least 2 days from today.',
                                );
                                e.target.value = ''; // Reset the input field if invalid
                            } else {
                                handleFormFieldChange('deadline', e); // Call the existing function if valid
                            }
                        }}
                    />
                </div>

                <FormField
                    labelName="Campaign Image*"
                    placeholder="Input image URL of your campaign"
                    inputType="url"
                    value={form.image}
                    handleOnChange={(e) => handleFormFieldChange('image', e)}
                />

                <div className="flex justify-center items-center mt-[40px]">
                    {!address ? (
                        <Button
                            btnType="button"
                            title="Connect wallet to create campaign"
                            styles="flex-1 bg-[#3D8D7A] text-white"
                            handleClick={handleConnectWallet}
                        />
                    ) : (
                        <Button
                            btnType="submit"
                            title="Create a new campaign"
                            styles="flex-1 bg-[#3D8D7A] text-white"
                        />
                    )}
                </div>
            </form>
        </div>
    );
};

export default CreateCampaign;

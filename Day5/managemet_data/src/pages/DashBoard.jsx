import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFormData } from '../redux/formSlice';

const DashBoard = () => {
    const [formData, setLocalFormData] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { placeholder, value } = e.target;
        const key = placeholder.toLowerCase().replace(/\s+/g, '');

        setLocalFormData((prev => ({
            ...prev,
            [key]: value,
        })))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        dispatch(setFormData(formData)); // Dispatch the form data to Redux store
        // Save to localStorage (optional)
        // localStorage.setItem('formData', JSON.stringify(formData));

        // Navigate to another page (e.g., /summary)
        navigate('/summary');
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex flex-row items-center justify-center">
                <h1 className='text-6xl front-bold m-10'> Tracker</h1>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col item-center justify-center'>
                <label className='flex flex-col items-center justify-center'>
                    {["Name", "Email", "Current CTC", "Expected CTC", "Experience", "Tech-stack", "Goals"].map((text, i) => (
                        <input
                            key={i}
                            text={text.includes("CTC") || text.includes("Experience") ? "number" : "text"}
                            placeholder={text}
                            className='border-2 border-gray-300 rounded-md p-2 m-2 w-80'
                            onChange={handleChange}
                        />
                    ))}
                </label>
                <button
                    type='submit'
                    className='bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out m-2'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DashBoard;

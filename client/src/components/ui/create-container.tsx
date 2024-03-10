import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CreateContainer: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState({ billNumber: '', amount: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/api/container/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('POST request response:', response.data);
            window.location.href = `/transit/${id}`;
            // Optionally, handle success (e.g., show a success message)
        } catch (error) {
            console.error('Error while sending POST request:', error);
            // Optionally, handle error (e.g., show an error message)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="mb-4">
                <label htmlFor="billNumber" className="block text-gray-700 font-bold">Bill Number:</label>
                <input
                    type="text"
                    id="billNumber"
                    name="billNumber"
                    value={formData.billNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700 font-bold">Amount:</label>
                <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                />
            </div>
            <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
        </form>
    );
};

export default CreateContainer;

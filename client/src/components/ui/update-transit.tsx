import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UpdateContainer from './update-container';
import ReachedTransits from '@/dashboard/reached-transits';

const UpdateTransit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState({ location: '', remark: '' });

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
            const response = await axios.put(`http://localhost:3000/api/status/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('PUT request response:', response.data);
            window.location.href = `/transit/${id}`;
            // Optionally, handle success (e.g., show a success message)
        } catch (error) {
            console.error('Error while sending PUT request:', error);
            // Optionally, handle error (e.g., show an error message)
        }
    };


    return (
        <div className='flex flex-col w-full items-center '>
            
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 font-bold">Location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="remark" className="block text-gray-700 font-bold">Remark:</label>
                <input
                    type="text"
                    id="remark"
                    name="remark"
                    value={formData.remark}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                />
            </div>
          
            <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
        </form>
          <ReachedTransits/>
         </div>
    );
};

export default UpdateTransit;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Status {
    _id: string;
    transitId: string;
    location: string;
    remark: string;
    createdAt: string;
    updatedAt: string;
}

interface Container {
    _id: string;
    transitId: string;
    billNumber: string;
    amount: number;
    userId: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}

const TransitDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [status, setStatus] = useState<Status | null>(null);
    const [containers, setContainers] = useState<Container[]>([]);
    useEffect(() => {
        const fetchStatusAndContainers = async () => {
            try {
                const statusData = await axios.get(`http://localhost:3000/api/status/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                setStatus(statusData.data.data);

                const containerData = await axios.get(`http://localhost:3000/api/container/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                setContainers(containerData.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchStatusAndContainers();
    }, [id]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Transit Details</h1>
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold mb-2">Status</h2>
                    <div className="space-x-2">
                       
                        <button className="bg-blue-500 text-white px-2 py-1 rounded-md mb-4"
                            onClick={() => window.location.href = `/transit/create-container/${id}`}
                        >Create Containers</button>
                        <button className="bg-blue-500 text-white px-2 py-1 rounded-md mb-4"
                            onClick={() => window.location.href = `/transit/update/${id}`}
                        >Update Status</button>
                    </div>
                </div>
                {status ? (
                    <div>
                        <p><strong>Location:</strong> {status.location}</p>
                        <p><strong>Remark:</strong> {status.remark}</p>
                        <p><strong>Created At:</strong> {status.createdAt}</p>
                        <p><strong>Updated At:</strong> {status.updatedAt}</p>
                    </div>
                ) : (
                    <p>No status data available</p>
                )}
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold mb-2">Containers</h2>
                {containers.length > 0 ? (
                    containers.map(container => (
                        <div key={container._id} className="mb-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p><strong>Bill Number:</strong> {container.billNumber}</p>
                                    <p><strong>Amount:</strong> {container.amount}</p>
                                    <p><strong>User ID:</strong> {container.userId}</p>
                                    <p><strong>Created At:</strong> {container.createdAt}</p>
                                    <p><strong>Updated At:</strong> {container.updatedAt}</p>
                                </div>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                                    onClick={() => window.location.href = `/transit/${id}/update-container/${container._id}`}
                                >
                                    Update Container
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No containers found</p>
                )}
            </div>
        </div>
    );
};


export default TransitDetails;
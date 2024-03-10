import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Transit {
  _id: string;
  billing_date: string;
  company_name: string;
  tracking_id: string;
  shipping_company: string;
  contact_number: string;
  origin: string;
  destination: string;
}



interface TransitCardProps {
  transit: Transit;
}

const TransitCard: React.FC<TransitCardProps> = ({ transit }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 p-6 w-screen">
      <h2 className="text-lg font-bold mb-4">{transit.company_name}</h2>
      <p><strong>Billing Date:</strong> {transit.billing_date}</p>
      <p><strong>Tracking ID:</strong> {transit.tracking_id}</p>
      <p><strong>Shipping Company:</strong> {transit.shipping_company}</p>
      <p><strong>Contact Number:</strong> {transit.contact_number}</p>
      <p><strong>Origin:</strong> {transit.origin}</p>
      <p><strong>Destination:</strong> {transit.destination}</p>
      <Link to={`/transit/${transit._id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          View Details
        </button>
      </Link>
    </div>
  );
};




interface TransitCardListProps {
  data: Transit[];
}

const TransitCardList: React.FC<TransitCardListProps> = ({ data }) => {
  return (
    <div className="transit-card-list">
      {data.map((transit) => (
        <TransitCard key={transit._id} transit={transit} />
      ))}
    </div>
  );
};

const MainComponent: React.FC = () => {
  const [transits, setTransits] = useState<Transit[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/transit/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setTransits(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <TransitCardList data={transits} />
  );
};

export default MainComponent;

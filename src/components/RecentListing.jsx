import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import LatestCard from './LatestCard';

const RecentListing = () => {
  const [services, setServices] = useState([]);
   
    useEffect(() => {
      fetch('http://localhost:3000/services')
        .then(res => res.json())
        .then(data => setServices(data))
      .catch(err=>console.log(err))
    }, [])
  const LatestServices = services.slice(0, 6);
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-[#A55E2A] my-6">
        Recent Listing
      </h1>
    <div className='grid grid-cols-3 w-10/12 m-auto gap-4'>
      {
        LatestServices.map(service => <LatestCard key={service._id} service={service}></LatestCard>)
        
      }
      </div>
      </>
  );
};

export default RecentListing;
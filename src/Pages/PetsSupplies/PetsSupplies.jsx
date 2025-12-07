import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard';

const PetsSupplies = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/services')
      .then(res => res.json())
      .then(data => setServices(data))
    .catch(err=>console.log(err))
  }, [])
  console.log(services)
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-[#A55E2A] my-8">
        Explore Pets & Supplies <br /> For Your Furry Friends
        </h1>
    <div className='grid grid-cols-3 w-10/12 m-auto gap-4'>
      {
        services.map(service=><ServiceCard key={service._id} service={service}> </ServiceCard>)
      }
      </div>
      </>
  );
};

export default PetsSupplies;
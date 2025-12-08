import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard';
import Footer from '../../components/Footer';

const PetsSupplies = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState('');
  useEffect(() => {
    fetch(`pawmart-server-beta.vercel.app/services?category=${category}`)
      .then(res => res.json())
      .then(data => setServices(data))
    .catch(err=>console.log(err))
  }, [category])
  
 
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-[#0B6623] my-6">
        Explore Pets & Supplies <br /> For Your Furry Friends
      </h1>
      <div >
        <div className='my-8 w-10/12 m-auto'>
          <select onChange={(e) => setCategory(e.target.value)} defaultValue="Choose category" className="select border-2">
            <option disabled={true}>Choose category</option>
            <option value=''>All</option>
            <option value='Pets'>Pets</option>
            <option value='Food'>Food</option>
            <option value='Accessories'>Accessories</option>
            <option value='Care Products'>Care Products</option>
          </select>
        </div>
        
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 m-auto gap-4 mb-10'>
      {
        services.map(service=><ServiceCard key={service._id} service={service}> </ServiceCard>)
      }
      </div>
      <Footer></Footer>
      </>
  );
};

export default PetsSupplies;
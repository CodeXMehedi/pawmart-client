import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Pets = () => {
  const [services, setServices] = useState([]);
  
    useEffect(() => {
      fetch('pawmart-server-beta.vercel.app/services?category=Pets')
        .then(res => res.json())
        .then(data => setServices(data))
      .catch(err=>console.log(err))
    }, [])
 
  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-bold text-[#0B6623] text-4xl text-center my-6'>Pets Collection</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 m-auto gap-4'>
    {
        services.map(service => <div className="bg-white rounded-lg shadow-lg  p-4 hover:shadow-2xl ">
          <img
            src={service?.image}
            alt={service?.name}
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-[#A55E2A] mb-2">
            {service?.name}
          </h3>
          <div className="flex justify-between items-center text-gray-800 font-medium mb-2">
            <div>
              <p>Category: {service?.category}</p>
              <p className='text-gray-500 text-sm mt-1'>Location: {service.location}</p>
            </div>
            <p>Price: {service?.price} BDT</p>
          </div>
          <div className="flex justify-center ">
            <Link
              to={`/service-details/${service?._id}`}
              className="bg-[#0B6623] mt-2 text-white px-4 py-2 rounded hover:bg-[#0B6623] transition-colors duration-300"> View More
            </Link>
          </div>
        </div>)
        }
      </div>
      <Footer></Footer>
      </>
  );
};

export default Pets;
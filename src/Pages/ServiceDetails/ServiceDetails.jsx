import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router';
import Navbar from '../../components/Navbar'
const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3000/services/${id}`)
      .then(res => {
        setService(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
      })
  }, [id])
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-warning text-4xl"></span>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-[#A55E2A] mt-2 text-white px-4 py-2 rounded hover:bg-[#923f17] transition-colors duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>
    <div className="flex items-center gap-6 w-9/12 mx-auto mt-10  bg-white shadow-lg rounded-lg">
       
        <img
          src={service.image}
          alt={service.name}
          className="max-w-6/12 rounded-lg"
        />
      <div className='flex-1'>
          <h1 className="text-3xl font-bold">{service.name}</h1>
          <p className="text-gray-700 mb-6 ">{service.description}</p>
          <p className="text-gray-700 "><span className='font-semibold'>Category: { service.category}</span></p>
          <p className="text-gray-700 "><span className='font-semibold'>Owner’s Email: { service.email}</span></p>
          <p className="text-gray-700 "><span className='font-semibold'>Location:</span> { service.location}</p>
          <p className='font-bold my-4'><span className='font-semibold'>Price: {service.price}</span></p>
          <div className='flex justify-center gap-4'>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-800 hover:bg-gray-400 mt-2 text-white px-4 py-2 rounded transition-colors duration-300"
            >
              Back
            </button>
            <button className="bg-[#A55E2A] mt-2 text-white px-4 py-2 rounded hover:bg-[#923f17] transition-colors duration-300">Adopt / Order Now</button>
            <button></button>
          </div>
          
      </div>
      </div>
    </>
  );
};

export default ServiceDetails;
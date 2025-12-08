import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router';
import Navbar from '../../components/Navbar'
import { AuthContext } from '../../contexts/AuthContext';
import { Toaster, toast } from "react-hot-toast";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`pawmart-server-beta.vercel.app/services/${id}`)
      .then(res => {
        setService(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
      })
  }, [id])
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const buyerName = form.buyerName.value;
    const email = form.email.value;
    const productId = form.productId.value;
    const productName = form.productName.value;
    const quantity = parseInt(form.quantity.value);

    const price = parseInt(form.price.value);

    const address = form.address.value;
    const date = form.date.value;

    const phone = form.phone.value;
    const notes = form.notes.value;

    const orderData = {
      buyerName,
      email,
      productId,
      productName,
      quantity,
      price,
      address,
      date,
      phone,
      notes,
    };


    toast("Order placing...");


   
    axios.post("pawmart-server-beta.vercel.app/orders", orderData)
      .then(res => {
        console.log(res.data);
        
      })
      .catch(err => console.log(err));
  };


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
          className="bg-[#0B6623] mt-2 text-white px-4 py-2 rounded hover:bg-[#0B6623] transition-colors duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>
    <div className="flex items-center gap-6 w-9/12 mx-auto mt-10  bg-white shadow-lg rounded-lg p-10">
       
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
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="bg-[#0B6623] mt-2 text-white px-4 py-2 rounded hover:bg-[#0B6623] transition-colors duration-300" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
                  <h2 className="text-3xl font-bold text-center text-[#0B6623] mb-6">
                     Place Your Order
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Buyer Name */}
                    <div>
                      <label className="font-semibold">Buyer Name</label>
                      <input
                        name="buyerName"
                        type="text"
                        value={user?.displayName}
                        readOnly
                        className="w-full p-3 border rounded-md bg-gray-100"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-semibold">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={user?.email}
                        readOnly
                        className="w-full p-3 border rounded-md bg-gray-100"
                      />
                    </div>

                    {/* Listing ID */}
                    <div>
                      <label className="font-semibold">Product / Listing ID</label>
                      <input
                        name="productId"
                        type="text"
                        value={service?._id}
                        readOnly
                        className="w-full p-3 border rounded-md bg-gray-100"
                      />
                    </div>

                    {/* Listing Name */}
                    <div>
                      <label className="font-semibold">Product / Listing Name</label>
                      <input
                        name="productName"
                        type="text"
                        value={service?.name}
                        readOnly
                        className="w-full p-3 border rounded-md bg-gray-100"
                      />
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="font-semibold">Quantity</label>
                      <input
                        name="quantity"
                        type="number"
                        defaultValue={service?.category == "Pet" ? 1 : ""}
                        min="1"
                        readOnly={service?.category == "Pet"}
                        placeholder="Enter quantity"
                        className="w-full p-3 border rounded-md"
                      />

                    </div>

                    {/* Price */}
                    <div>
                      <label className="font-semibold">Price</label>
                      <input
                        name="price"
                        type="text"
                        value={service?.price}
                        readOnly
                        className="w-full p-3 border rounded-md bg-gray-100"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="font-semibold">Address</label>
                      <textarea
                        name="address"
                        placeholder="Enter your address"
                        className="w-full p-3 border rounded-md"
                        rows="3"
                      ></textarea>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="font-semibold">Pick-up / Delivery Date</label>
                      <input
                        name="date"
                        type="date"
                        className="w-full p-3 border rounded-md"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="font-semibold">Phone Number</label>
                      <input
                        name="phone"
                        type="text"
                        placeholder="Enter your phone number"
                        className="w-full p-3 border rounded-md"
                      />
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="font-semibold">Additional Notes</label>
                      <textarea
                        name="notes"
                        placeholder="Write any special instructions..."
                        className="w-full p-3 border rounded-md"
                        rows="3"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-[#0B6623] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0B6623] transition"
                      >
                        Submit Order
                      </button>
                    </div>
                  </form>

                </div>
              </div>
            </dialog>
          </div>
          
      </div>
      </div>
      <Toaster />
    </>
  );
};

export default ServiceDetails;
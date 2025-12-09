import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import toast from 'react-hot-toast';

const UpdateListing = () => {
  const { user } = useContext(AuthContext);
  const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    axios.get(`https://pawmart-server-beta.vercel.app/services/${id}`)
        .then(res => {
          setService(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err)
          setLoading(false);
        })
    }, [id])
    
  const handleSubmit =(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;
    const formData = { name, category, price, location, description, image, date, email, createdAt: service?.createdAt };
    
    axios.put(`https://pawmart-server-beta.vercel.app/updateService/${id}`, formData)
      .then(res => {
        console.log(res.data);
        toast('updated successfully');
        navigation('/myListings');
      })
    .catch(err=>console.log(err))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-warning text-4xl"></span>
      </div>
    );
  }
  
  return (
    <>
      <Navbar></Navbar>
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-xl my-4">
        <h2 className="text-3xl font-bold text-[#0B6623] text-center mb-6">Update Listing</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-semibold">Product / Pet Name</label>
          <input
            defaultValue={service?.name}
            type="text"
            name='name'
            className="input input-bordered w-full mt-1"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="font-semibold">Category</label>
          <select
            defaultValue={service?.category}
            name='category'
            className="select select-bordered w-full mt-1">
            <option>Pets</option>
            <option>Food</option>
            <option>Accessories</option>
            <option>Care Products</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Price</label>
          <input
            defaultValue={service?.price}
            name='price'
            type="number"
            className="input input-bordered w-full mt-1"
            placeholder="Enter price"
          />
        </div>

        <div>
          <label className="font-semibold">Location</label>
          <input
            defaultValue={service?.location}
            type="text"
            name='location'
            className="input input-bordered w-full mt-1"
            placeholder="Enter location"
          />
        </div>

        <div>
          <label className="font-semibold">Description</label>
          <textarea
            defaultValue={service?.description}
            name='description'
            className="textarea textarea-bordered w-full mt-1"
            placeholder="Write details"
            rows="3"
          ></textarea>
        </div>


        <div>
          <label className="font-semibold">Image URL</label>
          <input
            defaultValue={service?.image}
            type="text"
            name='image'
            className="input input-bordered w-full mt-1"
            placeholder="Enter image link"
          />
        </div>

        <div>
          <label className="font-semibold">Pick Up Date</label>
          <input
            defaultValue={service?.date}
            type="date"
            name='date'
            className="input input-bordered w-full mt-1"
          />
        </div>

        <div>
          <label className="font-semibold">Email</label>
          <input
            type="email"
            name='email'
            className="input input-bordered w-full mt-1 bg-gray-100"
            value={user?.email}
            readOnly
          />
        </div>
          <button type='submit' className="btn bg-[#0B6623] w-full mt-4">Update List</button>
      </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default UpdateListing;
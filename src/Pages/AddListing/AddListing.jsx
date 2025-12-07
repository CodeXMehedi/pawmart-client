import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';

const AddListing = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
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
    const formData = { name, category, price, location, description, image, date, email };
    console.log(formData)
    axios.post('http://localhost:3000/addListing', formData)
      .then(res => {
        console.log(res);
    })
  }
  
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-xl my-4">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Listing</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-semibold">Product / Pet Name</label>
          <input
            type="text"
            name='name'
            className="input input-bordered w-full mt-1"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="font-semibold">Category</label>
          <select
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
            name='price'
            type="number"
            className="input input-bordered w-full mt-1"
            placeholder="Enter price"
          />
        </div>

        <div>
          <label className="font-semibold">Location</label>
          <input
            type="text"
            name='location'
            className="input input-bordered w-full mt-1"
            placeholder="Enter location"
          />
        </div>

        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name='description'
            className="textarea textarea-bordered w-full mt-1"
            placeholder="Write details"
            rows="3"
          ></textarea>
        </div>

     
        <div>
          <label className="font-semibold">Image URL</label>
          <input
            type="text"
            name='image'
            className="input input-bordered w-full mt-1"
            placeholder="Enter image link"
          />
        </div>

        <div>
          <label className="font-semibold">Pick Up Date</label>
          <input
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
        <button type='submit' className="btn bg-[#F28500] w-full mt-4">Add Listing</button>
      </form>
    </div>
  );
};

export default AddListing;
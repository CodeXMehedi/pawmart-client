import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import Footer from '../../components/Footer';
import toast from 'react-hot-toast';

const MyListings = () => {
  const [myServices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    fetch(`https://pawmart-server-beta.vercel.app/myServices?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setMyServices(data))
      .catch(err => console.log(err))
  }, [user?.email])
  
  const handleDelete = (id) => {
    axios.delete(`https://pawmart-server-beta.vercel.app/delete/${id}`)
      .then(res => {
        console.log(res.data)
        const filteredData = myServices.filter(service => service?._id != id)
        setMyServices(filteredData);
        toast('Delete successful');
      }).catch(err => console.log(err));
  }
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-4xl font-semibold text-center my-8 text-[#0B6623]'>My List</h1>
      <div className='flex flex-2 lg:flex-row mb-6'>
    <div className="overflow-x-auto mt-8 w-10/12 m-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className='pl-18'>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody >
          {myServices.map((service) => (
            <tr key={service?.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={service?.image}
                        alt="User Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{service?.name}</div>
                  </div>
                </div>
              </td>

              <td>{service?.description}</td>

              <td>BDT {service?.price}</td>

              <td >
                <Link to={`/updateListing/${service?._id }`}> <button className="btn btn-primary btn-xs mr-2">Edit</button></Link>
                <button onClick={()=>handleDelete(service?._id)} className="btn btn-error btn-xs">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyListings;
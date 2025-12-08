import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router';
import Navbar from '../../components/Navbar';
import axios from 'axios';

const MyListings = () => {
  const [myServices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    fetch(`http://localhost:3000/myServices?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setMyServices(data))
      .catch(err => console.log(err))
  }, [user?.email])
  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/delete/${id}`)
      .then(res => {
        console.log(res.data)
        const filteredData = myServices.filter(service => service?._id != id)
        setMyServices(filteredData);
      }).catch(err => console.log(err));
  }
  return (
    <>
      <Navbar></Navbar>
    <div className="overflow-x-auto mt-8  w-10/12 m-auto">
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

        <tbody>
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
    </>
  );
};

export default MyListings;
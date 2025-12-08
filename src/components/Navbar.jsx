import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import userDefaultLogo from '../assets/logouser-D4eLv0KQ.jpg'

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleLogOut = () => {
    
    logOut()
      .then(() => {
        toast.success("Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTheme = () => {
    setIsChecked(prev => !prev);
  };
  useEffect(() => {
    const theme = isChecked ? "dark" : 'light';
    document.documentElement.setAttribute("data-theme", theme);
  }, [isChecked]);
      

  const links = <>
    <div className='flex text-white flex-col lg:flex-row gap-3 text-lg'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/pets&Supplies'>Pets & Supplies</NavLink>
      {
        user && (<>
          <NavLink to='/addListing'>Add Listing</NavLink>
          <NavLink to='/myListings'>My Listings</NavLink>
          <NavLink to='/myorders'>My orders</NavLink>
        </>)
      }
    </div>
  </>

  return (
    <div className='bg-[#0B6623] shadow-sm '>
      <div className="navbar w-11/12 m-auto ">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box w-55 md:w-70 p-2 shadow absolute top-full left-0 z-50 mt-3"
            >
              {links}
            </ul>
          </div>

          <div className='flex items-center '>
            <img className='w-12 h-12 rounded-xl' src="https://i.ibb.co.com/XZmg5YCJ/pngtree-creative-logo-to-pet-shop-png-image-14658005-1.png" alt="" />
            <a className="text-white btn btn-ghost italic text-2xl">PawMart</a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-8 lg:gap-2 flex flex-col md:flex-col lg:flex-row">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input onClick={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          <img
            className='w-10 h-10 rounded-4xl'
            src={user ? user.photoURL : userDefaultLogo}
            title={user?.displayName || 'User name'}
            alt=""
          />
          
          {user ? (
            <button
              onClick={handleLogOut}
              className="md:btn lg:btn p-1 rounded-sm shadow-lg bg-[#FBE8D3] text-yellow-800 text-lg">
              Log Out
            </button>
          ) : (
            <div className='flex gap-2'>
              <Link to='/login' className='btn lg:btn md:btn bg-[#FBE8D3] text-yellow-800 lg:text-lg'>Login</Link>
              <Link to='/register' className='btn lg:btn md:btn bg-[#FBE8D3] text-yellow-800 lg:text-lg'>Register</Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;

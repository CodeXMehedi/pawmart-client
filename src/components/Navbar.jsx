import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import userDefaultLogo from '../assets/logouser-D4eLv0KQ.jpg'


const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    // console.log("Trying to LogOut");
    logOut()
      .then(() => {
        toast.success("Logged Out successfully");
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = <>
    <div className='flex gap-3 text-lg'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/pets&Supplies'>Pets & Supplies</NavLink>
    </div>
  </>

  return (
    <div className='bg-[#F28500] shadow-sm '>
      <div className="navbar w-11/12 m-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className='flex items-center '>
            <img className='w-12 h-12 rounded-xl' src="https://i.ibb.co.com/XZmg5YCJ/pngtree-creative-logo-to-pet-shop-png-image-14658005-1.png" alt="" />
            <a className="btn btn-ghost text-xl">PawMart</a>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <img className='w-10 h-10 rounded-4xl'
            src={`${user ? user.photoURL : userDefaultLogo}`}
            title={user?.displayName || 'User name'}
            alt="" />
          {user ? <button onClick={handleLogOut} className="md:btn lg:btn p-1  rounded-sm shadow-lg bg-[#FBE8D3] text-yellow-800 text-lg">Log Out</button> : <div className='flex gap-2'>
            <Link to='/login' className='lg:btn md:btn  bg-[#FBE8D3] text-yellow-800 text-lg'>Login</Link>
            <Link to='/register' className='lg:btn md:btn  bg-[#FBE8D3] text-yellow-800 text-lg'>Register</Link>
          </div>}
     </div>
        
      </div>
    </div>
  );
};

export default Navbar;
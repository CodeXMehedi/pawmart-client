import React from 'react';


const Footer = () => {
  return (
    <div className='bg-[#C47F4A] text-white'>
      <div className='flex flex-col lg:flex-row gap-10 p-20'>
        <div className='flex-1 lg:ml-16'>
          <div className='flex items-center gap-2'><p className='text-2xl font-bold'>Cats Eye</p></div>
          <p className='mt-6'> © 2025 Cats Eye Toy Market. Bringing joy and learning to every child through our wide range of toys.</p>
        </div>
        <div className='flex-1 '>
          <div className='flex flex-col h-full justify-center items-center gap-2'>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">FAQ</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
        <div className='flex-1 m-auto text-center '>
          <p>Social Links</p>
          <div className='flex  h-full justify-center items-center mt-2  gap-4'>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;


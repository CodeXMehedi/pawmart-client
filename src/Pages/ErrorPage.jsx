import React from 'react';

import { useNavigate } from 'react-router';
import DocumentMeta from 'react-document-meta';
const ErrorPage = () => {
  const navigate = useNavigate();
  const meta = {
    title: "404 Not Found | Kids Toys Market",
    description: "The toy page you are looking for does not exist. Please check the link or go back.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "404, error page, toy not found, kids toys"
      }
    }
  };
  return (

    <DocumentMeta {...meta}>
      <div className=' w-11/12 flex justify-center items-center mt-10 m-auto '>
        <div className='flex flex-col justify-center items-center  w-7/12 text-center'>
          <img src='https://i.ibb.co.com/fWLbNp8/pexels-vie-studio-4439425.jpg' className='w-50 h-50 lg:w-80 lg:h-80' alt="Not found image" />
          <p className='font-semibold text-4xl mt-10'>OPPS!!Page NOT FOUND</p>
          <p className='text-[#627382] mt-6'>Your  request is not found on our system.Please try another way</p>
          <button onClick={() => navigate(-1)} className='btn text-sm text-white bg-linear-to-r  from-[#0B6623] to-[#0B6623] mt-6'>Go Back</button>
        </div>
      </div>
    </DocumentMeta>
  );
};

export default ErrorPage;
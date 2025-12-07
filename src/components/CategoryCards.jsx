import React from 'react';
import { Link } from 'react-router';

const CategoryCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">

      <Link className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition">
        <img className='w-25 h-25' src="https://i.ibb.co.com/gL4SDTnF/animal-2913348.png" alt="" />
        <h3 className="text-lg font-bold text-center">Pets (Adoption)</h3>
      </Link>

      <Link className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition">
        <img className='w-25 h-25' src="https://i.ibb.co.com/8gj2qkhS/cat-food-14257455.png" alt="" />
        <h3 className="text-lg font-bold text-center">Pet Food</h3>
      </Link>

      <Link className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition">
        <img className='w-25 h-25' src="https://i.ibb.co.com/6VzjjLL/dog-collar-6317172.png" alt="" />
        <h3 className="text-lg font-bold text-center">Accessories</h3>
      </Link>

      <Link className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition">
        <img className='w-25 h-25' src="https://i.ibb.co.com/H3X0C3m/hygiene-7698656.png" alt="" />
        <h3 className="text-lg font-bold text-center">Pet Care Products</h3>
      </Link>

    </div>


  );
};

export default CategoryCards;
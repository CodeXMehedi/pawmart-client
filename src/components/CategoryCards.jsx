import React from 'react';
import { Link } from 'react-router';
import { Tooltip } from "react-tooltip";

const CategoryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-10/12 m-auto my-12">

      <div
        data-tooltip-id="petsTip"
        data-tooltip-content="Adopt lovely pets!"
      >
        <Link to='/category/Pets' className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition">
          <img className='w-25 h-25' src="https://i.ibb.co.com/gL4SDTnF/animal-2913348.png" alt="" />
          <h3 className="text-xl font-semibold text-center">Pets (Adoption)</h3>
        </Link>
      </div>

      <div
        data-tooltip-id="foodTip"
        data-tooltip-content="Find all healthy pet food!"
      >
        <Link to='/category/food' className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition">
          <img className='w-25 h-25' src="https://i.ibb.co.com/8gj2qkhS/cat-food-14257455.png" alt="" />
          <h3 className="text-xl font-semibold text-center">Pet Food</h3>
        </Link>
      </div>

      <div
        data-tooltip-id="accessoriesTip"
        data-tooltip-content="Explore pet accessories!"
      >
        <Link to='/category/accessories' className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition">
          <img className='w-25 h-25' src="https://i.ibb.co.com/6VzjjLL/dog-collar-6317172.png" alt="" />
          <h3 className="text-xl font-semibold text-center">Accessories</h3>
        </Link>
      </div>

      <div
        data-tooltip-id="careTip"
        data-tooltip-content="Best pet care products!"
      >
        <Link to='/category/care-product' className="bg-base-100 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition">
          <img className='w-25 h-25' src="https://i.ibb.co.com/H3X0C3m/hygiene-7698656.png" alt="" />
          <h3 className="text-xl font-semibold text-center">Pet Care Products</h3>
        </Link>
      </div>

      {/* Tooltip Components */}
      <Tooltip id="petsTip" />
      <Tooltip id="foodTip" />
      <Tooltip id="accessoriesTip" />
      <Tooltip id="careTip" />

    </div>
  );
};

export default CategoryCards;

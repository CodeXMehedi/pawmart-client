import React from 'react';

const WhyPawMarts = () => {
  return (
    <div className="w-11/12 mx-auto my-16">
      <h2 className="text-4xl font-bold text-center mb-6 text-[#A55E2A]">
         Why Adopt From PawMart?
      </h2>

      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
        Adopting a pet from PawMart means offering a rescued animal a second chance.
        All our pets are health-checked, vaccinated, and waiting for a loving home.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-[#A55E2A] mb-2"> Save a Life</h3>
          <p className="text-gray-600">Your adoption gives a homeless pet a safe and caring home.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-[#A55E2A] mb-2"> Adoption, Not to Sell</h3>
          <p className="text-gray-600">PawMart promotes love—not business. All pets are rescued & ready.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-[#A55E2A] mb-2"> Health & Safety First</h3>
          <p className="text-gray-600">Pets are vaccinated, health-checked & fully verified.</p>
        </div>
      </div>
    </div>

  );
};

export default WhyPawMarts;
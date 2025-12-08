import React from 'react';

const PetHeros = () => {
  return (
    <div className="w-10/12 mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#0B6623]">
         Meet Our Pet Heroes
      </h2>

      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
        These wonderful people opened their hearts and homes to rescued pets.
        Their kindness inspires many more to adopt and save lives.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      
        <div className="bg-white shadow-lg rounded-lg p-4 text-center ">
          <img src="https://i.ibb.co.com/wN79vqst/loren-joseph-jhu22nvxx-Cw-unsplash-1.jpg"
            alt="Sadia"
            className="w-full h-40 object-cover rounded-md mb-3" />
         
          <h3 className="text-lg font-semibold text-[#0B6623]">Sadia Rahman</h3>
          <p className="text-gray-600 text-sm">Adopted a rescued cat “Mimi”.</p>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          
          <img src="https://i.ibb.co.com/Kx9kqjHS/mishaal-zahed-Eu-W3ujd5-UQg-unsplash.jpg"
            alt="Tanvir"
            className="w-full h-40 object-cover rounded-md mb-3" />
          <h3 className="text-lg font-semibold text-[#0B6623]">Tanvir Ahmed</h3>
          <p className="text-gray-600 text-sm">Gave senior dog “Rex” a new loving home.</p>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <img src="https://i.ibb.co.com/1Gm4Pb6j/pexels-playmakerjoy-1580273.jpg"
            alt="Mahdi"
            className="w-full h-40 object-cover rounded-md mb-3" />
          <h3 className="text-lg font-semibold text-[#0B6623]">Nusrat Jahan</h3>
          <p className="text-gray-600 text-sm">Cares for 3 rescued puppies.</p>
        </div>

      
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          
          <img src="https://i.ibb.co.com/v6mWQMwQ/robiul-islam-pailot-dw-WSk-LAAk2-Q-unsplash.jpg"
            alt="Nusrat"
            className="w-full h-40 object-cover rounded-md mb-3" />
          <h3 className="text-lg font-semibold text-[#0B6623]">Mahdi Hasan</h3>
          <p className="text-gray-600 text-sm">Fosters pets until they find families.</p>
        </div>
      </div>
    </div>

  );
};

export default PetHeros;
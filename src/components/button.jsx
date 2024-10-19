import React from 'react';

function Boutton({ Colour, ColourName, setColor }) {
  return (
    <button
      onClick={() => setColor(Colour)} // Pass Colour directly
      className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
      style={{ backgroundColor: Colour }}
    >
      {ColourName}
    </button>
  );
}

export default Boutton;

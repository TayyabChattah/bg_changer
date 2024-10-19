import { useState } from 'react';
import Boutton from './components/button';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
  <div className='w-full h-screen duration-200 'style={{backgroundColor:color}}></div>
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '><div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-2xl'>
    <button 
    onClick={()=>setColor('red')}
    className='outline-none px-4 py-1 rounded-full text-white shadow-sm 'style={{backgroundColor:"red"}} >
      red
    </button>
    <Boutton Colour='green' ColourName='Green' setColor={setColor}/>
    <Boutton Colour='blue' ColourName='Blue' setColor={setColor}/>
    <Boutton Colour='yellow' ColourName='Yellow' setColor={setColor}/>
    <Boutton Colour='olive' ColourName='Olive' setColor={setColor}/>
    
    </div></div>
    </>
  );
}

export default App;

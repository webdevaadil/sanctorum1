import React, { useEffect, useState } from 'react';

const Sanitary = () => {

  // const [sanitary, setSanitary] = useState([]);
  // useEffect(() => {
  //     async function sanitarys() {
  //         const sanitaryss = await fetch('http://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33');
  //         const sanitarysss = await sanitaryss.json();
  //         setSanitary(sanitarysss.acf);
  //         console.log(sanitarysss.acf);
  //     }
  //     sanitarys();

  //   },[])


  return (
    <div>
      <div className='specification-ct'>        
        <ul>
          <li>Hot and Cold water line provision with CPVC* pipes.</li>
          <li>CP Fittings including Health Faucet/ Basin Mixer and Single Lever Diverter* of Jaquar/ Roca/ Kohler/ Grohe*.
          </li>
          <li>Wall tiles up to 8 feet door height. </li>
          <li>Sanitary Fittings with Concealed Cistern with eco-friendly dual flush* and the Basin of Kohler/ Duravit/ Roca.
          </li>
          <li>Waste Pipes of Supreme/ Skipper/ Oriplast*.</li>
          <li>Shower Cubicle/ Countertop Basin/ Vanity in Master Toilet.</li>
        </ul>   
     </div>
    </div>
  )
}

export default Sanitary;
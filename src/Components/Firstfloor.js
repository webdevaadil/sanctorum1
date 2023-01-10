import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';



export const Firstfloor = () => {

  const [grndflr, setGrndflr] = useState([]);

  async function Grndflrs() {
    const Grndflrdata = await fetch('http://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33');
    const Grndflrdatas = await Grndflrdata.json();
    setGrndflr(Grndflrdatas.acf.two_bhk);
    //console.log(Grndflrdatas.acf.two_bhk);
  }
  useEffect(() => {


    Grndflrs();
  }, [])
  //console.log(grndflr);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className='container'>


        {grndflr.length!=0?(

          <div className='tab-slider'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={grndflr.one_image.url}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={grndflr.two_image.url}
                  alt="Second slide"
                />
              </Carousel.Item>


            </Carousel>
          </div>):("")
        }

      </div>
    </div>
  )
}
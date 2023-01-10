import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Tabthree = () => {


  const [grndflr, setGrndflr] = useState([]);

  async function Grndflrs() {
    const Grndflrdata = await fetch('http://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33');
    const Grndflrdatas = await Grndflrdata.json();
    setGrndflr(Grndflrdatas.acf.four_bhk);
    console.log(Grndflrdatas.acf.four_bhk);
  }
  useEffect(() => {
    console.log(grndflr);

    Grndflrs();
  }, [])
  
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};



  return (
    <div>
        <div className='container'>
        
        {grndflr && grndflr.map((item,index) => {

          console.log(item)
        }
        
        )}

        <div className='tab-slider'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src=""
          alt="First slide"
        />         */}
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_3}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_4}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_5}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_6}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={floor3_7}
          alt="Third slide"
        />       
      </Carousel.Item> */}
      </Carousel>
        </div>
      </div> 
      </div>
  )
}
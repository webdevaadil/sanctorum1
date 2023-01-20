import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from "react-bootstrap/Modal";
export const Tabthree = () => {
  const [showmodel, setShowmodel] = useState(false);
  const [modeltabslider, setModeltabslider] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [grndflr, setGrndflr] = useState([]);
  const [show, setShow] = useState(false);

  async function Grndflrs() {
    const Grndflrdata = await fetch('https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33');
    const Grndflrdatas = await Grndflrdata.json();
    setGrndflr(Grndflrdatas.acf.four_bhk);
    //console.log(Grndflrdatas.acf.four_bhk);
  }
  useEffect(() => {
    

    Grndflrs();
  }, [])
  const test = (e) => {
    setModeltabslider(e);
    setShowmodel(true);
    handleShow();
  };
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};



  return (
    <div>
        <div className='container'>
        
      
{grndflr.first_image && grndflr.first_image.url&&  <div className='tab-slider'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img  onClick={(e) => {test(e.target.src);}}
          className="d-block w-100"
          src={grndflr.first_image.url}
          alt="First slide"
        />        
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.second_image.url}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.third_image.url}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.fourth_image.url}
          alt="Third slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grndflr.fifth_image.url}
          alt="Third slide"
        />       
      </Carousel.Item>
    */}
      </Carousel>
        </div>}
        <Modal show={show} onHide={handleClose}>
        
          <Modal.Body
            style={{  backgroundColor:"black",zIndex: "22!important", display: "flex!important", width: "100%!important" }}
            fullscreen={"xxl-down'"}
          >
            <Modal.Header closeButton >
        </Modal.Header>
           <div className='imghead'>
           <img
             
              src={modeltabslider}
            />
           </div>
          </Modal.Body>
        </Modal>
      </div> 
      </div>
  )
}
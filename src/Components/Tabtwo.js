import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
export const Tabtwo = () => {
  const [tabtwo, setHometwo] = useState([]);
  const [showmodel, setShowmodel] = useState(false);
  const [modeltabslider, setModeltabslider] = useState();
  useEffect(() => {
    async function tabtwocontent() {
      const tabtwodata = await fetch(
        "https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33"
      );
      const tabtwodatashow = await tabtwodata.json();
      setHometwo(tabtwodatashow.acf.three_bhk);
      //console.log(tabtwodatashow.acf);
    }
    tabtwocontent();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const test = (e) => {
    setModeltabslider(e);
    setShowmodel(true);
    handleShow();
  };
  return (
    <div>
      <div className="container">
        {tabtwo.length != 0 ? (
          <div className="tab-slider">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img onClick={(e) => {
                    test(e.target.src);
                  }}
                  className="d-block w-100"
                  src={tabtwo.first_image.url}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  onClick={(e) => {
                    test(e.target.src);
                  }}
                  className="d-block w-100"
                  src={tabtwo.second_image.url}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  onClick={(e) => {
                    test(e.target.src);
                  }}
                  className="d-block w-100"
                  src={tabtwo.third_image.url}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  onClick={(e) => {
                    test(e.target.src);
                  }}
                  className="d-block w-100"
                  src={tabtwo.fourth_image.url}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        ) : (
          ""
        )}
     <Modal show={show} onHide={handleClose}>
 
          <Modal.Body
            style={{ backgroundColor:"black", zIndex: "22!important", display: "flex!important", width: "100%!important" }}
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
  );
};

import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./firstmodel.css";

export const Firstfloor = () => {
  const [showmodel, setShowmodel] = useState(false);
  const [modeltabslider, setModeltabslider] = useState();

  const [grndflr, setGrndflr] = useState([]);

  async function Grndflrs() {
    const Grndflrdata = await fetch(
      "https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33"
    );
    const Grndflrdatas = await Grndflrdata.json();
    setGrndflr(Grndflrdatas.acf.two_bhk);
    //console.log(Grndflrdatas.acf.two_bhk);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    Grndflrs();
  }, []);
  console.log(showmodel);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const test = (e) => {
    setModeltabslider(e);
    setShowmodel(true);
    handleShow();
  };
  console.log(modeltabslider);
  return (
    <div>
      <div className="firstmodelcon container">
        {grndflr.length != 0 ? (
          <div className="tab-slider modeltabslider">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  onClick={(e) => {
                    test(e.target.src);
                  }}
                  className="d-block "
                  style={{ width: "100px!important" }}
                  src={grndflr.one_image.url}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  onClick={(e) => {test(e.target.src);}}
                  className="d-block "
                  style={{ width: "100px!important" }}
                  src={grndflr.two_image.url}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        ) : (
          ""
        )}

<Modal show={show} onHide={handleClose} style={{display:"flex"}}>

          <Modal.Body
            style={{zIndex: "22!important", display: "flex!important", width: "100%!important" }}
          > <Modal.Header closeButton >
          <Modal.Title></Modal.Title>
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

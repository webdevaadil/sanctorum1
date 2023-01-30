import React, { useEffect, useRef, useState } from "react";
import Slider from "./Buildingamenities";
import Galleryhome from "./Galleryhome";
import emailjs from "@emailjs/browser";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Homesectiontwo = () => {
  const [hometwo, setHometwo] = useState([]);
  const [brochure, setBrochure] = useState([]);
  const [showdemo, setShowdemo] = useState(false);
  const [footerdata, setFooterdata] = useState([]);
  const [formdata, setFormdata] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");
 
  useEffect(() => {
    async function hometwodata() {
      const hometwodata = await fetch(
        "https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33"
      );
      const sethometwonew = await hometwodata.json();
      setBrochure(sethometwonew.acf.brochure_file);
      //console.log(sethometwonew.acf.brochure_file);
    }

    hometwodata();
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    console.log(form.current);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4dj55kh",
        "template_wikz79l",
        form.current,
        "PB7UwNxDxN07KH8Wn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("✓ The email was sent successfully");
          window.location.href =(brochure.url)
          setTimeout(() => {
            setMessage("");
            setFormdata({ name: "", email: "", phone: "" });
          }, 1000);
        //   navigate(brochure.url)
          setShowdemo(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    async function hometwodata() {
      const hometwodata = await fetch(
        "https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33"
      );
      const sethometwonew = await hometwodata.json();
      setHometwo(sethometwonew.acf);
      setBrochure(sethometwonew.acf.brochure_file);
      //console.log(sethometwonew.acf.brochure_file);
    }

    hometwodata();
  }, []);
  // console.log(homes);
  return (
    <>
      <section className="qty-comfort" id="Quality">
        <div className="container">
          <div className="qty-main">
            <div className="qty-text sec-oness">
              <div className="qt-title">
                <h4> {hometwo.section_two_subheading} </h4>
              </div>
              <h3> {hometwo.section_two_title} </h3>
              <p>{hometwo.section_two_left_paragraph}</p>
            </div>

            <div className="bg-numbers">
              <div className="number-wrappers">
                <div className="number-colm">
                  <div className="img-icons">
                    <img src={hometwo.section_two_right_colom_img_1} />
                  </div>
                  <h4>{hometwo.section_two_right_colom_title_1} </h4>
                </div>

                <div className="number-colm">
                  <div className="img-icons">
                    <img src={hometwo.section_two_right_colom_img_2} />
                  </div>
                  <h4>{hometwo.section_two_right_colom_title_2} </h4>
                </div>

                <div className="number-colm">
                  <div className="img-icons">
                    <img src={hometwo.section_two_right_colom_img_3} />
                  </div>
                  <h4>{hometwo.section_two_right_colom_title_3} </h4>
                </div>

                <div className="number-colm">
                  <div className="img-icons">
                    <img src={hometwo.section_two_right_colom_img_4} />
                  </div>
                  <h4>{hometwo.section_two_right_colom_title_4} </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="building">
        <div className="container">
          {/* <h4>{hometwo.building_subtitle}</h4> */}
          <h3>{hometwo.main_title_building}</h3>
          <Slider />
        </div>
      </section>
      <div className="btns-se">
        <a onClick={()=>{setShowdemo(true)}} target="_blank" className="browser-pdf">
          Download Brochure
        </a>
      </div>
      {brochure && showdemo === true ? (
        <div className="showdemo">
            <div className="connect-right demofeild container">
            <h3>{footerdata.connect_with_us}</h3>
            <div className="closedemo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                  onClick={() => {
                    setShowdemo(false);
                  }}
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            <form ref={form} onSubmit={sendEmail}>
                
              <ul>
                <li>
                  {" "}
                  <input
                    type="text"
                    name="name"
                    value={formdata.name}
                    id="name"
                    placeholder="Name"
                    onChange={(e) => {
                      setFormdata({
                        ...formdata,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    required
                  />
                </li>
                <li>
                  {" "}
                  <input
                    required
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formdata.email}
                    name="email"
                    onChange={(e) => {
                      setFormdata({
                        ...formdata,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </li>
              </ul>

              <ul>
                <input
                  pattern="[1-9]{1}[0-9]{9}"
                  required
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={formdata.phone}
                  onChange={(e) => {
                    setFormdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </ul>
              <ul className="chkbx">
                {" "}
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value=" By giving my phone number, i agree to being contacted by Phone, SMS, Whatsapp or any other chanel"
                />
                <label htmlFor="vehicle1">
                  {" "}
                  By giving my phone number, i agree to being contacted by
                  Phone, SMS, Whatsapp or any other chanel.
                </label>{" "}
              </ul>

              <input type="submit" value="ENQUIRE NOW" />
              <h5>{message}</h5>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}

      <Galleryhome />
    </>
  );
};

export default Homesectiontwo;

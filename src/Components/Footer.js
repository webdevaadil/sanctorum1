import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";

export const Footer = () => {
  const [footerdata, setFooterdata] = useState([]);
  const [showdemo, setShowdemo] = useState(true);

  const [message, setMessage] = useState("");
  const [formdata, setFormdata] = useState({ name: "", email: "", phone: "" });
  const form = useRef();
  useEffect(() => {
    async function Footercontents() {
      const footerdatas = await fetch(
        "https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33"
      );
      const footerdetails = await footerdatas.json();
      setFooterdata(footerdetails.acf);
      //console.log(footerdetails.acf);
    }
    Footercontents();
  }, []);

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
          setTimeout(() => {
            setMessage("");
            setFormdata({ name: "", email: "", phone: "" });
          }, 1000);
          setShowdemo(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [brochure, setBrochure] = useState([]);
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
  return (
    <div id="connect" className="footer-main">
      {brochure && showdemo === true ? (
        <div className="showdemo">
          <div className="demofeild ">
            <div className="demoheader">
              <h5>Thank you for submitting form</h5>
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
            </div>
              <div className="demobody">
                <div className="btns-se demobodysec"  >
                  {/* <h6>Download Brochure</h6> */}
                  <a 
                    href={brochure.url}
                    target="_blank"
                    className="browser-pdf"
                    onClick={() => {
                      setInterval(() => {
                        setShowdemo(false);
                        
                      }, 2000);
                    }}
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="container">
        <div className="footer-colms">
          <div className="left-details">
            {footerdata && footerdata.footer_logo && (
              <div className="foots-logo">
                <img src={footerdata.footer_logo} alt="logo" />
              </div>
            )}
            {footerdata && footerdata.map_icon && (
              <ul>
                <li>
                  <img src={footerdata.map_icon} alt="Locate" />
                </li>
                <li>
                  <a target="_blank" href={footerdata.address_link}>
                    {footerdata.address}
                  </a>
                </li>
              </ul>
            )}
            {footerdata && footerdata.mail_icon && (
              <ul>
                <li>
                  <img src={footerdata.mail_icon} alt="Email" />
                </li>
                <li>
                  {" "}
                  <a href={footerdata.mailto}>{footerdata.email_address}</a>
                </li>
              </ul>
            )}
            {footerdata && footerdata.phone_icon && (
              <ul>
                <li>
                  <img src={footerdata.phone_icon} alt="Phone" />
                </li>
                <li>
                  <a href={footerdata.callto}>{footerdata.phone_number}</a>
                </li>
              </ul>
            )}
          </div>

          <div className="connect-right">
            <h3>{footerdata.connect_with_us}</h3>
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

        <div className="footer-copyrights">
          <div className="footer-copyrights-inner">
            <p>{footerdata.copyright_text}</p>
          </div>
          <div className="footer-rights">
            <ul>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=917895461239&text=Hello,%20"
                  target="_blank"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="tel:+917895461239">
                  <i className="fa fa-phone"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

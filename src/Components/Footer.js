import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react'


export const Footer = () => {

  const [footerdata, setFooterdata] = useState([]);
  const [message, setMessage] = useState("");
  const [formdata, setFormdata] = useState({ name: "", email: "", phone: "" })
  const form = useRef();
  useEffect(() => {
    async function Footercontents() {

      const footerdatas = await fetch('https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33');
      const footerdetails = await footerdatas.json();
      setFooterdata(footerdetails.acf);
      //console.log(footerdetails.acf);

    }
    Footercontents();



  }, [])

  const sendEmail = (e) => {
    console.log(form.current);
    e.preventDefault();

    emailjs.sendForm('service_4dj55kh', 'template_wikz79l', form.current, "PB7UwNxDxN07KH8Wn")
      .then((result) => {
        console.log(result.text);
        setMessage("✓ The email was sent successfully");
        setTimeout(() => {
          setMessage("");
          setFormdata({ name: "", email: "", phone: "" })
        }, 1000);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (

    <div id='connect' className='footer-main'>

      <div className='container'>
        <div className='footer-colms'>
          <div className='left-details'>
          {footerdata && footerdata.footer_logo&& 
            <div className='foots-logo'>
              <img src={footerdata.footer_logo} alt="logo" />
            </div>
          }
          {footerdata && footerdata.map_icon&& 
            <ul>
               
              <li><img src={footerdata.map_icon} alt="Locate"/></li>
              <li><a target="_blank" href={footerdata.address_link}>{footerdata.address}</a></li>
            </ul>
          }
          {footerdata && footerdata.mail_icon&& 
            <ul>
              <li><img src={footerdata.mail_icon} alt="Email"/></li>
              <li> <a href={footerdata.mailto}>{footerdata.email_address}</a></li>
            </ul>
          }
          {footerdata && footerdata.phone_icon&& 
            <ul>
              <li><img src={footerdata.phone_icon} alt="Phone" /></li>
              <li><a href={footerdata.callto}>{footerdata.phone_number}</a></li>
            </ul>
          }

          </div>

          <div className='connect-right'>

            <h3>{footerdata.connect_with_us}</h3>
            <form ref={form} onSubmit={sendEmail}>

              <ul>
                <li> <input type="text" name='name' value={formdata.name} id='name' placeholder='Name' onChange={(e) => { setFormdata({ ...formdata, [e.target.name]:e.target.value }) }}  required/></li>
                <li>  <input required type="email" id='email' placeholder='Email' value={formdata.email} name='email' onChange={(e) => { setFormdata({ ...formdata, [e.target.name]: e.target.value }) }} /></li>
              </ul>

              <ul>
                <input pattern="[1-9]{1}[0-9]{9}" required type="tel" id='phone' name='phone' placeholder='Phone' value={formdata.phone} onChange={(e) => { setFormdata({ ...formdata, [e.target.name]: e.target.value }) }} />


              </ul>
              <ul className='chkbx'>  <input type="checkbox" id="vehicle1" name="vehicle1" value=" By giving my phone number, i agree to being contacted by Phone, SMS, Whatsapp or any other chanel" />
                <label htmlFor="vehicle1"> By giving my phone number, i agree to being contacted by Phone, SMS, Whatsapp or any other chanel.</label> </ul>

              <input type="submit" value="ENQUIRE NOW" />
              <h5>{message}</h5>
            </form>





          </div>

        </div>


        <div className='footer-copyrights'>

          <div className='footer-copyrights-inner'>
            <p>{footerdata.copyright_text}</p>
          </div>
          <div className='footer-rights'>
            <ul>
              <li><a href="https://api.whatsapp.com/send?phone=917895461239&text=Hello,%20" target='_blank'><i className="fab fa-whatsapp"></i></a></li>
              <li><a href="tel:+917895461239"><i className="fa fa-phone"></i></a></li>

            </ul>
          </div>


        </div>
      </div>

    </div>

  )
}
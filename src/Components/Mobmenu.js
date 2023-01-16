import './Mobmenu.css';
import { Link } from 'react-scroll';
import { useEffect, useRef, useState } from 'react'
import menusicons from "../Components/images/menu.svg"
import closeicons from "../Components/images/close.svg"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Mobmenu = () => {
  const [btncancel, setBtncancel] = useState(false)
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth"
  // });




  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };

  const [footerdata, setFooterdata] = useState([]);
  const [menu, setMenus] = useState([]);
  useEffect(() => {
    async function Footercontents() {

      const footerdatas = await fetch('https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33');
      const footerdetails = await footerdatas.json();
      setFooterdata(footerdetails.acf);
      setMenus(footerdetails.acf.menus);
      //console.log(footerdetails.acf);

    }
    Footercontents();



  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menufunction = () => {

    if (isMenuOpen == false) {

      setIsMenuOpen(true);
      setBtncancel(true)
    }

    if (isMenuOpen == true) {
      setIsMenuOpen(false);

      setBtncancel(false)
    }

    console.log(isMenuOpen)
  }

  return (
    <div>
      <header className="header-section  d-xl-block">
        <div id='Topmob-sec'>
          <div className='container'>




            <div className='desktop-menusss'>
              <div className='manu-grid'>
                <div className='menu1 menu_1'>
                  <div className="hamburger-menu">

                    {btncancel == false ? <button onClick={menufunction}>
                      <img src={menusicons}/>


                      
                    </button> : <button onClick={menufunction}>
                    <img src={closeicons}/>

                      
                   
                    </button>}


                    {isMenuOpen == true ?


                      <ul className="menu__box" onClick={menufunction}>
                        <li><a className="menu__item" onClick={menufunction} href="#Quality" smooth="true" offset={0} duration={500}>{menu.label_1}</a></li>
                        <li><a className="menu__item" onClick={menufunction} href="#building" smooth="true" offset={0} duration={500}>{menu.label_2}</a></li>
                        <li><a className="menu__item" onClick={menufunction} href="#gallery" smooth="true" offset={0} duration={500}>{menu.label_3}</a></li>
                        <li><a className="menu__item" onClick={menufunction} href="#video-gallery" smooth="true" offset={0} duration={500}>{menu.label_4}</a></li>
                        <li><a className="menu__item" onClick={menufunction} href="#mapreacg-sec" smooth="true" offset={0} duration={500}>{menu.label_5}</a></li>
                        <li><a className="menu__item" onClick={menufunction} href="#floorplan" smooth="true" offset={0} duration={500}>{menu.label_6}</a></li>
                        <li><a className="menu__item" onClick={menufunction} href="#Specifications" smooth="true" offset={0} duration={500}>{menu.label_7}</a></li>
                        <li><a className="menu__item" onClick={menufunction} href="#pricingplans" smooth="true" offset={0} duration={500}>{menu.label_8}</a></li>
                        <li><a className="menu__item" onClick={menufunction} href="#project-developed" smooth="true" offset={0} duration={500}>{menu.label_9}</a></li>
                        {/* <li><a className="menu__item" href="#connect" smooth="true" offset={-70} duration={500}>Get In Touch</a></li> */}
                        <li><a className="menu__item"> <div className="dropdown ">
                          <button type="button" className="btn slide_btn" data-bs-toggle="dropdown">
                            {menu.label_10}
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href={footerdata.callto}>CALL US</a></li>
                            <li><a className="dropdown-item" href={footerdata.mailto}>EMAIL US</a></li>
                            <li> <a className="dropdown-item cursor_drop" href='#connect' smooth="true" duration={800} >CONTACT US</a> </li>
                            <li><a className="dropdown-item" href="https://api.whatsapp.com/send?phone=+916292252690&text=Hello,%20" target='_blank'>WHATSAPP</a></li>
                          </ul>
                        </div></a></li>

                      </ul>

                      : ''

                    }
                  </div>
                </div>
            {footerdata && footerdata.logo_image&& 
                <div className='menu1 logoct'>
                  <Link to="top-sections" smooth="true" offset={-70} duration={800}><img src={footerdata.logo_image} alt='logo' className='logo-new'></img></Link>
                </div>
            }
                <div className='menu1 btn-rt'>
                  {/* <button className='get-btn'><Link to="connect" smooth="true" offset={-60} duration={800}>GET IN TOUCH</Link></button> */}
                  {/* <button className='get-btn'><Link to="connect" smooth="true" offset={-60} duration={800}>GET IN TOUCH</Link></button> */}
                  <div className="dropdown">
                    <button type="button" className="btn get-btn dropdown-toggle" data-bs-toggle="dropdown">
                      GET IN TOUCH
                    </button>
                    <ul className="dropdown-menu ul-dropdown">
                      <li><a className="dropdown-item" href={footerdata.callto}>CALL US</a></li>
                      <li><a className="dropdown-item" href={footerdata.mailto}>EMAIL US</a></li>
                      <li><a className="dropdown-item cursor_drop" href='#connect' smooth="true" duration={800} >CONTACT US</a></li>
                      <li><a className="dropdown-item" href="https://api.whatsapp.com/send?phone=+916292252690&text=Hello,%20">WHATSAPP</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>






          </div>
        </div>
      </header>

    </div>
  )
}

export default Mobmenu;

import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../context/SharedState';
import '../CSS/navbar.css'

export default function Navbar(props) {
  const states = useContext(Context);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMode = () => {
    if (states.mode === 'light') {
      states.switchMode('dark')
      states.showAlert('Dark Mode Enabled', 'red', 2500)
    }
    if (states.mode === 'dark') {
      states.switchMode('light')
      states.showAlert('Light Mode Enabled', '#ffeb3b', 3000)
    }
  }

  useEffect(() => {
    const handleScroll = (props) => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <ul className={`nav d-flex nav-background fixed-top  
      ${isScrolled ?
          'scrolled nav-background-onScroll justify-content-start appearfromTop' :
          'pt-2 justify-content-center m-4'}`}>

        <button className={`btn btn-light ${isScrolled ? 'm-4' : ''}`} hidden={!isScrolled} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
          <span className="material-symbols-outlined mt-1 ">menu</span>
        </button>

        <div className={`offcanvas offcanvas-start mt-3 ms-3 rounded ${isScrolled ? 'bg-image' : 'invisible'}`} style={{ height: 360, width: 300 }} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
            <h5 className="offcanvas-title">Main Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className='nav flex-column'>
            <li className="nav-item">
                <a className={`nav-link nav-mainColor fw-bold btn btn-light ${isScrolled ? 'nav-mainColor-onScroll ' : ''}`} 
                 data-bs-dismiss="offcanvas" onClick={ toggleMode }>Switch to {states.mode==='dark'?'Light':'Dark'} mode </a>
              </li>
              <li className="nav-item">
                <button className={`nav-link nav-mainColor fw-bold  ${isScrolled ? 'nav-mainColor-onScroll ' : ''}`}   
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} data-bs-dismiss="offcanvas">Home</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link nav-mainColor fw-bold ${isScrolled ? 'nav-mainColor-onScroll ' : ''}`}   
                onClick={() => { scrollToContent('about') }} data-bs-dismiss="offcanvas">About Me</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link nav-mainColor fw-bold ${isScrolled ? 'nav-mainColor-onScroll ' : ''}`}
                 onClick={() => { scrollToContent('projects') }} data-bs-dismiss="offcanvas">My Projects</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link nav-mainColor fw-bold ${isScrolled ? 'nav-mainColor-onScroll ' : ''}`}
                 onClick={() => { scrollToContent('contact') }} data-bs-dismiss="offcanvas">Contact</button>
              </li>

              <div className="dropdown" data-bs-theme="dark">
                <a className={`nav-link nav-mainColor fw-bold dropdown-toggle ${isScrolled ? 'nav-mainColor-onScroll ' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Live Projects
                </a>
                <ul className="dropdown-menu fira-sans-regular">
                  <li><a className="dropdown-item" href="https://forwardtechnicalblog.blogspot.com/" target='_blank' rel="noreferrer">My Blog</a></li>
                  <li><a className="dropdown-item" href="https://react-text-utils-psi.vercel.app/" target='_blank' rel="noreferrer">Text Utilities (React)</a></li>
                  <li><a className="dropdown-item" href="https://todo-app-nsugam.vercel.app" target='_blank' rel="noreferrer">TODO-app (MERN)</a></li>
                  <li><a className="dropdown-item" href="#">BookMyRide (MERN)</a></li>
                </ul>
              </div>
            </ul>
          </div>
        </div>

        <li className="nav-item">
          <a className={`nav-link nav-mainColor fw-bold ${isScrolled ? 'nav-mainColor-onScroll' : ''}`} href="#about" hidden={isScrolled}>About Me</a>
        </li>

        <li className="nav-item">
          <a className={`nav-link nav-mainColor fw-bold text-decoration-none ${isScrolled ? 'nav-mainColor-onScroll' : ''}`} aria-current="page" href="#skills" hidden={isScrolled}>Achievements</a>
        </li>
        
        <li className="nav-item">
          <div className="dropdown" data-bs-theme="dark">
            <a className={`nav-link nav-mainColor fw-bold dropdown-toggle ${isScrolled ? 'nav-mainColor-onScroll ' : ''}`} href="#" hidden={isScrolled} data-bs-toggle="dropdown" aria-expanded="false">
              Live Projects
            </a>
            <ul className="dropdown-menu fira-sans-regular">
              <li><a className="dropdown-item" href="https://forwardtechnicalblog.blogspot.com/" target='_blank' rel="noreferrer">My Blog</a></li>
              <li><a className="dropdown-item" href="https://react-text-utils-psi.vercel.app/" target='_blank' rel="noreferrer">Text Utilities (React)</a></li>
              <li><a className="dropdown-item" href="https://todo-app-nsugam.vercel.app" target='_blank' rel="noreferrer">TODO-app (MERN)</a></li>
              <li><a className="dropdown-item" href="#">BookMyRide (MERN)</a></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a className={`nav-link nav-mainColor fw-bold ${isScrolled ? 'nav-mainColor-onScroll' : ''}`} href="#contact" hidden={isScrolled}>Contact</a>
        </li>
      </ul>
    </>
  );
}

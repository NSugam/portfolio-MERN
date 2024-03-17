import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import Page404 from './components/Page404';
import { SharedState } from './context/SharedState';
import './CSS/loader.css'
import './CSS/googleFonts.css'
import Loader from './components/Loader';

function App() {

  // for loading animation on start
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //remove unnecessary hash "#" from URL pattern immediately when i scroll
    window.addEventListener('scroll', () => {
      if (window.location.hash && window.location.hash !== '#') {
        window.history.replaceState(null, null, window.location.pathname);
      }
    });

    // Simulate loading time for showing LOADER manually
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [window.scrollY]);

  return (
    <>
      {loading ? (

        <Loader />

      ) : (
        <SharedState>
          <Router>
            <Navbar showAlert={SharedState.showAlert} />
            <Routes>

              <Route exact path="/" element={<MainBody />} />
              <Route path="*" element={<Page404 />} />

            </Routes>
          </Router>
        </SharedState>
      )}
    </>
  );
}

export default App;

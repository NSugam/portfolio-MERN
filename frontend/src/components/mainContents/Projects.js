import React from 'react'
import '../../CSS/projects.css'

export default function Projects(props) {
  return (
    <>
      <div className='pb-4'
        style={props.mode === 'dark' ?
          { backgroundImage: 'url(https://i.ibb.co/nmSkQTC/background.jpg)' } :
          { background: 'linear-gradient(45deg, #00bcd4,#ffeb3b)' }}
        data-bs-theme={props.mode}>

        <div id="projects" className='madimi-one-regular text-center content-heading-text'> Projects </div>

        <hr className="w-75 m-auto" />

        <p className='fs-5 text-center mt-3'>My Projects are a versatile initiative that brings together practical solutions using technology.</p>
        <div className="container d-flex justify-content-center align-items-center text-center mt-5" data-aos="fade-right" data-aos-duration="2000">

          <div className="Projectcontainer d-flex justify-content-center row m-auto user-select-none" >

            <div className={`card d-flex justify-content-center align-items-center col-6 mb-5
            ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <div className={`imgBx position-absolute ${props.mode === 'dark' ? 'bg-light' : 'bg-light'}`}>
                <img src="https://i.ibb.co/ZTDy52X/image.png" />
              </div>
              <div className="content overflow-hidden position-absolute">
                <h3 className='over-the-rainbow-regular'>BookMyRide</h3>
                <p className='ms-3 me-3'>
                  Discover the freedom of the open road with BookMyRide and make your next journey unforgettable.
                  With easy online booking and a vast network of rental partners, finding the perfect ride is just a few clicks away.
                </p>
                <div className='card-footer mt-4'>
                  <a href="https://github.com/NSugam/book-my-ride-app" className={`btn btn-${props.mode === 'dark' ? 'light' : 'warning'} d-block mb-2`} target="_blank" rel="noopener">Github Repository</a>
                  <a href="https://bookmyride-frontend.vercel.app/" target='_blank' rel="noreferrer" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'success'} d-block`} >Live Demo</a>
                </div>
              </div>
            </div>

            <div className={`card d-flex justify-content-center align-items-center col-6 mb-5 mx-4
            ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <div className={`imgBx position-absolute ${props.mode === 'dark' ? 'bg-light' : 'bg-light'}`}>
                <img src="https://i.ibb.co/C20fC9G/image.png" />
              </div>
              <div className="content overflow-hidden position-absolute">
                <h3 className='over-the-rainbow-regular'>Hotel Bookings</h3>
                <p className='ms-3 me-3'>
                  This website offers a user-friendly platform to browse and book accommodations.
                  With detailed descriptions, photos, and reviews, users can easily find their perfect stay.
                </p>
                <div className='card-footer mt-4'>
                  <a href="https://github.com/NSugam/Food-delivery-system-django" className={`btn btn-${props.mode === 'dark' ? 'light' : 'warning'} d-block mb-2`} target="_blank" rel="noopener">Github Repository</a>
                  <a href="#" target='_blank' rel="noreferrer" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'success'} d-block disabled`} >Live Demo</a>
                </div>
              </div>
            </div>

            <div className={`card d-flex justify-content-center align-items-center col-6 mb-5
            ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <div className={`imgBx position-absolute ${props.mode === 'dark' ? 'bg-light' : 'bg-light'}`}>
                <img src="https://i.ibb.co/Dwmtk3p/food-delivery.png" />
              </div>
              <div className="content overflow-hidden position-absolute">
                <h3 className='over-the-rainbow-regular'>Food delivery system</h3>
                <p className='ms-3 me-3'>
                  In today's fast-paced world,
                  where convenience and efficiency are highly valued, food delivery websites have revolutionized the way we enjoy our favorite meals.
                </p>
                <div className='card-footer mt-4'>
                  <a href="https://github.com/NSugam/Food-delivery-system-django" className={`btn btn-${props.mode === 'dark' ? 'light' : 'warning'} d-block mb-2`} target="_blank" rel="noopener">Github Repository</a>
                  <a href="#" target='_blank' rel="noreferrer" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'success'} d-block disabled`} >Live Demo</a>
                </div>
              </div>
            </div>

            <div className={`card d-flex justify-content-center align-items-center col-6 mb-5
            ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <div className={`imgBx position-absolute ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                <img src="https://i.ibb.co/FW2zbff/image.png" />
              </div>
              <div className="content overflow-hidden position-absolute">
                <h3 className='over-the-rainbow-regular'>TODO-application</h3>
                <p className='me-3 ms-3'>
                  This TODO app allows any random users to add, remove, and update tasks easily,
                  with changes being reflected in real-time to everyone on the internet.
                </p>
                <div className='card-footer mt-5'>
                  <a href="https://github.com/NSugam/todo-app" className={`btn btn-${props.mode === 'dark' ? 'light' : 'warning'} d-block mb-2 disabled`} target="_blank" rel="noopener">Github Repository</a>
                  <a href="https://todo-app-nsugam.vercel.app" target='_blank' rel="noreferrer" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'success'} d-block`}>Live Demo</a>
                </div>
              </div>
            </div>

            <div className={`card d-flex justify-content-center align-items-center col-sm-6 mb-5 mx-4
            ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <div className={`imgBx position-absolute ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`} style={{ height: '150px' }}>
                <img src="https://i.ibb.co/nwZthyn/image.png" />
              </div>
              <div className="content overflow-hidden position-absolute">
                <h3 className='over-the-rainbow-regular'>Text Utilities</h3>
                <p className='me-2 ms-2'>
                  The ReactJS Text Case Converter is a simple web application designed to facilitate the transformation of text between
                  uppercase and lowercase formats.
                </p>
                <div className='card-footer mt-4'>
                  <a href="https://github.com/NSugam/react-TextUtils" className={`btn btn-${props.mode === 'dark' ? 'light' : 'warning'} d-block mb-2`} target="_blank" rel="noopener">Github Repository</a>
                  <a href="https://react-text-utils-psi.vercel.app/" target='_blank' rel="noreferrer" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'success'} d-block`}>Live Demo</a>
                </div>
              </div>
            </div>

            <div className={`card d-flex justify-content-center align-items-center col-6 mb-5
            ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <div className={`imgBx position-absolute ${props.mode === 'dark' ? 'bg-light' : 'bg-light'}`}>
                <img src="https://i.ibb.co/4smRNst/image.png" />
              </div>
              <div className="content overflow-hidden position-absolute">
                <h3 className='over-the-rainbow-regular'>My Portfolio</h3>
                <p className='ms-3 me-3'>
                  A portfolio is a curated collection of work that showcases your skills, experiences, and accomplishments.
                  It is an essential tool for showcasing your talents and standing out in a competitive field.
                </p>
                <div className='card-footer mt-3'>
                  <a href="https://github.com/NSugam/portfolio-MERN" className={`btn btn-${props.mode === 'dark' ? 'light' : 'warning'} d-block mb-2 disabled`} target="_blank" rel="noopener">Github Repository</a>
                  <a href="#home" className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'success'} d-block`} >Live Demo</a>
                </div>
              </div>
            </div>

            <div className={`card d-flex justify-content-center align-items-center col-sm-6 mb-4
            ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <div className={`imgBx position-absolute ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`} style={{ height: '150px' }}>
                <img src="https://i.ibb.co/5FkDrgw/image.png" />
              </div>
              <div className="content overflow-hidden position-absolute">
                <h3>My Repositories</h3>
                <p className='me-2 ms-2'>
                  GitHub repositories play a crucial role in the modern software development process, fostering collaboration, transparency, and efficient version control.
                  They are widely used by individual developers, open-source projects, and organizations of all sizes to manage their code and projects.
                </p>
                <div className='card-footer mt-3'>
                  <a href="https://github.com/NSugam" className={`btn btn-${props.mode === 'dark' ? 'light' : 'warning'} d-block mb-2`} target="_blank" rel="noopener">My Repository</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <p className='fw-bold border p-3 rounded-5 mt-5 mx-4'>Other Projects will be updated soon...</p>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

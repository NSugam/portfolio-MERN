import React from 'react'

export default function About(props) {
  return (
    <>
      <div className={`${props.mode === 'dark' ? 'bg-dark' : ''}`}>

        <div id="about" className='madimi-one-regular text-center content-heading-text'> About me </div>

        <hr className="w-75 m-auto" />

        <section className='container-fluid fs-5 text-center mt-3 mb-4' data-aos="fade-right" data-aos-duration="2000">
          <div className='row'>

            {/* <div className='col-sm-4'>
              {props.mode === 'light' ?
                <img className='col-12' src="https://user-images.githubusercontent.com/69011963/137184767-79a13ec7-1bb3-4341-a6da-3a149c9c159a.gif" alt="My GIF" /> :
                <img src='/about-dark.png' />
              }
            </div> */}

            <div className='col-sm-4'>
              {props.mode === 'light' ?
                <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="sugamneupane" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sugamneupane?trk=profile-badge">Sugam Neupane</a></div>
              
                :
                <img src='/about-dark.png' />
              }
            </div>


            <div className='col-sm-4 user-select-none mb-4'>
              <p>
                Hello, I'm <strong>Sugam Neupane,</strong><br />a final year computer science student at CMR Institute of Technology
                with a passion for full-stack development using the MERN stack.
                I thrive in the world of web development, constantly seeking new challenges and innovative solutions.<br />
                I've honed my skills in MongoDB, Express, React, and Node.js, crafting dynamic and responsive web applications.
                My academic journey has been enriched by hands-on projects, where I've tackled real-world problems and collaborated with peers to achieve
                remarkable results.<br />
                Let's connect and explore the possibilities together!
              </p>
              <div className='text-center'>
                <a className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} btn-floating m-1`} href="https://www.facebook.com/ns.neupane09/" target='_blank' rel="noreferrer">
                  <i className="bi-facebook"></i>
                </a>

                <a className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'danger'} btn-floating m-1`} href="https://www.instagram.com/ns_neupane09" target='_blank' rel="noreferrer">
                  <i className="bi-instagram"></i>
                </a>

                <a className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} btn-floating m-1`} href="https://www.linkedin.com/in/sugamneupane/" target='_blank' rel="noreferrer">
                  <i className="bi-linkedin"></i>
                </a>

                <a className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} btn-floating m-1`} href="https://github.com/NSugam" target='_blank' rel="noreferrer">
                  <i className="bi-github"></i>
                </a>

                <a className={`btn btn-${props.mode === 'dark' ? 'light' : 'success'} ms-2`} href="#contact">Contact me</a>
              </div>
            </div>


            <div className='col-sm-4 text-center'>
              <img src={`https://github-readme-stats.vercel.app/api?username=nsugam&show_icons=true&rank_icon=github&theme=${props.mode === 'dark' ? 'radical' : ''}`}
                alt="nsugam" data-aos="fade-down" data-aos-duration="2000" />
              <img className='mt-4' src={`https://github-readme-stats.vercel.app/api/top-langs/?username=nsugam&layout=donut&theme=${props.mode === 'dark' ? 'radical' : ''}`}
                alt="nsugam" data-aos="flip-left" data-aos-duration="2000" />
            </div>

          </div>
        </section>

      </div>
    </>
  )
}

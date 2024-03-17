import React from 'react'

export default function SkillsAndAcheivements(props) {
    return (
        <>

            <div className={`pb-4 ${props.mode === 'dark'?'bg-dark':''}`} data-bs-theme={props.mode}>
                <div id="skills" className='madimi-one-regular text-center content-heading-text'> Skills and Achievements </div>

                <hr className="w-75 m-auto" />

                <div className='container-fluid row p-4 m-auto'>
                    <div className='col-sm-4' data-aos="fade-right" data-aos-duration="2000">
                        <div className="progress mb-4" style={{ height: '30px' }}>
                            <div className={`progress-bar progress-bar-striped progress-bar-animated ${props.mode==='dark'?'bg-dark':'bg-primary'}`} style={{ width: '80%' }}>HTML/CSS</div>
                        </div>
                        <div className="progress mb-4" style={{ height: '30px' }}>
                            <div className={`progress-bar progress-bar-striped progress-bar-animated ${props.mode==='dark'?'bg-dark':'bg-danger'}`} style={{ width: '90%' }}>Bootstrap</div>
                        </div>
                        <div className="progress mb-4" style={{ height: '30px' }}>
                            <div className={`progress-bar progress-bar-striped progress-bar-animated ${props.mode==='dark'?'bg-dark':'bg-info'}`} style={{ width: '60%' }}>React JS</div>
                        </div>
                        <div className="progress mb-4" style={{ height: '30px' }}>
                            <div className={`progress-bar progress-bar-striped progress-bar-animated ${props.mode==='dark'?'bg-dark':'bg-success'}`} style={{ width: '40%' }}>Express JS / Node JS</div>
                        </div>
                        <div className="progress mb-4" style={{ height: '30px' }}>
                            <div className={`progress-bar progress-bar-striped progress-bar-animated ${props.mode==='dark'?'bg-dark':'bg-primary'}`} style={{ width: '60%' }}>Mongo DB</div>
                        </div>
                        <div className="progress mb-4" style={{ height: '30px' }}>
                            <div className={`progress-bar progress-bar-striped progress-bar-animated ${props.mode==='dark'?'bg-dark':'bg-warning'}`} style={{ width: '70%' }}>DJANGO</div>
                        </div>

                        <p className='mt-5 fs-5 text-center'>
                            I excel in JavaScript, React, Node.js, and MongoDB, specializing in MERN stack development.
                            I have a keen eye for creating visually stunning and responsive interfaces.
                            My accomplishments include delivering various web projects, such as a personal portfolio and a task management app.
                            I am committed to ongoing learning and embracing new technologies.
                        </p> 
                        <div className='text-center mb-3'>
                            <a className={`btn btn-outline-${props.mode === 'dark'?'light':'success'} me-3`} href="#contact">Contact me</a>
                            <a className={`btn btn-${props.mode === 'dark'?'light':'success'} me-3`} href="#contact">Download Resume</a>

                        </div>


                    </div>

                    <div className='col'>

                        <div className="row row-cols-1 row-cols-md-3 g-3">

                            <div className="col col-sm-6" data-aos="flip-right" data-aos-duration="2000">
                                <div className="card text-light h-100">
                                    <img src="https://i.ibb.co/8z6Q0xw/image.png" alt="Infosys SpringBoard" className="card-img-top" height={220} />
                                </div>
                            </div>

                            <div className="col col-sm-6" data-aos="flip-left" data-aos-duration="2000">
                                <div className="card text-light h-100">
                                    <img src="https://i.ibb.co/DVb7NfZ/image.png" alt="Coursera-JS,HTML,CSS" className="card-img-top" height={220} />
                                </div>
                            </div>

                            <div className="col col-sm-6" data-aos="flip-right" data-aos-duration="2000">
                                <div className="card text-light h-100">
                                    <img src="https://i.ibb.co/vsfhVXZ/image.png" alt="GDG Developers" className="card-img-top" height={220} />
                                </div>
                            </div>

                            <div className="col col-sm-6" data-aos="flip-down" data-aos-duration="2000">
                                <div className="card text-light h-100">
                                    <img src="https://i.ibb.co/WDcDRj8/image.png" alt="Udemy-Python and Django" className="card-img-top" height={220} />
                                </div>
                            </div>

                            <div className="col col-sm-6" data-aos="slide-up" data-aos-duration="2000">
                                <div className="card text-light h-100">
                                    <img src="https://i.ibb.co/c28CyLG/image.png" alt="Udemy-Python In depth" className="card-img-top" height={220} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

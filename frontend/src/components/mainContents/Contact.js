import React, { useState } from 'react'
import axios from 'axios';

export default function Contact(props) {
    const hostname = process.env.REACT_APP_LOCALHOST

    const [userInput, setUserInput] = useState({})
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    const submitData = async (e) => {
        e.preventDefault();
        try {
            await props.showAlert("Sending your message...", "red", 2000);
            await axios.post(hostname + '/api/sendMail', userInput);
            await props.showAlert("Message Sent! I will respond to you probably within 24 hours!", "lightgreen", 4000);
            await e.target.reset();
            setUserInput({});
        } catch (error) {
            if(error.response.status == 429){
                props.showAlert("Too many request! Try again later", "red", 3000);
                return
            }
            props.showAlert("Server Problem! Try again later", "red", 3000);
            console.log(error);
        }
    };


    return (
        <>

            <div className='pb-4' style={props.mode === 'dark' ? { backgroundImage: 'url(https://i.ibb.co/nmSkQTC/background.jpg)' } : { background: 'linear-gradient(45deg, #00bcd4,#ffeb3b)' }} data-bs-theme={props.mode}>
                <div id="contact" className='madimi-one-regular text-center content-heading-text'
                    style={props.mode === 'dark' ? { background: '-webkit-linear-gradient(#eee, #333)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : {}}>
                    Send me a message!
                </div>

                <hr className="w-75 m-auto" />

                <section>

                    <div className='container row m-auto'>
                        <div className='col-sm-6 text-start border-end mb-3 mt-3' data-aos="fade-right" data-aos-duration="2000">
                            <span className='fs-1'>Getting in touch is easy!</span>
                            <br />
                            <span className="material-symbols-outlined me-2 mt-3">location_on</span>
                            <span className=''>Bengaluru, Karnataka, India</span>
                            <br />
                            <span className="material-symbols-outlined me-2 mt-3">call</span>
                            <span className=''>(+91) 123 321 1221</span>
                            <br />
                            <span className="material-symbols-outlined me-2 mt-3">mail</span>
                            <span className=''>contact@neupanesugam.com.np</span>
                            <br />
                            <span className="material-symbols-outlined me-2 mt-3">travel_explore</span>
                            <span className=''>Find me on...</span>
                            <br />
                            <div className=' col-sm-5 rounded-5 mt-3 text-start' data-aos="fade-up" data-aos-duration="2000">
                                <div>
                                    <a className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} btn-floating m-1`}
                                        href="https://www.facebook.com/ns.neupane09/" target='_blank' rel="noreferrer">
                                        <i className="bi-facebook"></i>
                                    </a>

                                    <a className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'danger'} btn-floating m-1`}
                                        href="https://www.instagram.com/ns_neupane09" target='_blank' rel="noreferrer">
                                        <i className="bi-instagram"></i>
                                    </a>

                                    <a className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'primary'} btn-floating m-1`}
                                        href="https://www.linkedin.com/in/sugamneupane/" target='_blank' rel="noreferrer">
                                        <i className="bi-linkedin"></i>
                                    </a>

                                    <a className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} btn-floating m-1`}
                                        href="https://github.com/NSugam" target='_blank' rel="noreferrer">
                                        <i className="bi-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-6 mt-3' data-aos="fade-left" data-aos-duration="2000">
                            <form onSubmit={submitData} id="contact-form">
                                <div className="mb-3">
                                    <label className="form-label">Your Name <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control fs-5" name='name' placeholder='Full name' onChange={handleInput} required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email address <span className='text-danger' style={{ fontSize: 15 }}>* must be valid</span></label>
                                    <input type="email" className="form-control fs-5" name='email' placeholder='@' onChange={handleInput} required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone Number <span className='text-danger' style={{ fontSize: 14 }}>(optional)</span></label>
                                    <input type="tel" className="form-control fs-5" name='phone' placeholder='+91-' onChange={handleInput} required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Your message <span className='text-danger'>*</span></label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"
                                        placeholder='Write your message here' name='message' onChange={handleInput} required></textarea>
                                </div>

                                <div className='text-end'>
                                    <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'success'}`} type='submit'>Send Message</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </section>

            </div>

        </>
    )
}

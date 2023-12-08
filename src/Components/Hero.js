import React from 'react'
import '../Css/Hero.css';
import Logo from '../Assets/logo-iitm-red.png'
import Logo1 from '../Assets/logo.png'
import Logo2 from '../Assets/logo-gif.gif'
import { Navigate, useNavigate } from 'react-router-dom';
// import $ from "jquery";

function Hero() {
    const navigate = useNavigate();
  return (
      <>
       <div className="container-xxl position-relative p-0">

            <nav className="navbar navbar-expand-lg bg-dark navbar-light px-4 px-lg-5 py-3 py-lg-0 ">
                <a href="/" className="navbar-brand p-0">
                    <h1 className="m-0 img-nav">
                        <img src={Logo} alt="Logo"/>
                    </h1>

                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="#about" className="nav-item nav-link">About</a>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#past">Upcoming Event</a></li>
                                <li><a className="dropdown-item" href="#event"> Past Events </a></li>
                            </ul>
                            
                        </li>
                        <p onClick={()=>navigate("/team")} className="nav-item nav-link">Team</p>
                        <a href="#contact" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>

            {/* <div className="container-xxl py-5 bg-dark hero-header mb-5"> */}
            <div className="py-5 bg-dark hero-header mb-5">
                <div className="container my-5 py-5 px-lg-5 ">
                {/* <div className="container my-5 py-5 px-lg-5"> */}
                    <div className="row g-5 py-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <a href="/" className="navbar-brand p-0">
                                <h1 className="m-0 ">
                                    <img src={Logo1} height="150" width="150" alt="Logo"/> <span
                                        className="text-danger">AI</span><span style={{color:'bisque'}} className="fs-5">Experience
                                        Centre</span>
                                </h1>

                            </a>
                            <h1 className="text-white mb-4 animated zoomIn">
                                Prophesying the future isn’t sorcery, it’s
                                Artificial Intelligence
                            </h1>
                            <p className="text-white pb-3 animated zoomIn">The future of our society is intertwined with the
                                future of data-driven thinking—most prominently, artificial intelligence is set to amend
                                every aspect of our lives</p>
                            <a href="#contact"
                                className="btn btn-outline-danger py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact
                                Us</a>
                            <a href="mailto:a.i.experiencecenter.iitm@gmail.com"
                                className="btn btn-outline-danger py-sm-3 px-sm-5 rounded-pill animated slideInRight">Email
                                Us</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <div style={{}} className="hero-gif">
                            <img
                                    src={Logo2} width="300" height="300" alt="hello this is me"
                                    style={{}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>


  )
}

export default Hero
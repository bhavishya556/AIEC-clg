import React from 'react'
import Brain from '../Assets/about.png';
import { FaInstagram ,FaFacebookSquare} from "react-icons/fa";
function AboutUS() {
  return (
    <div>
        {/* <!-- About Start --> */}
        <div className=" container-xxl py-5" id="about">
            <div className="container px-lg-5">s
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h5 className="position-relative text-primary ps-4">About Us</h5>
                            <h2 className="mt-2">What do we do?
                                Here’s what: </h2>
                        </div>
                        <p className="mb-4 " style={{}}>
                            We are a society focused on emerging technologies
                            like Artificial
                            Intelligence, Drone Technology and Machine Learning. We organise exquisite workshops and
                            astonishing interactive events. Our ambition is to make learning AI delightful . We welcome
                            you all to participate. All you must-have is a mind eager to acquire knowledge and a brain
                            full of magnificent ideas . We are really thrilled to make acquaintance with you, the people
                            who brings different standpoint and to advance towards AI and make a difference.
                            <br/>
                            Stay up to date about the stunning and biggest news about AI through our website and by
                            following us on Instagram.
                            <br/>
                            Have a wacky, whimsical, cool idea to do something fun with Artificial Intelligence? Write
                            us an email or contact us directly!
                        </p>

                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-danger  rounded-pill px-4 me-3" href="/">
                                Read More
                            </a>
                            <a className="btn" href="/">
                                
                                <FaFacebookSquare/>
                            </a>
                            <a className="btn" target="_blank" rel="noreferrer"
                                href="https://instagram.com/ai_ec_iitm?igshid=YmMyMTA2M2Y=">
                                    <FaInstagram/>
                                    </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" alt="Brain" data-wow-delay="0.5s" src={Brain}/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}
    </div>
    
  )
}

export default AboutUS
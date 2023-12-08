import React from 'react'
import '../Css/contact.css';
import { FaInstagram ,FaFacebookSquare,FaAddressCard} from "react-icons/fa";
import { CiMail} from "react-icons/ci";
import { AiFillLinkedin,AiFillPhone,AiFillGithub} from "react-icons/ai";
function contact() {
  return (
    <div>       
    <section class="wow fadeInUp" data-wow-delay="0.1s" id="contact">
        <div class="contact-box">
            <div class="contact-links">
                <h2 class="contact-head-2">CONTACT US</h2>
                <div class="links">
                    <div class="link">
                        <a href="mailto:a.i.experiencecenter.iitm@gmail.com"><CiMail className='contact-img fa-brands fa-2xl text-light'/></a>
                    </div>
                    <div class="link">
                        <a><AiFillLinkedin className='contact-img fa-brands fa-2xl text-light'/></a>
                    </div>
                    <div class="link">
                        <a><FaFacebookSquare className='contact-img fa-brands fa-2xl text-light'/></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/ai_ec_iitm/"><FaInstagram className='contact-img fa-brands fa-2xl text-light'/></a>
                    </div>
                </div>
            </div>
            <div class="contact-form-wrapper">
                <div class="responsive-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.633668997404!2d77.09981881458599!3d28.610764691817657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5567911807%3A0x996e86fe24144daf!2sIITM%20Janakpuri%20%7C%20Institute%20of%20Information%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1664776156540!5m2!1sen!2sin"
                        width="600" height="450" frameborder="0" style={{border:0}} alt="img-map" allowfullscreen></iframe>
                </div>
                <br/>
                <form>
                    <div class="form-item">
                        <p class=" material-symbols-outlined"><FaAddressCard></FaAddressCard> &nbsp;D-29,
                            Janakpuri Institutional Area, Janakpuri, New
                            Delhi, Delhi 110058</p>
                        <a href="tel:+91 011 2852 5882">
                            <p class=" material-symbols-outlined"><AiFillPhone></AiFillPhone> &nbsp; 011 2852
                                5882
                            </p>
                        </a>
                        <a href="mailto:a.i.experiencecenter.iitm@gmail.com">
                            <p class=" material-symbols-outlined"><CiMail
                                    ></CiMail>&nbsp;a.i.experiencecenter.iitm@gmail.com</p>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default contact
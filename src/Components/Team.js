import React from 'react'
import '../Css/mem.css';
import { AiFillLinkedin, AiFillPhone, AiFillGithub, AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";


import f1 from "./member-img/founder1.png"
import f2 from "./member-img/founder2.png"
import Anshita from "./member-img/AnshitaManocha.jpg"
import Ankita from "./member-img/Ankita copy.jpg"
import Ashutosh from "./member-img/AshutoshSharma.jpg"
import DeepikaVats from "./member-img/deepika.jpg"
import DevanshuPrajapat from "./member-img/DevanshuPrajapat.jpeg"
import DiveyChoudhary from "./member-img/DiveyChoudhary.jpeg"
import GarimaSharma from "./member-img/GarimaSharma.jpg"
import Jaskreet from "./member-img/jaskeet.jpg"
import kandariIshan from "./member-img/kandariIshan.JPG"
import khushi from "./member-img/khushi.jpg"
import khushii from "./member-img/kushiii.jpg"
import khushiii from "./member-img/kushiiii.jpg"

import ManpreetSingh from "./member-img/ManpreetSingh.jpg"
import muskan from "./member-img/muskan.jpg"
import RaunakBhatia from "./member-img/RaunakBhatia.jpeg"
import SachinSoni from "./member-img/SachinSoni.jpg"
import keshavSinha from "./member-img/keshavSinha.png"
import Shubham from "./member-img/Shubham.jpg"
import SmritiDhingra from "./member-img/SmritiDhingra.jpg"
import Srivastava from "./member-img/Srivastava.jpeg"
import BhavishyaVerma from "./member-img/bhavi.jpg"




const Team = () => {
    return (
        <div className='wrap'>

            <div className='teach-box'>




                <h2 className='heading'>
                <span id='blue-txt'>FACULTY COORDINATOR </span>

                     of Artificial Intelligence Experience Centre
                </h2>
                <div className='prof-head'>
                    <div className='fac-con'>
                        <div className='fac'>
                            <h5>
                                Advisory Board
                                Prof.(Dr.) Rachita Rana
                                Director<br></br>
                                Mr. Shiva Sharma
                                Executive Director
                                <br></br>


                            </h5>
                            <a><AiFillLinkedin className='linked' /></a>

                        </div>
                        <div className='fac'>
                            <h5>
                                Supervisor
                                Prof. (Dr.) Sudhir Kumar Sharma
                                Head of the Department & Dean Research(MCA)
                            </h5>
                            <a><AiFillLinkedin className='linked' /></a>

                        </div>
                        <div className='fac' id="fac3">
                            <h5 className='heading'>
                                Working Committee Member
                                <br></br>
                                Ms. Shilpi Bansal
                                <a><AiFillLinkedin className='linked' /></a>

                                <br></br>
                                Ms. Anjum Rathi
                                <a><AiFillLinkedin className='linked' /></a>

                                <br></br>
                                Mr. Rajiv Pathak
                                <a><AiFillLinkedin className='linked' /></a>

                            </h5>


                        </div>

                    </div>
                </div>
            </div>

            <div className='sub-wrap'>

                <div className='prof-head'>
                    <h2 className='heading'><span id='blue-txt'>  President </span>

                        President of Artificial Intelligence Experience Centre
                    </h2>
                </div>
                <div className='prof-con'>

                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={khushiii} className='immg'></img>
                        </div>

                        <h3 className='mem-name'>khushi Sihag
                            <br></br>
                            (Head)
                            <br></br>
                            <a><AiFillLinkedin className='linked' /></a></h3>

                    </div>

                </div>
                <div className='prof-head'>
                    <h2 className='heading'>
                        <span id='blue-txt'>Department Head </span>

                        of Artificial Intelligence Experience Centre
                    </h2>
                </div>
                <div className='prof-con'>

                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={BhavishyaVerma} className='immg'></img>
                        </div>


                        <div className='mem-txt'>

                            <h3 className='mem-name'>Bhavishya Verma
                                <br></br>
                                (Technical Head)
                                <br></br>
                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a>
                                <a><AiFillFacebook className='linked' /></a>
                                <a><AiFillGithub className='linked' /></a></h3>


                        </div>


                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={SmritiDhingra} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>Smriti Dhingra
                                <br></br>
                                (Mangement Head)
                                <br></br>
                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a>
                                <a><AiFillFacebook className='linked' /></a>
                                {/* <a><AiFillGithub className='linked' /></a> */}
                                </h3>


                        </div>

                    </div>

                </div>
                <div className='prof-head'>
                    <h2 className='heading'>
                        <span id='blue-txt'>Members </span>
                        of Artificial Intelligence Experience Centre
                    </h2>

                </div>
                <div className='prof-con'>

                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={Anshita} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>Anshita
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={Srivastava} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>Srivastava
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={GarimaSharma} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>Garima Sharma
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={Ashutosh} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>Ashutosh
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={Ankita} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>Ankita
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>


                            <img src={Shubham} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>Shubham
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={DeepikaVats} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>DeepikaVats
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={keshavSinha} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>keshavSinha
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={RaunakBhatia} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>Raunak Bhatia
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={muskan} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>Muskan
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={ManpreetSingh} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>ManpreetSingh
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={DiveyChoudhary} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>Divey Choudhary
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={SachinSoni} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>Sachin Soni
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>

                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={Jaskreet} className='immg'></img>
                        </div>
                        <div className='mem-txt'>

                            <h3 className='mem-name'>Jaskreet
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={DevanshuPrajapat} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>DevanshuPrajapat
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='img-con'>

                            <img src={kandariIshan} className='immg'></img>
                        </div>

                        <div className='mem-txt'>

                            <h3 className='mem-name'>kandariIshan
                                <br></br>

                                <a><AiFillLinkedin className='linked' /></a>
                                <a><AiOutlineInstagram className='linked' /></a></h3>


                        </div>

                    </div>

                </div>
                <div className='prof-head'>
                    <h2 className='heading'>

                        <span id='blue-txt'>Founder</span> of Artificial Intelligence Experience Centre
                    </h2>
                </div>
                <div className='prof-con' id="founder">

                    <div className='cardd' >
                        <div className='img-con'>

                            <img src={f1} className='immg'></img>
                        </div>

                        <h3 className='mem-name'>Nikhil
                            <br></br>
                            (Gilhari)
                            <br></br>
                            <a><AiFillLinkedin className='linked' /></a>
                            <a><AiOutlineInstagram className='linked' /></a>
                            <a><AiFillFacebook className='linked' /></a>
                            <a><AiFillGithub className='linked' /></a></h3>

                    </div>
                    <div className='cardd' id="founder">
                        <div className='img-con'>

                            <img src={f2} className='immg'></img>
                        </div>

                        <h3 className='mem-name'>khushi Sihag
                            <br></br>
                            (Gilhari)
                            <br></br>
                            <a><AiFillLinkedin className='linked' /></a>
                            <a><AiOutlineInstagram className='linked' /></a>
                            <a><AiFillFacebook className='linked' /></a>
                            <a><AiFillGithub className='linked' /></a></h3>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Team
import React from 'react'
import '../Css/Member.css';
import '../Css/mem.css';
import Ram from '../Images/Members/Ram.png';
import janvi from '../Images/Members/JanviNagi.jpg';
import Smriti from '../Images/Members/Smriti.jpg';
import Vishakha from '../Images/Members/Vishakha.jpg';
import Mansha from '../Images/Members/Mansha.jpg';
import Gautam from '../Images/Members/Gautam.jpg';
import Mehak from '../Images/Members/MehakGossain.jpg';
import Ankita from '../Images/Members/Ankita.jpg';
import Muskan from '../Images/Members/MuskanMalhotra.jpg';
import MehakTaneja from '../Images/Members/Mehaktaneja.jpg';

import Shrestha from '../Images/Members/srestha.png';
import Kashika from '../Images/Members/Kashika.jpg';
import Raunak from '../Images/Members/Raunak.jpg';
import Kushi from "./member-img/AIECPresident.jpg"



export default function Member() {
    return (
        <div>
            <section id="team" className="team  section-padding">
                <div class="container py-5 px-lg-5">
                    <div class=" text-dark section-title position-relative text-center mb-5 pb-2 wow fadeInUp`">
                        <h1>FACULTY COORDINATOR</h1>
                    </div>
                    <div class="event-container d-flex justify-content-between">
                        <div class=" bg-transparent text-center border rounded text-black p-4">
                            <p> <span><span class="text-white">.</span>Advisory Board</span> <br /><span
                            > Prof.(Dr.) Rachita Rana <br />Director
                            </span>
                                <br /><span >Mr. Shiva Sharma
                                    <br />Executive Director
                                </span>
                            </p>
                        </div>
                        <div class=" bg-transparent text-center border rounded text-black p-4">
                            <p> <span >Supervisor </span><br /><span
                            > Prof. (Dr.) Sudhir Kumar Sharma <br />Head of
                                the
                                Department & Dean Research</span>
                            </p>
                        </div>
                        <div class=" bg-transparent text-center border rounded text-black p-4">
                            <p> <span >Supervisor </span><br /><span
                            > Prof. (Dr.) Sudhir Kumar Sharma <br />Head of
                                the
                                Department & Dean Research</span>
                            </p>
                        </div>
                        <div class=" bg-transparent text-center border rounded text-black p-4">
                            <p> <span >Working Committee</span>
                                <br /><span ><br />
                                </span> <br /><span >Dr. Rohit Kumar Yadav<br />Member
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <header className="section-header">
                    <h4>Who we are</h4>
                    <h2>Our Professional Team</h2>
                    <p></p>
                </header>
                
                <div className="flex-items mem-img-con">
                    <div className='mem-img-subcon'>
                        <img  alt="i" src={Kushi} className='imgg'/>
                        <h4>Khushi Sihag</h4>
                        <h5>Head Coordinator</h5>
                    </div>
                  
                  
                   
                 
                </div>
            </section>

            {/* Member of Artificial Intelligence Experience Centre */}


            <section id="team" className="team section-padding">
                <header className="section-header">
                    {/* <h4>Who we are</h4> */}
                    <h2>Members of Artificial Intelligence Experience Centre</h2>
                    <p></p>
                </header>
                <div className="flex-items">
                 
                  
                    
                    <div>
                        <img src={Ankita} alt="i" />
                        <h4>Ankita Gulati</h4>
                    </div>
                    <div>
                        <img src={Muskan} alt="i" />
                        <h4>Muskan Malhotra</h4>
                    </div>
                </div>
            </section>




            {/* members second line starts here */}
            <section id="team" className="team section-padding">

                <div className="flex-items">
                 
                    
                    
                    <div>
                        <img src={Raunak} alt="" />
                        <h4>Raunak Bhatia</h4>
                    </div>
                </div>
            </section>

            {/* members second line ends here */}
        </div>
    )
}

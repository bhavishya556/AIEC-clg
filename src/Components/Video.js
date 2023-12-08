import React from 'react'
import AI from '../Assets/AIvideo.mp4';
import "../Css/Video.css";

function Video() {
  return (
    <div>
        <div className=" container" id="about">
                    <video  width={1000} height={1000} controls loop muted autoPlay>
                   <source src={AI} type="video/mp4"/>
                   </video>
                    </div>
        {/* <!-- About End --> */}
    </div>
  )
}

export default Video
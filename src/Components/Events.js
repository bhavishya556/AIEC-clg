import React from "react";
import "../Css/Event.css";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../Assets/e1.jpg";
import Img2 from "../Assets/up-1.jpg";
import Img3 from "../Assets/up-2.png";
import Img4 from "../Assets/up-3.png";
import Img5 from "../Assets/up-4.jpg";
import Img6 from "../Assets/up-5.jpg";
import Img7 from "../Assets/up-6.jpg";
import Img8 from "../Assets/CloudOps Essentials.jpg";

function Events() {
  return (
    <div id="event">
      <div>
        <header className="section-header text-dark">
          <h4>What we did</h4>
          <h2>Past Events</h2>
          <p></p>
        </header>
      </div>
      <Carousel className="bg-dark">
        <Carousel.Item>
          <img
            className="d-block w-80 mx-auto img-thumbnail"
            src={Img1}
            alt="First slide"
            height={500}
            width={500}
          />
          <Carousel.Caption>
            {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80 mx-auto img-thumbnail"
            src={Img2}
            alt="Second slide"
            height={500}
            width={500}
          />
          {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80 mx-auto img-thumbnail"
            src={Img3}
            alt="Third slide"
            height={500}
            width={500}
          />
          {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80 mx-auto img-thumbnail"
            src={Img4}
            alt="Third slide"
            height={500}
            width={500}
          />
          {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80 mx-auto img-thumbnail"
            src={Img5}
            alt="Third slide"
            height={500}
            width={500}
          />
          {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80 mx-auto img-thumbnail"
            src={Img6}
            alt="Third slide"
            height={500}
            width={500}
          />
          {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80 mx-auto img-thumbnail"
            src={Img7}
            alt="Third slide"
            height={500}
            width={500}
          />
          {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80 mx-auto img-thumbnail"
            src={Img8}
            alt="Third slide"
            height={500}
            width={500}
          />
          {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Events;

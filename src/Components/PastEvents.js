
import React from 'react'
import Brain from '../Assets/techquizite coming soon.jpg';

function PastEvents() {
  return (
    <div>
        <div className=" container-xxl py-5" id="past">
            <div className="container px-lg-5">
                <div className="row g-5">
                <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn rounded-2" alt="Brain" data-wow-delay="0.5s" src={Brain}/>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h5 className="position-relative text-primary ps-4">Upcoming events</h5>
                            <h2 className="mt-2">
                            What's New</h2>
                        </div>
                        <p className="mb-4 " style={{}}>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi laborum possimus eos laboriosam id? Unde nesciunt, praesentium laboriosam facilis accusantium ipsam porro voluptatem iure delectus distinctio facere animi earum dolor temporibus labore dolores. Mollitia aliquid facere architecto id officiis laudantium tempore eaque quaerat obcaecati, odit illo ad tempora. Quam, veniam tempore laborum nesciunt earum fugiat assumenda facilis exercitationem minus tenetur blanditiis quo unde nemo accusamus natus ad sed cumque.
                        </p>

                    </div>
                   
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}
    </div>
    
  )
}

export default PastEvents
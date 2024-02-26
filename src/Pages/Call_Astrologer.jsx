import React from 'react'
import { Link } from 'react-router-dom';


function Call_Astrologer() {
    return (
        <>
            <section className='call_with_astrloger mt-4'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <div className="astrologer_details_box">
                                <div className="astrologer_details_box_left">
                                    <div className="asrologer_img">
                                        <img src="https://sisgain.com/assets/images/testimonials/john-smith.webp" alt="" />
                                        <span> <i className='fa fa-star'></i>   <i className='fa fa-star'></i>   <i className='fa fa-star'></i>        <i className='fa fa-star'></i>     <i className='fa fa-star'></i></span>
                                        <p>5862 orders</p>
                                    </div>
                                    <div className="astrologer_bio">
                                        <h6> Mahaveer </h6>
                                        <span>Vedic</span>
                                        <span>Hindi, Sanskrit</span>
                                        <span>Exp: 3 Years</span>
                                        <span><b>Free</b> <del>16/min</del></span>
                                    </div>
                                </div>
                                <div className="astrologer_btn ">
                                    <img src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/24x24/assets/images/Chat_with_astrologers/webp/tick_icon.webp" alt="" />
                                    <Link to="/call-form">
                                        <button>Call</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Call_Astrologer
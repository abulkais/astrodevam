import React from 'react'
import { Link } from 'react-router-dom';
import call_icon from '../images/call_icon.webp';
import chat_icon from '../images/chat_icon.webp';
import shop_icon from '../images/shopping_icon.webp';
import puja_icons from '../images/puja_icons.webp';


const Dashboard = () => {
  return (
    <>
      <div className="container-fluid pt-3 mb-3">
        <section className="dashboard_upper_sec ">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="dashboard_upper_box">
                <Link to="/chat-with-astrologer">
                  <img src={chat_icon} alt="" />
                  <p>Chat with Astrologer</p>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="dashboard_upper_box">
                <Link to="/call-with-astrologer">
                  <img src={call_icon} alt="" />
                  <p>Call with Astrologer</p>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="dashboard_upper_box">
                <Link to="/shop">
                  <img src={shop_icon} alt="" />
                  <p>Astrologer Shop</p>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="dashboard_upper_box">
                <Link to="/e-pooja">
                    <img src={puja_icons} alt="" />
                    <p>Book a Pooja</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className='our_astrologer'>

          <h3>Our Astrologers</h3>


          <p>13000+ Best Astrologers from India for Online Consultation</p>
          <div className="row">
            <div className="col-md-4">
              <div className="our_astrologer_box">
                <Link to='/Jayant'>
                  <div className="our_astrologer_box_img">
                    <img src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1765.jpg" alt="" />
                  </div>
                  <div className='astrologer_name'>Jayant</div>
                  <div className='astrologer_profession'>Vedic Astrology</div>
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="our_astrologer_box">
                <Link to='/Sarika'>
                  <div className="our_astrologer_box_img">
                    <img src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/32.jpg" alt="" />
                  </div>
                  <div className='astrologer_name'>Sarika</div>
                  <div className='astrologer_profession'>Vedic Astrology</div>
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="our_astrologer_box">
                <Link to='/Sujata'>
                  <div className="our_astrologer_box_img">
                    <img src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/p-2324.jpg" alt="" />
                  </div>
                  <div className='astrologer_name'> Sujata</div>
                  <div className='astrologer_profession'>Vedic Astrology</div>
                </Link>
              </div>
            </div>


            <div className="col-md-4">
              <div className="our_astrologer_box">
                <Link to='/Deepa'>
                  <div className="our_astrologer_box_img">
                    <img src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/p-2105.jpg" alt="" />
                  </div>
                  <div className='astrologer_name'>Deepa</div>
                  <div className='astrologer_profession'>Vedic Astrology</div>
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="our_astrologer_box">
                <Link to=''>
                  <div className="our_astrologer_box_img">
                    <img src="https://aws.astrotalk.com/consultant_pic/p-37604.jpg" alt="" />
                  </div>
                  <div className='astrologer_name'>Satyesh</div>
                  <div className='astrologer_profession'>Vedic Astrology</div>
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="our_astrologer_box">
                <Link to=''>
                  <div className="our_astrologer_box_img">
                    <img src="https://aws.astrotalk.com/consultant_pic/p-37608.jpg" alt="" />
                  </div>
                  <div className='astrologer_name'>Rachna</div>
                  <div className='astrologer_profession'>Numerology </div>
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="our_astrologer_box">
                <Link to=''>
                  <div className="our_astrologer_box_img">
                    <img src="https://aws.astrotalk.com/consultant_pic/p-37648.jpg" alt="" />
                  </div>
                  <div className='astrologer_name'>DeepaS</div>
                  <div className='astrologer_profession'>Vedic Astrology</div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="our_astrologer_box">
                <Link to=''>
                  <div className="our_astrologer_box_img">
                    <img src="https://aws.astrotalk.com/consultant_pic/p-37739.jpg" alt="" />
                  </div>
                  <div className='astrologer_name'>Ritu</div>
                  <div className='astrologer_profession'>Numerology </div>
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="our_astrologer_box">
                <Link to=''>
                  <div className="our_astrologer_box_img">
                    <img src="https://aws.astrotalk.com/consultant_pic/p-37747.jpg" alt="" />
                  </div>
                  <div className='astrologer_name'>Permod</div>
                  <div className='astrologer_profession'>Numerology</div>
                </Link>
              </div>
            </div>


          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CallIcon from '@mui/icons-material/Call';
import ForumIcon from '@mui/icons-material/Forum';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SettingsIcon from '@mui/icons-material/Settings';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


import Navbar from './Navbar';
import Astrologer from './Chat_Astrologer';
import Call_Astrologer from './Call_Astrologer';
import Call_history from './Call_history';
import Dashboard from './Dashboard';
import E_Pooja from './E_Pooja';
import Shop from './Shop';
import Deepaa from './Deepaa';
import Jayant from './Jayant';
import Sarika from './Sarika';
import Sujata from './Sujata';
import Chat_history from './Chat_history';
import Call_form from './Call_form';
import Profile from './Profile';

const Home = () => {
  return (
    <>
      <div className="container" style={{ width: "100%", maxWidth: "100%" }}>

        <div className="row">
          <div className="col-12 col-lg-2 col-md-4 col-sm-4 pr-0 pl-0">
            <aside>
              <div className="sidebar_fixed">
                <div className='aside_card_img'>
                  <Link to="/profile">
                    <img src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/130x130/consultant_pic/1765.jpg" alt="" />
                    <h6 className='mt-3' style={{color:'#fff'}}>Jayant</h6>
                  </Link>
                </div>
                <div className='aside_inner_section'>

                  <Link to="/"><DashboardIcon /> Dashboard</Link>
                  <Link to="/chat-with-astrologer"><ChatBubbleOutlineIcon /> Chat with astrologer</Link>
                  <Link to="/call-with-astrologer"> <HeadsetMicIcon /> call with astrologer</Link>
                  <Link to="/call-history"> <CallIcon /> call history</Link>
                  <Link to="/chat-history"> <ForumIcon /> chat history</Link>
                  <Link to=" "> <AccountBalanceWalletIcon /> wallet</Link>
                  <Link to=" "> <EqualizerIcon /> Remedies</Link>
                  <Link to=" "> <ReviewsIcon /> my reviews</Link>
                  <a href="https://www.astrodevam.com/products.html" target='blank'> <Inventory2Icon /> products</a>
                  <a href="https://www.astrodevam.com/services.html" target='blank'> <VolunteerActivismIcon /> services</a>
                  <Link to=" ">  <SettingsIcon />  setting</Link>

                </div>
              </div>
            </aside>
          </div>
          <div className="col-12 col-lg-10 col-lg-8 col-sm-8  pr-0 pl-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/chat-with-astrologer" element={<Astrologer />} />
              <Route path="/call-with-astrologer" element={<Call_Astrologer />} />
              <Route path="/call-history" element={<Call_history />} />
              <Route path="/chat-history" element={<Chat_history />} />
              <Route path="/e-pooja" element={<E_Pooja />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/Deepa" element={<Deepaa />} />
              <Route path="/Jayant" element={<Jayant />} />
              <Route path="/Sarika" element={<Sarika />} />
              <Route path="/Sujata" element={<Sujata />} />
              <Route path="/call-form" element={<Call_form />} />
              <Route path="/profile" element={<Profile />} />

            </Routes>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
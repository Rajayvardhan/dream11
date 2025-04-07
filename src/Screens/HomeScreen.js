import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../globalContext";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../axiosInstance";
import footer from '../static/media/newfooter.jpeg'
import header from '../static/media/headersss.jpeg'
import slide from '../static/media/Screenshot_2025_0321_010006.jpg'
import tline from '../../src/static/media/tline.png'
import tline02 from '../../src/static/media/onlytsirt.png'
import sideteam from '../../src/static/media/sidetean.png'
import sidebar from '../../src/static/media/sidebar.jpeg'
import profile from '../static/media/otherProfile.png';
import tsirt from '../static/media/t-sirt.png';
import sideimg from '../../src/static/media/backd.png'
import profileW from '../static/media/userwite.jpg';
import profileC from '../static/media/userColor.jpg';
import profileR from '../static/media/userreal.jpg';








const HomeScreen = (props) => {
  const user = useContext(UserContext);
  let navigate = useNavigate();
  useEffect(() => {

    let mounted = true;
    if (mounted) {



    }
    pageLoad();
    return () => (mounted = false);
  }, []);
  const pageLoad = () => {
    getWallet();
  }
  var count = 1;
  const getWallet = () => {
    axiosInstance.get(`/wallet/${user.userId}`).then((res) => {
      if (res.data.data === null) {
        count = count + 1;
        if (count < 5) {
          getWallet();
        }
        if (count === 5) {
          const data1 = {
            member: user.userId,
            amount: 20,
            winningAmount: 0,
            depositeAmount: 20,
            bonus: 0,
            winningFreezAmount: 0,
            totalWinningAmount: 0,
            RefralWinningAmount: 0
          }
          axiosInstance.post("/wallet", data1).then((res) => {
          });
        }
      }
    });
  }

  const [userData, setUserData] = useState([]);


  useEffect(() => {
    // Populate table with existing data on component mount
    //renderData();
    setUserData(Profile1);

  }, []);

  const Profile1 = [
    {
      name: "Jay Khodiyar Maa...",
      sscore: "605",
      balance: "2,00,00,400",
      image: profileR
    }
  ]


  const renderData = () => {
    const existingData = JSON.parse(localStorage.getItem('userData1')) || [];
    existingData.sort((a, b) => a.id - b.id);
    setUserData(existingData);
  };
  console.log("date", " Thu Mar 28 2024 13:56:31 GMT+0530 (India Standard Time)")
  const targetDate = new Date('2024-12-31T23:59:59');
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (

    <div>
      <div className="japurLudoNav realludokingsize" >
        <div class="offcanvas offcanvas-start" tabindex="-1" data-bs-backdrop="false" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">

          {userData.map(item => (<div className="w-100 bgmyadd p-3 pb-5">
            <div class="card-footer p-0 ftmyedr text-muted  new">
              <div className="d-flex  bgmyadd02 align-items-center justify-content-between ">

                <div className="d-flex align-items-center justify-content-start " style={{ width: '66%' }}>
                  <img src={item.image} className="circle" style={{ width: '56px', marginRight: '15px' }} alt="" />
                  <h6 className="text-secondary m-0"
                    style={{ fontSize: '14px', fontWeight: '500' }}><p className='m-0 d-flex align-items-center'>
                      <p className="m-0" style={{ color: '#dadada' }}>{item.name} </p> </p>
                    <p className="m-0 pt-1" style={{ color: '#dadada', fontWeight: '400', fontSize: '12px', }}>Skill Score:{item.sscore}</p>

                  </h6>

                </div>

                <div className="d-flex align-items-center  justify-content-end " style={{ width: '29%', position: 'relative' }}>

                  <div>
                    {/* <img src={tsirt} style={{width:'92%',marginBottom:'-18px',}} alt="" /> */}
                    <h6 className="text-dark m-0 profileno"
                      style={{ fontSize: '14px', fontWeight: '600', color: 'black', position: 'absolute', zIndex: '1000000', top: '60px', right: '-4px' }}>&#8377;{item.balance}</h6>
                  </div>

                </div>

                <div className="d-flex align-items-center justify-content-end" style={{ width: '5%' }}>
                  <h6 className="text-secondary m-0"
                    style={{ fontSize: '35px', fontWeight: '200' }}><p className="m-0 ms-1 text-white">&#8250;</p></h6>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">


              </div>

            </div>
          </div>))}
          <img src={sidebar} style={{ position: 'absolute', width: '100%', zIndex: '10', top: '174px' }} className="additem" alt="" />
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </div>
        <div className="fixed">
          <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" >
            {/* <img className='shadow' src={header} style={{width:'100%'}} alt="" /> */}

          </div>
        </div>
        <div className="fixed 02">
          <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" >
            <img className='shadow' src={header} style={{ width: '100%' }} alt="" />

          </div>
        </div>


        <div onClick={() => navigate('/Support')}>
          <img style={{
            width: '100%', position: 'relative', top: "62px",
          }} className="" src={slide} alt="" />
          <div className="timing W-100 text-center">
            {/* <span className="addnumber" style={{}}>{timeLeft.minutes}m {timeLeft.seconds}s</span> */}
            {/* <span className="addnumber 02" style={{top:'600'}}>{timeLeft.minutes}m {timeLeft.seconds}s</span>
     <span className="addnumber 03" style={{top:'600'}}>{timeLeft.minutes}m {timeLeft.seconds}s</span> */}

          </div>

          {/* for slide start */}

          <div style={{ position: 'absolute', top: '259px', right: '31px', width: '91%' }} className="d-flex align-items-center justify-content-between">
            <div class=" addpedding text-start text-secondary d-flex" style={{ borderRadius: '10px' }}>
              <p className="m-0 ps-3  " style={{ fontSize: '12px', borderRadius: '10px', backgroundColor: "rgb(39, 54, 72)", color: "white" }} >4 Team</p>
              <p className="m-0 ps-2   rounded-bottom" style={{ fontSize: '12px', paddingRight: '10px', backgroundColor: "rgb(39, 54, 72)", color: "white" }}><span style={{ opacity: '70%', marginRight: '2px' }}>&bull;</span> 1 Contest</p>
            </div>
            <div className="me-3 ps-5 bg-grey">
              <span className="me-1 fw-bold" style={{ color: '#23a447', fontSize: "13px", marginRight: '20px', lineHeight: '23px', backgroundColor: "rgb(29, 43, 63)", color: "white" }}> You won &#8377;2,00,00,288 </span>
            </div>
          </div>

          {/* for slide end */}

          {/* <div style={{position:'absolute',top:'320px',right:'0px',width:'91%'}} className="d-flex align-items-center justify-content-between">
<div class=" addpedding text-start text-secondary d-flex" style={{borderRadius:'10px'}}>
   <p className="m-0 ps-3  bg-white "  style={{fontSize:'12px',borderRadius:'10px'}} >1 Team</p>
   <p className="m-0 ps-2  bg-white rounded-bottom"  style={{fontSize:'12px',paddingRight:'10px'}}><span style={{opacity:'30%',marginRight:'2px'}}>&bull;</span> 1 Contest</p>
  </div>
  <div className="me-3 ps-5 bg-white myaddgradiant">
   <span className="me-1 fw-bold" style={{color:'#23a447',fontSize:"13px",marginRight:'20px',lineHeight:'23px'}}> You won &#8377;1,00,00,128 </span> 
  </div>
</div> */}
        </div>







        <div class="button-container" onClick={() => navigate('/Players2')}>

          <img src={footer} style={{ width: '100%' }} alt="" />

        </div>

      </div>
    </div>
  );
};

export default HomeScreen;
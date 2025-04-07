import React, { useEffect } from "react";
import arrow from '../../static/media/back02.png'
import qut from '../../static/media/question.png'
import pts from '../../static/media/pts89.png'
import team01 from '../../static/media/t1Logo.png'
import team02 from '../../static/media/t2Logo.png'
import compare from '../../static/media/compare.png';
import download from '../../static/media/download.png';
import network from '../../static/media/pro.png';
import profile from '../../static/media/otherProfile.png';
import profileW from '../../static/media/userwite.jpg';
import profileC from '../../static/media/userColor.jpg';
import profileR from '../../static/media/userreal.jpg';
import leaderBoardSS from '../../static/media/leaderBoardSS.jpg';
import sideicon from '../../static/media/chatbottam.png';
import game from '../../static/media/game.png';
import winnerImg from '../../static/media/hthtg.svg';
import cardbg from '../../static/media/c3.png';
import w1Img from '../../static/media/w1.png';
import w2Img from '../../static/media/w2.png';
import flagImg from '../../static/media/SA.png';
import "./style.css";

import { useState } from "react";
import Item from "antd/lib/list/Item";
import { useNavigate } from "react-router-dom";
















const Support2 = () => {
  let navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false);

  // Listen for scroll events
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100); // Change the threshold as needed
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [userData, setUserData] = useState([]);
  const [userData2, setUserData2] = useState([]);
  const [userData3, setUserData3] = useState([]);

  useEffect(() => {
    // Populate table with existing data on component mount
    // renderData();
    // renderData2();
    // renderData3();
    setUserData(LeaderBoardA);
    setUserData2(contestSDataA);
    setUserData3(contestLDA);
  }, []);
  const renderData = () => {
    const existingData = JSON.parse(localStorage.getItem('LeaderBoard')) || [];
    existingData.sort((a, b) => a.id - b.id);
    setUserData(existingData);
  };
  const renderData2 = () => {
    const existingData = JSON.parse(localStorage.getItem('contestSData')) || [];
    existingData.sort((a, b) => a.id - b.id);
    setUserData2(existingData);
  };
  const renderData3 = () => {
    const existingData = JSON.parse(localStorage.getItem('contestLD')) || [];
    existingData.sort((a, b) => a.id - b.id);
    setUserData3(existingData);
  };

  // const [LeaderBoardA , setLearderBoardA] = useState([])

  const LeaderBoardA = [
    {
      name: "Jay Khodiyar M...",
      teamlable: "T4",
      points: "852.5",
      rank: "1",
      winningamount: "2,00,00,000",
      image: profileR
    },
    {
      name: "Jay Khodiyar M...",
      teamlable: "T1",
      points: "790.5",
      rank: "13,336",
      winningamount: "170",
      image: profileR
    },
    {
      name: "Jay Khodiyar M...",
      teamlable: "T3",
      points: "672",
      rank: "17,20,421",
      winningamount: "59",
      image: profileR
    },
    {
      name: "Jay Khodiyar M...",
      teamlable: "T2",
      points: "600",
      rank: "58,48,868",
      winningamount: "59",
      image: profileR
    },

  ]

  const contestSDataA = [
    {
      title: "RCB vs LKN",
      team1name: "Royal Challengers Bengaluru",
      team2name: "Lucknow",
      team1score: "153/10",
      team2score: "181/5",
      team1over: "19.4",
      team2over: "20",
      status: "COMPLETED",
      wintitle: "LKN beat RCB by 28 runs",
      contestwon: "1",
      mycontestnumber: "1",
      myteamsnumber: "4",
      prizewon: "2,00,00,288",
      pointlastupdate: "19.4 overs",
      prizepool: "62 Crores",
      entry: "59"
    }
  ]

  const contestLDA = [
    {
      contestname: "62,00,00,000",
      prizepool: "62 Crores",
      spots: "1,44,74,783",
      entry: "59",
      firstprize: "2 Crores",
      trophypercent: "63"
    }
  ]







  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSecond(true);
    }, 5000);
  }, []);
  // title, team1name,team2name,team1score,team2score,team1over, team2over,status,wintitle,contestwon,mycontestnumber,myteamsnumber,prizewon,pointlastupdate,prizepool,entry
  return (
    <div className="realludokingsize" data-aos="fade-left">
      {userData2.map(item => (<div style={{ height: "249px" }}>
        <div className="main_card" style={{ position: 'fixed', zIndex: "999", background: "#fff" }}
        >
          <div className="p-3 d-flex align-items-center justify-content-between" style={{ backgroundImage: "linear-gradient(to left, rgb(0, 0, 0), rgb(55 20 27))" }}>
            <div className="d-flex align-items-center justify-content-start" onClick={() => navigate('/HomeScreen')}>
              <img width={20} src={arrow} alt="" />
              <h5 style={{ fontSize: '14px', marginLeft: '20px', marginBottom: '0px', }} className=" text-white">{item.title}</h5>
              <div className="text-center ms-2  d-flex align-items-center justify-content-center" style={{
                background: "#203c2f",
                borderRadius: "20px",
                padding: "5px 16px",
                height: "22px",
              }}>
                <span class="dot" style={{ marginRight: '4px', color: "#7fcf8c" }}></span>
                <h6 className=" m-0" style={{ fontSize: '11px', color: "#7fcf8c" }}> {item.status}</h6>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-start">
              <img width={25} src={qut} alt="" />
              <img width={24} style={{ marginLeft: '15px', marginBottom: '0px', }} src={pts} alt="" />
            </div>
          </div>

          <div className="imagescard  d-flex align-items-center justify-content-between"
            style={{
              backgroundImage: `url(${cardbg})`,
              backgroundRepeat: "no-repeat",
              height: "194px",
              width: "425px",
              backgroundSize: "contain",
              backgroundPosition: "center bottom",
              position: "relative",
              transition: "opacity 0.8s ease-in",
              top:"-1px",
              left:"-1px",
            }}
          >
            <div className={`firstsection ${showSecond ? "fade-out" : "fade-in"}`}
              style={{ display: showSecond ? "none" : "flex", transition: "opacity 2s ease-out", }}>
              <div>
                <div
                  className="twoimage"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    bottom: "35px",
                    left: "34px",
                  }}
                >
                  <img
                    src={w1Img}
                    style={{
                      width: "82px",

                      transition: "opacity 0.1s ease-in-out",
                    }}
                  />
                  <img
                    src={w2Img}
                    style={{
                      width: "96px",
                      transition: "opacity 0.1s ease-in-out",
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flagImg" style={{
                  position: "absolute",
                  top: "36px",
                  left: "43%",

                }}>
                  <img
                    src={flagImg}
                    style={{
                      width: "66px",
                      height: "64px",
                      borderRadius: "50%",
                      boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                      border: "1px solid #fff"
                    }}
                  />
                </div>
                <div style={{
                  position: "absolute",
                  right: "40px",
                  top: "36px",
                }}>
                  <h6 style={{ color: "rgb(152 150 150)" }}>SA beat BAN</h6>
                  <h6 style={{ color: "#fff" }}>by 4 runs</h6>
                </div>
              </div>
            </div>
            <div className={`secondsection ${showSecond ? "fade-in" : "fade-out"}`}
              style={{
                width: "100%",
                position: "relative",
                bottom: "45px",
                margin: "0px 22px",
                opacity: showSecond ? 1 : 0,   // Controls visibility smoothly
                transform: showSecond ? "translateY(0)" : "translateY(20px)", // Moves up smoothly
                transition: "opacity 1s ease-out, transform 1s ease-out",  // Smooth transition
                display: "flex",
              }}>
              <div className="d-flex align-items-center " style={{ width: "265px" }}>
                <img width={33} src={team01} alt="" />
                <div>
                  <h6 className=" women mx-2" style={{ color: "#fff" }}>{item.team1name}</h6>
                  <h6 className=" women mt-0 mb-0 me-0" style={{ color: "#fff", marginLeft: '8px' }}>
                    <span className="mb-0" style={{ fontSize: '12px', color: "#fff", fontWeight: 'bold', }}>{item.team1score} </span>({item.team1over})</h6>
                </div>

              </div>
              <div className="d-flex align-items-center ">
                <div>
                  <h6 className=" women mx-2" style={{ color: "#fff" }}>{item.team2name}</h6>
                  <h6 className=" women m-0" style={{ color: "#fff" }}>
                    <span className="mb-0" style={{ fontSize: '12px', color: "#fff", fontWeight: 'bold', marginRight: '11px' }}>{item.team2score}</span>({item.team2over})</h6>
                </div>
                <img width={33} src={team02} alt="" />
              </div>
            </div>
            <div className="text-center  d-flex align-items-center justify-content-center" style={{
              position: "absolute",
              margin: "0 auto",
              left: "33%",
              marginTop: "68px",
            }}>
              <h6 className="" style={{ fontSize: '15px', color: 'rgb(233 233 233)', marginTop: "14px", }}>{item.wintitle}</h6>
            </div>
            <div className="text-center d-flex align-items-center justify-content-center" style={{
              position: "absolute",
              bottom: "23px",
              margin: "0 auto",
              left: "43%",
            }}>
              <h6 className="mb-0" style={{ fontSize: '12px', color: 'rgb(233 233 233)', marginTop: "7px" }}>Scorecard <i className="bi bi-chevron-double-down"></i> </h6>
            </div>
          </div>
        </div>
        <div className="fixed " >

          <div className="p-3 headerclr d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-start">
              <img width={20} src={arrow} alt="" />
              <h5 style={{ fontSize: '14px', marginLeft: '20px', marginBottom: '0px', display: 'block' }} className=" text-white">
                <span>&#8377; 20 Crores</span>
                <div>
                  <span style={{ fontSize: '12px', marginBottom: '0px', fontWeight: 'normal' }}>&#8377;59</span>
                </div>

              </h5>
            </div>
            <div className="d-flex align-items-center justify-content-start">
              <img width={25} src={qut} alt="" />
              <img width={24} style={{ marginLeft: '15px', marginBottom: '0px', }} src={pts} alt="" />
            </div>
          </div>
          <div className="p-3 pb-1 pt-0 headerclr">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className=" women m-0">Delhi Women</h6>
              <h6 className=" women m-0">Bangalore womem</h6>
            </div>
          </div>
          <div className="p-3 pb-1 pt-0 headerclr d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center ">
              <img width={33} src={team01} alt="" />
              <h6 className=" women m-0"><span style={{ fontSize: '23px', fontWeight: 'bold', marginLeft: '11px' }}>191/3</span> (20)</h6>
            </div>
            <div className="d-flex align-items-center ">
              <h6 className=" women m-0">(20)<span style={{ fontSize: '23px', fontWeight: 'bold', marginRight: '11px' }}>191/3</span></h6>
              {/* <img width={33} src={team02} alt="" /> */}

            </div>

          </div>
          <div className="text-center headerclr  d-flex align-items-center justify-content-center">
            <span class="dot" style={{ marginRight: '4px' }}></span>
            <h6 className=" m-0" style={{ fontSize: '11px', color: '#fff' }}> COMPLETED</h6>
          </div>
          <div className="text-center pb-3 headerclr pt-1  d-flex align-items-center justify-content-center">
            <h6 className=" m-0" style={{ fontSize: '12px', color: 'rgb(233 233 233)' }}>DEL-W Beat BAN-W By 1 run</h6>
          </div>
          <div className="p-2 pb-0 bg63">
            <div class="d-flex">
              <div class="line  me-4 contact">Winnings</div>
              <div class="line line02 me-4 contact">Leaderboard</div>

              <div class="line me-4 contact">Commentary</div>

              <div class="line me-4 contact">Scorecard</div>
              {/* <div class="line me-4 contact">Stats</div> */}
              {/* <div class="line me-3 contact"> My Network</div> */}



            </div>
          </div>
          <div className="p-3 pb-2  ps-0 d-flex align-items-center justify-content-between pt-0 mt-2">
            <div style={{ width: '20%', textAlign: 'center' }}>
              <img style={{ width: '23px' }} src={compare} alt="" />
              <p className="m-0" style={{ fontSize: '11px' }}>Compare</p>
            </div>
            <div style={{ width: '20%', textAlign: 'center' }}>
              <img style={{ width: '23px' }} src={download} alt="" />
              <p className="m-0" style={{ fontSize: '11px' }}>Download</p>
            </div>
            <div style={{ width: '60%', textAlign: 'center' }} className="text-end">
              <img style={{ width: '37px' }} className="addshadow" src={network} alt="" />
              <p className="m-0" style={{ fontSize: '11px' }}>My Network</p>
            </div>
          </div>
          < hr className=" mt-1 mb-0 vid" />
          <div className="p-3 pb-3 mt-1 pt-0">
            <p className="m-0 text-center" style={{ color: '#41266f', fontWeight: '400', fontSize: '12px' }}>Points last updated at 19.5 overs</p>


          </div>
          <div>
            {/* <div className="d-flex pt-1 align-items-center ps-3 pb-1   pe-3 justify-content-between ">
                  
                  <div className="d-flex align-items-center justify-content-start " style={{ width:'55%'}}>
               
               <h6 className="text-secondary m-0"
                      style={{ fontSize: '12px',fontWeight:'400'}}>All Teams(47555,955)</h6>
                  
                  </div>
                      
                  <div className="d-flex align-items-center  justify-content-end " style={{ width:'20%'}}>
               
               <h6 className="text-secondary m-0"
                      style={{ fontSize: '12px',fontWeight:'400'}}>Points</h6>
                  
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-end" style={{ width:'25%'}}>
                  <h6 className="text-secondary m-0"
                      style={{ fontSize: '12px',fontWeight:'400'}}>Rank</h6>
                  </div>
                </div> */}
          </div>



        </div>
      </div>))}



      {/* name, teamlable,points,rank,winningamount,image */}

      {userData.map(item => (<div class="card-footer p-2 ftmyedr text-muted addborder clrheader" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
        <div className="d-flex pt-1 align-items-center ps-2 pb-1   pe-2 justify-content-between ">

          <div className="d-flex align-items-center justify-content-start " style={{ width: '55%' }}>
            <img src={item.image} className="circle" style={{ width: '42px', marginRight: '5px' }} alt="" />
            <h6 className="text-secondary m-0"
              style={{ fontSize: '15px', fontWeight: '400' }}><p className='m-0 d-flex align-items-center'>
                <p className="m-0" style={{ color: 'rgb(72 72 72)' }}>{item.name} </p><p className="m-0 me-1 ms-1 bg-garyadd" style={{ fontSize: '11px', fontWeight: '400' }} >{item.teamlable}</p></p>
              {item.winningamount !== "0" && <p className="m-0" style={{ color: '#109e38', fontWeight: '400', fontSize: '10px' }}>You won &#8377;{item.winningamount}</p>}

            </h6>

          </div>

          <div className="d-flex align-items-center  justify-content-end " style={{ width: '20%', marginRight: "5px" }}>

            <h6 className="text-secondary m-0" style={{ fontSize: '14px', fontWeight: '400' }}> <p className="m-0 lpoints">{item.points}</p></h6>

          </div>

          <div className="d-flex align-items-center justify-content-end" style={{ width: '25%' }}>
            <h6 className="text-secondary m-0"
              style={{ fontSize: '13px', fontWeight: '400' }}><p className="m-0 ms-1 text-dark" style={{ fontWeight: '600' }}><span style={{ color: "GrayText" }}>#</span>{item.rank}</p></h6>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">


        </div>

      </div>))}
      <div>
        <img src={leaderBoardSS} alt="User" style={{ width: '100%', height: '100%', }} />
      </div>






      <div class="card-footer p-2 ftmyedr text-muted addborder new">
        <div className="d-flex pt-1 align-items-center ps-2 pb-1   pe-2 justify-content-between ">

          <div className="d-flex align-items-center justify-content-start " style={{ width: '55%' }}>
            <img src={profileW} className="circle" style={{ width: '37px', marginRight: '5px' }} alt="" />
            <h6 className="text-secondary m-0"
              style={{ fontSize: '12px', fontWeight: '400' }}><p className='m-0 d-flex align-items-center'>
                <p className="m-0" style={{ color: '#000' }}>Gangster Winning... </p> <p className="m-0 me-1 ms-1 bg-garyadd">T1</p></p>
              <p className="m-0" style={{ color: '#109e38', fontWeight: '400', fontSize: '10px' }}>You won &#8377;59</p>

            </h6>

          </div>

          <div className="d-flex align-items-center  justify-content-end " style={{ width: '20%' }}>

            <h6 className="text-secondary m-0" style={{ fontSize: '14px', fontWeight: '400' }}> <p className="m-0">486.5</p></h6>

          </div>

          <div className="d-flex align-items-center justify-content-end" style={{ width: '25%' }}>
            <h6 className="text-secondary m-0"
              style={{ fontSize: '13px', fontWeight: '400' }}><p className="m-0 ms-1 text-dark" style={{ fontWeight: '600' }}><span style={{ color: "GrayText" }}>#</span>1</p></h6>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">


        </div>

      </div>
      <div class="card-footer p-2 ftmyedr text-muted addborder new">
        <div className="d-flex pt-1 align-items-center ps-2 pb-1   pe-2 justify-content-between ">

          <div className="d-flex align-items-center justify-content-start " style={{ width: '55%' }}>
            <img src={profile} className="circle" style={{ width: '37px', marginRight: '5px' }} alt="" />
            <h6 className="text-secondary m-0"
              style={{ fontSize: '12px', fontWeight: '400' }}><p className='m-0 d-flex align-items-center'>
                <p className="m-0" style={{ color: '#000' }}>Gangster Winning... </p> <p className="m-0 me-1 ms-1 bg-garyadd">T1</p></p>
              <p className="m-0" style={{ color: '#109e38', fontWeight: '400', fontSize: '10px' }}>You won &#8377;59</p>

            </h6>

          </div>

          <div className="d-flex align-items-center  justify-content-end " style={{ width: '20%' }}>

            <h6 className="text-secondary m-0" style={{ fontSize: '14px', fontWeight: '400' }}> <p className="m-0">486.5</p></h6>

          </div>

          <div className="d-flex align-items-center justify-content-end" style={{ width: '25%' }}>
            <h6 className="text-secondary m-0"
              style={{ fontSize: '13px', fontWeight: '400' }}><p className="m-0 ms-1 text-dark" style={{ fontWeight: '600' }}><span style={{ color: "GrayText" }}>#</span>1</p></h6>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">


        </div>

      </div>
      <div class="card-footer p-2 ftmyedr text-muted addborder new">
        <div className="d-flex pt-1 align-items-center ps-2 pb-1   pe-2 justify-content-between ">

          <div className="d-flex align-items-center justify-content-start " style={{ width: '55%' }}>
            <img src={profile} className="circle" style={{ width: '37px', marginRight: '5px' }} alt="" />
            <h6 className="text-secondary m-0"
              style={{ fontSize: '12px', fontWeight: '400' }}><p className='m-0 d-flex align-items-center'>
                <p className="m-0" style={{ color: '#000' }}>Gangster Winning... </p> <p className="m-0 me-1 ms-1 bg-garyadd">T1</p></p>
              <p className="m-0" style={{ color: '#109e38', fontWeight: '400', fontSize: '10px' }}>You won &#8377;59</p>

            </h6>

          </div>

          <div className="d-flex align-items-center  justify-content-end " style={{ width: '20%' }}>

            <h6 className="text-secondary m-0" style={{ fontSize: '14px', fontWeight: '400' }}> <p className="m-0">486.5</p></h6>

          </div>

          <div className="d-flex align-items-center justify-content-end" style={{ width: '25%' }}>
            <h6 className="text-secondary m-0"
              style={{ fontSize: '13px', fontWeight: '400' }}><p className="m-0 ms-1 text-dark" style={{ fontWeight: '600' }}><span style={{ color: "GrayText" }}>#</span>1</p></h6>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">


        </div>

      </div>
      <div class="card-footer p-2 ftmyedr text-muted addborder new">
        <div className="d-flex pt-1 align-items-center ps-2 pb-1   pe-2 justify-content-between ">

          <div className="d-flex align-items-center justify-content-start " style={{ width: '55%' }}>
            <img src={profile} className="circle" style={{ width: '37px', marginRight: '5px' }} alt="" />
            <h6 className="text-secondary m-0"
              style={{ fontSize: '12px', fontWeight: '400' }}><p className='m-0 d-flex align-items-center'>
                <p className="m-0" style={{ color: '#000' }}>Gangster Winning... </p> <p className="m-0 me-1 ms-1 bg-garyadd">T1</p></p>
              <p className="m-0" style={{ color: '#109e38', fontWeight: '400', fontSize: '10px' }}>You won &#8377;59</p>

            </h6>

          </div>

          <div className="d-flex align-items-center  justify-content-end " style={{ width: '20%' }}>

            <h6 className="text-secondary m-0" style={{ fontSize: '14px', fontWeight: '400' }}> <p className="m-0">486.5</p></h6>

          </div>

          <div className="d-flex align-items-center justify-content-end" style={{ width: '25%' }}>
            <h6 className="text-secondary m-0"
              style={{ fontSize: '13px', fontWeight: '400' }}><p className="m-0 ms-1 text-dark" style={{ fontWeight: '600' }}><span style={{ color: "GrayText" }}>#</span>1</p></h6>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">


        </div>

      </div>
      <div class="card-footer p-2 ftmyedr text-muted addborder new">
        <div className="d-flex pt-1 align-items-center ps-2 pb-1   pe-2 justify-content-between ">

          <div className="d-flex align-items-center justify-content-start " style={{ width: '55%' }}>
            <img src={profile} className="circle" style={{ width: '37px', marginRight: '5px' }} alt="" />
            <h6 className="text-secondary m-0"
              style={{ fontSize: '12px', fontWeight: '400' }}><p className='m-0 d-flex align-items-center'>
                <p className="m-0" style={{ color: '#000' }}>Gangster Winning... </p> <p className="m-0 me-1 ms-1 bg-garyadd">T1</p></p>
              <p className="m-0" style={{ color: '#109e38', fontWeight: '400', fontSize: '10px' }}>You won &#8377;59</p>

            </h6>

          </div>

          <div className="d-flex align-items-center  justify-content-end " style={{ width: '20%' }}>

            <h6 className="text-secondary m-0" style={{ fontSize: '14px', fontWeight: '400' }}> <p className="m-0">486.5</p></h6>

          </div>

          <div className="d-flex align-items-center justify-content-end" style={{ width: '25%' }}>
            <h6 className="text-secondary m-0"
              style={{ fontSize: '13px', fontWeight: '400' }}><p className="m-0 ms-1 text-dark" style={{ fontWeight: '600' }}><span style={{ color: "GrayText" }}>#</span>1</p></h6>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">


        </div>

      </div>
      <div class="card-footer p-2 ftmyedr text-muted addborder new">
        <div className="d-flex pt-1 align-items-center ps-2 pb-1   pe-2 justify-content-between ">

          <div className="d-flex align-items-center justify-content-start " style={{ width: '55%' }}>
            <img src={profile} className="circle" style={{ width: '37px', marginRight: '5px' }} alt="" />
            <h6 className="text-secondary m-0"
              style={{ fontSize: '12px', fontWeight: '400' }}><p className='m-0 d-flex align-items-center'>
                <p className="m-0" style={{ color: '#000' }}>Gangster Winning... </p> <p className="m-0 me-1 ms-1 bg-garyadd">T1</p></p>
              <p className="m-0" style={{ color: '#109e38', fontWeight: '400', fontSize: '10px' }}>You won &#8377;59</p>

            </h6>

          </div>

          <div className="d-flex align-items-center  justify-content-end " style={{ width: '20%' }}>

            <h6 className="text-secondary m-0" style={{ fontSize: '14px', fontWeight: '400' }}> <p className="m-0">486.5</p></h6>

          </div>

          <div className="d-flex align-items-center justify-content-end" style={{ width: '25%' }}>
            <h6 className="text-secondary m-0"
              style={{ fontSize: '13px', fontWeight: '400' }}><p className="m-0 ms-1 text-dark" style={{ fontWeight: '600' }}><span style={{ color: "GrayText" }}>#</span>1</p></h6>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">


        </div>

      </div>
      <div class="card-footer p-2 ftmyedr text-muted addborder new">
        <div className="d-flex pt-1 align-items-center ps-2 pb-1   pe-2 justify-content-between ">

          <div className="d-flex align-items-center justify-content-start " style={{ width: '55%' }}>
            <img src={profile} className="circle" style={{ width: '37px', marginRight: '5px' }} alt="" />
            <h6 className="text-secondary m-0"
              style={{ fontSize: '12px', fontWeight: '400' }}><p className='m-0 d-flex align-items-center'>
                <p className="m-0" style={{ color: '#000' }}>Gangster Winning... </p> <p className="m-0 me-1 ms-1 bg-garyadd">T1</p></p>
              <p className="m-0" style={{ color: '#109e38', fontWeight: '400', fontSize: '10px' }}>You won &#8377;59</p>

            </h6>

          </div>

          <div className="d-flex align-items-center  justify-content-end " style={{ width: '20%' }}>

            <h6 className="text-secondary m-0" style={{ fontSize: '14px', fontWeight: '400' }}> <p className="m-0">486.5</p></h6>

          </div>

          <div className="d-flex align-items-center justify-content-end" style={{ width: '25%' }}>
            <h6 className="text-secondary m-0"
              style={{ fontSize: '13px', fontWeight: '400' }}><p className="m-0 ms-1 text-dark" style={{ fontWeight: '600' }}><span style={{ color: "GrayText" }}>#</span>1</p></h6>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">


        </div>

      </div>

      <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <img style={{ width: '50px', position: 'relative' }} src={sideicon} alt="" />
        <span className="addno" style={{ position: 'absolute' }}>2</span>

      </div>



      <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">

        <div class="offcanvas-body 02 small">
          <img className="w-100" data-bs-dismiss="offcanvas" aria-label="Close" src={game} alt="" />
        </div>
      </div>

    </div>

  );
};

export default Support2;
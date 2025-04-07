import React, { useEffect, useState } from "react";
import arrow from '../../static/media/back02.png'
import qut from '../../static/media/question.png'
import pts from '../../static/media/pts89.png'
import team01 from '../../static/media/t1Logo.png'
import team02 from '../../static/media/t2Logo.png'
import up from '../../static/media/updown.png'
import profils from '../../static/media/profils.png'
import sideimg from '../../static/media/backd.png'
import st from '../../static/media/1st.jpg'
import secure02 from '../../static/media/m.jpg';
import trophyji from '../../static/media/trophy.jpg';
import sign from '../../static/media/guranteed.jpg';
import cup from '../../static/media/trophy.png';
import { useNavigate } from "react-router-dom";
import profileW from '../../static/media/userwite.jpg';
import profileC from '../../static/media/userColor.jpg';
import profileR from '../../static/media/userreal.jpg';
import crore from '../../static/media/crore.png'
import winnerImg from '../../static/media/hthtg.svg';
import cardbg from '../../static/media/c3.png';
import w1Img from '../../static/media/w1.png';
import w2Img from '../../static/media/w2.png';
import flagImg from '../../static/media/SA.png';
import win from '../../static/media/win.png';
import footer from '../../static/media/footer.png';
import star from '../../static/media/star.png';
import video from '../../static/media/ani.mp4';
import "./style.css";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Support = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [userData2, setUserData2] = useState([]);
  const [userData3, setUserData3] = useState([]);

  useEffect(() => {
    // Populate table with existing data on component mount
    // renderData();
    // renderData2();
    // renderData3();
    setUserData(contestLDA);
    setUserData2(LeaderBoardA);
    setUserData3(contestSDataA);
  }, []);

  const LeaderBoardA = [
    {
      name: "Jay Khodiyar Maa...",
      teamlable: "T4",
      points: "852.5",
      rank: "1",
      winningamount: "2,00,00,000",
      image: profileR
    },
    {
      name: "Jay Khodiyar Maa...",
      teamlable: "T1",
      points: "790.5",
      rank: "13,336",
      winningamount: "170",
      image: profileR
    },
    {
      name: "Jay Khodiyar Maa...",
      teamlable: "T3",
      points: "672",
      rank: "17,20,421",
      winningamount: "59",
      image: profileR
    },
    {
      name: "Jay Khodiyar Maa...",
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
      team1name: "RCB",
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
  //  const LeaderBoardA = [
  //   { name:"JOGENDERYOUWON",
  //     teamlable:"T2",
  //     points:"733",
  //     rank:"1",
  //     winningamount:"1,00,00,000",
  //     image:profileC
  //    },
  //    { name:"JOGENDERYOUWON",
  //     teamlable:"T1",
  //     points:"619.5",
  //     rank:"10,14,759",
  //     winningamount:"59",
  //     image:profileC
  //    },
  //    { name:"JOGENDERYOUWON",
  //     teamlable:"T3",
  //     points:"572",
  //     rank:"63,13,601",
  //     winningamount:"59",
  //     image:profileC
  //    },
  //  ]

  //  const contestSDataA = [
  //   {
  //     title:"PBKS vs DC",
  //      team1name:"Punjab Kings",
  //      team2name:"Delhi Capitals",
  //      team1score:"177/6 ",
  //      team2score:"174/9",
  //      team1over:"19.2",
  //       team2over:"20",
  //       status:"COMPLETED",
  //       wintitle:"PBKS beat DC by 4 wickets",
  //       contestwon:"1",
  //       mycontestnumber:"1",
  //       myteamsnumber:"3",
  //       prizewon:"1,00,00,118",
  //       pointlastupdate:"19.2 overs",
  //       prizepool:"71 Crores",
  //       entry:"59"
  //   }
  // ]

  //  const contestLDA = [
  //    {
  //      contestname:"71,00,00,000",
  //       prizepool:"71 Crores",
  //       spots:"1,55,16,829",
  //       entry:"59",
  //       firstprize:"1 Crore",
  //       trophypercent:"63"
  //    }
  //  ]

  const renderData = () => {
    const existingData = JSON.parse(localStorage.getItem('contestLD')) || [];
    existingData.sort((a, b) => a.id - b.id);
    setUserData(existingData);
  };
  const renderData2 = () => {
    const existingData = JSON.parse(localStorage.getItem('LeaderBoard')) || [];
    existingData.sort((a, b) => a.id - b.id);
    setUserData2(existingData);
  };
  const renderData3 = () => {
    const existingData = JSON.parse(localStorage.getItem('contestSData')) || [];
    existingData.sort((a, b) => a.id - b.id);
    setUserData3(existingData);
  };

  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSecond(true);
    }, 5000);
  }, []);

  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(false), 7000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="videoani" style={{
        position: "absolute",
        zIndex: "9999",
        top: "32%",
      }}>
        {showVideo && (
          <iframe src="https://lottie.host/embed/02c398b9-674f-4421-ba45-642b517012cd/CkKL7Q42ZP.lottie" width={420} height={420}></iframe>
        )}
      </div>
      <div className="realludokingsize" data-aos="fade-left">
        {userData3.map(item => (<div>
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
                top: "-1px",
                left:"-1px"
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
                  opacity: showSecond ? 1 : 0,
                  transform: showSecond ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 1s ease-out, transform 1s ease-out",
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
                <h6 className="" style={{ fontSize: '13px', color: '#c9c6c6', marginTop: "4px", }}>{item.wintitle}</h6>
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

          <div className="px-2 ps-0 pb-0 bg63" style={{ paddingTop: "247px", position: "relative", width:"420px" }}>
            {/* <div class="d-flex p-1 pb-0 px-2">
              <div class="line line02 me-4 contact">My Contests ({item.mycontestnumber})</div>
              <div class="line me-4 contact">My Teams ({item.myteamsnumber})</div>

              <div class="line me-4 contact">Commentary</div>

              <div class="line me-4 contact">Scorecard</div>
              {/* {/* <div class="line me-4 contact">Stats</div>  
            {/* {/* <div class="line me-3 contact"> My Network</div>  
          </div>
          <hr className="me-4 ms-4 mt-0 mb-0 vid" /> */}

            {/* <div className="p-3 mt-2 pb-0">
              <div class="demo-preview">
                <div class="label label-default label-pill">In Winning Zone</div>
                <div class="label label-default label-pill">Prize Pool <img src={up} style={{ width: "11px", marginLeft: '2px' }} alt="" /></div>
                <div class="label label-default label-pill">Entry  <img src={up} style={{ width: "11px", marginLeft: '2px' }} alt="" /></div>
                <div class="label label-default label-pill">Spots <img src={up} style={{ width: "11px", marginLeft: '2px' }} alt="" /></div>
              </div>
              <hr className="mt-3 ms-3" style={{width: "73%", height: "auto", color:"#ccc"}} />
            </div> */}
            <div className="position-fixed" style={{ zIndex: "999", background: "#fff", }}>
              <div class="p-0 pb-0" style={{ width: "420px", }}>
                <div className="d-flex justify-content-between px-2 pt-2">
                  <div class="line line02 me-2 contact">My Contests ({item.mycontestnumber})</div>
                  <div class="line me-2 contact">My Teams ({item.myteamsnumber})</div>
                  <div class="line me-2 contact">Commentary</div>
                  <div class="line me-2 contact">Scorecard</div>
                </div>
                <hr className="me-0 ms-0 mt-0 mb-0 vid" />

                <div className="p-3 mt-2 pb-0">
                  <div class="demo-preview">
                    <div class="label label-default label-pill">In Winning Zone</div>
                    <div class="label label-default label-pill">Prize Pool <img src={up} style={{ width: "11px", marginLeft: '2px' }} alt="" /></div>
                    <div class="label label-default label-pill">Entry  <img src={up} style={{ width: "11px", marginLeft: '2px' }} alt="" /></div>
                    <div class="label label-default label-pill">Spots <img src={up} style={{ width: "11px", marginLeft: '2px' }} alt="" /></div>
                  </div>
                  <hr className="mt-3 ms-3" style={{ width: "92%", height: "auto", color: "#ccc" }} />
                </div>
              </div>
            </div>
            <div className="p-3 pb-2 pt-0 ps-2" style={{ marginTop: "121px" }}>
              <div
                style={{
                  backgroundImage: `url(${winnerImg})`,
                  width: "400px",
                  height: "140px",
                  backgroundRepeat: "no-repeat",
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "22px",
                    width: "-webkit-fill-available",
                    left: "31px",
                  }}
                >
                  {/* <p className="mb-2">You have won in 1 contest!</p> */}
                  <p className="m-0" style={{ color: 'rgb(148 148 148)', fontWeight: '400', fontSize: '11px' }}>You have won in {item.contestwon} contest!</p>

                  {/* <h2 className="mb-2" style={{ color: "rgb(16, 158, 56)", fontSize: "25px" }}>₹49</h2> */}
                  <div className="d-flex align-items-center  mb-3 mt-2  justify-content-start pt-1">
                    {/* <img style={{ width: '18px', marginRight: '5px' }} src={cup} alt="" /> */}
                    <h6 className=" m-0"
                      style={{ fontSize: '21px', fontWeight: '600', color: '#06a240' }}>&#8377;{item.prizewon}</h6>


                  </div>
                  <a style={{
                    fontWeight: "600",
                    fontSize: "12px",
                  }}>View breakup <i class="bi bi-chevron-right ms-2"></i></a>
                </div>
                <div className="p-3 py-1" style={{
                  backgroundColor: "#e7f2f7", position: "relative",
                  top: "117px",
                  width: "370px",
                  marginLeft: "16px",
                  borderBottomLeftRadius: "17px", borderBottomRightRadius: "17px", borderBottom:"1px solid #e1e1e1", }}>
                <div className="text-dark fw-medium" style={{ fontSize: "12px" }}>Keep Winning safe. We never ask for OTP.</div>
              </div>

            </div>
            {/* Winning Card */}
            <div className="pe-3 pb-2 mt-4 pt-0" style={{ paddingLeft: "17px" }} onClick={() => navigate('/Support2')}>
              <div className="border shadow-sm rounded-4" style={{ width: "369px" }}>
                <div className="card-header px-2 d-flex justify-content-between">
                  <div>
                    <span className="text-muted fw-semibold d-flex align-items-center p-2">
                      <i class="bi bi-patch-check-fill me-1"></i> Guaranteed <span className="fst-italic fw-semibold">&nbsp;<img src={star} className="img-fluid" width={35} /></span>
                    </span>
                    <h4 className="fw-bold text-muted ps-2 mb-0" style={{ fontSize: "14px" }}>₹35 Crores</h4>
                  </div>
                  <div className="rightSide p-2">
                    <span className="text-muted fw-normal">Entry </span>
                    <p className="text-secondary fw-semibold mb-0" style={{ fontSize: "16px" }}>₹49</p>

                  </div>


                </div>
                <div className="card-body">

                  <img src={win} className="img-fluid" />
                </div>
                <div className="mt-2" style={{ borderBottom: "1px solid #f4f7f5" }}>
                  <img src={footer} className="img-fluid" />
                </div>
                <div className="p-3 py-1" style={{ backgroundColor: "rgb(255 251 125 / 0%)", backgroundImage: "linear-gradient(90deg, rgb(255 251 125 / 23%) 0%, rgb(255, 255, 255) 81%)", borderBottomLeftRadius: "17px", borderBottomRightRadius: "17px" }}>
                  <div className="mt-2 d-flex align-items-center justify-content-between">
                    <div><span className="fw-normal" style={{ fontWeight: "500" }}>Gangste...</span>
                      <span className="ms-2 badge text-dark rounded-5" style={{ backgroundColor: "#eff3fc" }}>T1</span>

                    </div>

                    <div className="text-muted fw-semibold" >760</div>
                    <div className="fw-normal">#53,75,975</div>
                  </div>
                  <div className="text-success fw-medium" style={{ fontSize: "12px" }}>You've won ₹49</div>
                </div>
              </div>
            </div>
          </div>
        </div>



        </div>))}


      {/* <div class="card-header 02 mb-2 text-start  d-flex align-items-center justify-content-start">
          <p className="m-0" style={{ color: '#000', fontWeight: '500' }}>Winnings Breakup </p>
          <img style={{ width: "10px", transform: 'rotate(180deg)', marginLeft: '7px' }} src={sideimg} alt="" />

        </div> */}
      {/* <div>
          <img src={profils} style={{ width: "100%", height: "100%" }} alt="" />

        </div> */}
      {/* <div className="mb-5 pb-5" style={{ paddingTop: '26px' }} onClick={() => navigate('/Support2')}>
          <div className="p-3 pb-5 mb-5 " style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-24px', left: '13px', right: '14px' }}>
              <img style={{ width: '100%' }} src={crore} alt="" />

            </div>
            <div class="card shadowmy text-center" >


              {/* contestname, prizepool,spots,entry,firstprize,trophypercent 

              {userData.map(item => (<div>
                <div className="d-flex align-items-center p-1   ">
                  <img style={{width:'20px'}} src={sign} alt="" />
                  <p className="m-0 ms-1 text-dark" style={{ fontWeight: '600' }}>Rs.{item.contestname}</p>
                </div>
                <hr className="cardline m-2 mt-0 mb-0" />
                <div className="d-flex pt-3 align-items-center ps-2 pe-2 justify-content-between ">

                  <div className="d-flex align-items-center justify-content-start " style={{ width: '33.33%' }}>

                    <h6 className="text-secondary m-0"
                      style={{ fontSize: '12px', fontWeight: '400' }}>Prize pool</h6>

                  </div>

                  <div className="d-flex align-items-center  justify-content-center " style={{ width: '33.33%' }}>

                    <h6 className="text-secondary m-0"
                      style={{ fontSize: '12px', fontWeight: '400' }}>Spots</h6>

                  </div>

                  <div className="d-flex align-items-center justify-content-end" style={{ width: '33.33%' }}>
                    <h6 className="text-secondary m-0"
                      style={{ fontSize: '12px', fontWeight: '400' }}>Entry</h6>
                  </div>
                </div>
                <div className="d-flex mb-3 pt-1 align-items-center ps-2 pe-2 justify-content-between ">

                  <div className="d-flex align-items-center  justify-content-start " style={{ width: '33.33%' }}>

                    <h6 className="text-dark m-0"
                      style={{ fontSize: '13px', fontWeight: '600', color: 'black' }}>&#8377;{item.prizepool}</h6>

                  </div>

                  <div className="d-flex align-items-center  justify-content-center " style={{ width: '33.33%' }}>

                    <h6 className="text-secondary m-0"
                      style={{ fontSize: '13px', fontWeight: '600' }}>{item.spots}    </h6>

                  </div>

                  <div className="d-flex align-items-center  justify-content-end" style={{ width: '33.33%' }}>
                    <h6 className="text-secondary m-0"
                      style={{ fontSize: '13px', fontWeight: '600' }}>&#8377;{item.entry}</h6>
                  </div>
                </div>
                <div class="card-header 02 p-2 pt-1 pb-1 text-start">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center w-100'>
                      <p className='m-0 d-flex align-items-center'><img style={{ width: '20px' }} className="me-1" src={st} alt="" /><p className="m-0">&#8377;{item.firstprize} Crores</p></p>
                      <p className='m-0 ms-2 d-flex align-items-center'><img style={{ width: '24px' }} className=" me-1" src={trophyji} alt="" /> <p className="m-0">{item.trophypercent}%</p> </p>
                      <p className='m-0 ms-2 d-flex align-items-center'><img style={{ width: '22px' }} className=" me-1" src={secure02} alt="" />Up to 20</p>


                    </div>
                    <div className="d-flex align-items-center ">
                      <img style={{ width: '20px' }} src={sign} alt="" />
                      <p className="m-0 ms-1">Guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>))}

              //name, teamlable,points,rank,winningamount
              {userData2.map(item => (<div class="card-footer p-2 ftmyedr text-muted footerclradd addborder">
                <div className="d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center w-100'>
                    <p className='m-0 d-flex align-items-center'><p className="m-0" style={{ color: '#000', }}>{item.name} </p> <p className="m-0 me-1 ms-1 bg-garyadd" >{item.teamlable}</p></p>
                    <p className='m-0 ms-2 d-flex align-items-center '> <p className="m-0 tpoint" >{item.points}</p> </p>


                  </div>
                  <div className="d-flex align-items-center ">
                    <img style={{width:'20px'}} src={sign} alt="" />
                    <p className="m-0 ms-1 text-dark" style={{ fontWeight: '600' }}>#{item.rank}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center w-100'>
                    {item.winningamount !== "0" && <p className="m-0" style={{ color: '#109e38', fontWeight: '500', fontSize: '13px' }}>You won &#8377;{item.winningamount}</p>}


                  </div>

                </div>
              </div>))}

            </div>
          </div>
        </div> */}

    </div >
    </>
  );
};

export default Support;
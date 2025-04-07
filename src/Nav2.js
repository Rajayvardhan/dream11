import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Layout, Menu, Dropdown} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import {environment} from './Environment';
import Icon from '@ant-design/icons';
import Hamburger from 'hamburger-react';
import {useState} from 'react';
import manue from './static/media/menu.png'
import imglogo from "./static/media/avatar-f-2.c30ca059e863004ac5f7e22dcb211721.svg"
import wollet from "./static/media/wallet.png"
import refresh from "./images/ludo/loader.png"

// import mainlogo from'./static/media/avatar-f-2.c30ca059e863004ac5f7e22dcb211721.svg',

import {useNavigate} from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';

const {Header} = Layout;

export const Nav2 = props => {
  let navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
    }
    return () => (mounted = false);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    // navigate(`${environment.url.AUTH_URL}`, { replace: true });
    // navigate('/LoginScreen', { replace: true });
    // window.location.href=`${environment.url.AUTH_URL}`;
    window.location.href = `/`;
  };

  const myaccount = () => {
    navigate('/MyAccount', {replace: true});
  };

  function addMonths(date1, months) {
    date1.setMonth(date1.getMonth() + months);

    return date1;
  }



  document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
      if (event.target.classList.contains('dropdown-toggle')) {
        event.target.classList.toggle('toggle-change');
      } else if (
        event.target.parentElement.classList.contains('dropdown-toggle')
      ) {
        event.target.parentElement.classList.toggle('toggle-change');
      }
    });
  });

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="realludokingsize">
      {/* <header className="header">
        
        <div className="header_in">
     
          <button type="button" className={`toggle ${isSidebarVisible ? 'toggle' : ''}`} onClick={handleToggleClick}>
            <span className={`${isSidebarVisible ? 'toggle' : ''}`}></span>
          </button>
        </div>
      </header> */}

<div class="fixed">
    <div class="bg-danger py-2 text-white w-100 text-center">Commission: 5% ◉ Referral: 2% For All Games</div>
    <div
      class="w-100 bg-white shadow-sm text-white py-2 pe-2 ps-2 d-flex d-sm-flex align-items-center align-items-sm-center justify-content-between justify-content-sm-between"
      >
      <div className='d-flex  align-items-center'>
        {/* <button type="button" class="bg-white border-0 btn btn-light"><svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16" width="24" height="24" fill="currentColor">
            <path fill-rule="evenodd"
              d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z">
            </path>
          </svg></button> */}
              <div className='ram01'>
         <a className={`toggle ${isSidebarVisible ? 'toggle' : ''}`} onClick={handleToggleClick}>
          <img className='menuimg01' src={manue} alt="menuicon" />
          </a>
         </div>
          <a class="text-decoration-none text-white fw-semibold fs-4" href="#/"><span
            class="text-white"><img src={imglogo} alt="logo"
              height="40" className=' mainlogo'/></span></a></div>
      <div class="row">
        <div class="p-0 col"> <button type="button"
            class="h-100 flex-shrink-0 flex-grow-1 flex-nowrap  d-flex align-items-center btn btn-primary btn-sm " onClick={()=>handleToggleClick()}>
            Refresh <img className={`loader01 ${isSidebarVisible ? 'rotate' : ''}`} onClick={()=>handleToggleClick()} src={refresh} alt="" />
         </button></div>
        <div class="col"><a class="text-decoration-none text-white " href="#/wallet">
            <div class="py-1 bg-white border px-2 text-dark d-flex align-items-center rounded-2"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="green"
                class="me-2">
                <path
                  d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z">
                </path>
                <path
                  d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z">
                </path>
              </svg><strong>0</strong></div>
          </a></div>
      </div>
    </div>
  </div>
  <div class="fixed 02">
    <div class="bgclr py-2 text-white w-100 text-center">Commission: 5% ◉ Referral: 2% For All Games</div>
    <div
      class="w-100 bg-white shadow-sm text-white py-2 pe-2 ps-2 d-flex d-sm-flex align-items-center align-items-sm-center justify-content-between justify-content-sm-between"
      >
      <div className='d-flex  align-items-center'>
        {/* <button type="button" class="bg-white border-0 btn btn-light"><svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16" width="24" height="24" fill="currentColor">
            <path fill-rule="evenodd"
              d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z">
            </path>
          </svg></button> */}
              <div className='ram01'>
         <a className={`toggle ${isSidebarVisible ? 'toggle' : ''}`} onClick={handleToggleClick}>
          <img className='menuimg01' src={manue} alt="menuicon" />
          </a>
         </div>
          <a class="text-decoration-none text-white fw-semibold fs-4" href="#/"><span
            class="text-white"><img src={imglogo} alt="logo"
              height="40" className=' mainlogo'/></span></a></div>
      <div class="row">
        <div class="p-0 d-flex raju15"><button type="button"
            class="h-100 flex-shrink-0 flex-grow-1 flex-nowrap  d-flex align-items-center btn btn-outline-primary btn-sm">
            
            <a href='https://play.google.com/store/apps/details?id=com.realludoking&pcampaignid=web_share'>
            <span class="flex-nowrap flex-shrink-0 ">Install App</span>

            </a>
         </button></div>
        <div class="col"><a class="text-decoration-none text-white " href="#/wallet">
            <div class="py-1 bg-white border px-2 text-dark d-flex align-items-center rounded-2">
          <img className='wllet' src={wollet} alt="" srcset="" />
            <strong>0</strong></div>
          </a></div>
      </div>
    </div>
  </div>
  
  

      <div
          className={`sidebar ${isSidebarVisible ? 'sidebarshow' : ''}` }
          id="sidebar">
          <div className="bg-dark offcanvas-header">
            <div className="text-white fw-bold offcanvas-title h5">
              Real Ludo King
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={handleToggleClick}></button>
          </div>
          <div className="d-flex flex-column align-items-stretch justify-content-start p-0 offcanvas-body">
            <div className="d-flex align-items-center justify-content-between p-4">
              <div className="fs-1 fw-bold text-start d-flex align-items-center justify-content-start">
                <div className="hstack gap-2">
                  <div className="m-0 me-1 d-flex align-items-center justify-content-start">
                    <p className="m-0">Hey,</p>
                    <p className="m-0">kamal..</p>
                    {/* <p
                      className="text-truncate m-0 me-2"
                      style={{maxWidth: '125px'}}>
                      &nbsp;
                    </p> */}
                    {/* <img src="./static/media/avatar-f-2.c30ca059e863004ac5f7e22dcb211721.svg" alt=""  width="30" height="30"/> */}
                    <div><a href="#/profile"><div  class="rounded-circle"><img width="40" height="40" src="./static/media/avatar-f-2.c30ca059e863004ac5f7e22dcb211721.svg" alt="avatar"/></div></a></div>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-stretch justify-content-start">
              <a
                className="text-start text-decoration-none bg-light p-4 text-dark fs-2 text-capitalize d-flex align-items-center justify-content-between"
                href="#/LoginScreen"
                onClick={handleToggleClick}>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="hstack gap-3">
                    {/* {/ <img src="/static/media/play.2f22f88bac8acca85f6a.webp" height="36px" alt="play" /> /} */}
                    <p className="p-0 m-0 text-capitalize">play</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="m-0 p-0 d-flex align-items-center justify-content-center">
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </a>
              <a
                className="text-start text-decoration-none bg-white p-4 text-dark fs-2 text-capitalize d-flex align-items-center justify-content-between"
                href="#/LoginScreen"
                onClick={handleToggleClick}>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="hstack gap-3">
                    {/* {/ <img src="/static/media/play.2f22f88bac8acca85f6a.webp" height="36px" alt="play" /> /} */}
                    <p className="p-0 m-0 text-capitalize">Wallet</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="m-0 p-0 d-flex align-items-center justify-content-center">
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </a>
              <a
                className="text-start text-decoration-none bg-light p-4 text-dark fs-2 text-capitalize d-flex align-items-center justify-content-between"
                href="#/LoginScreen"
                onClick={handleToggleClick}>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="hstack gap-3">
                    {/* {/ <img src="/static/media/liveChatOffcanvas.4db8ac024d1cc6d424a3.webp" height="36px" alt="support icon" /> /} */}
                    <p className="p-0 m-0 text-capitalize">History</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="m-0 p-0 d-flex align-items-center justify-content-center">
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </a>
              <a
                className="text-start text-decoration-none bg-light p-4 text-dark fs-2 text-capitalize d-flex align-items-center justify-content-between"
                href="#/LoginScreen"
                onClick={handleToggleClick}>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="hstack gap-3">
                    {/* {/ <img src="/static/media/liveChatOffcanvas.4db8ac024d1cc6d424a3.webp" height="36px" alt="support icon" /> /} */}
                    <p className="p-0 m-0 text-capitalize">Profile</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="m-0 p-0 d-flex align-items-center justify-content-center">
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </a>
              <a
                className="text-start text-decoration-none bg-light p-4 text-dark fs-2 text-capitalize d-flex align-items-center justify-content-between"
                href="#/LoginScreen"
                onClick={handleToggleClick}>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="hstack gap-3">
                    {/* {/ <img src="/static/media/liveChatOffcanvas.4db8ac024d1cc6d424a3.webp" height="36px" alt="support icon" /> /} */}
                    <p className="p-0 m-0 text-capitalize">Refere & Earn</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="m-0 p-0 d-flex align-items-center justify-content-center">
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </a>


          


     



      


              <a
                className="text-start text-decoration-none bg-whitebg-light p-4 text-dark fs-2 text-capitalize d-flex align-items-center justify-content-between"
                href="#/terms"
                onClick={handleToggleClick}>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="hstack gap-3 rajuji">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="36"
                      height="36"
                      fill="currentColor">
                      <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path>
                      <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"></path>
                    </svg> */}
                    <p className="p-0 m-0 text-capitalize">legal terms</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="m-0 p-0 d-flex align-items-center justify-content-center">
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

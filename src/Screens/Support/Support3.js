import React from "react";
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












const Support3 = () => {


return (
<div className="realludokingsize">
  <div className="p-3 headerclr d-flex align-items-center justify-content-between">
  <div className="d-flex align-items-center justify-content-start">
    <img width={20} src={arrow} alt="" />
    <h5 style={{fontSize:'14px', marginLeft:'20px',marginBottom:'0px',}} className=" text-white">MI-W  <span style={{fontSize:'11px',}}>VS</span>  GUJ_W</h5>
  </div>
  <div className="d-flex align-items-center justify-content-start">
    <img width={25} src={qut} alt="" />
    <img width={24} style={{ marginLeft:'15px',marginBottom:'0px',}} src={pts} alt="" />
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
        <h6 className=" women m-0"><span style={{fontSize:'23px',fontWeight:'bold',marginLeft:'11px' }}>191/3</span> (20)</h6>
      </div>
      <div className="d-flex align-items-center ">
        <h6 className=" women m-0">(20)<span style={{fontSize:'23px',fontWeight:'bold',marginRight:'11px' }}>191/3</span></h6>
        <img width={33} src={team02} alt="" />

      </div>
   
  </div>
  <div className="text-center headerclr  d-flex align-items-center justify-content-center">
        <span class="dot" style={{marginRight:'4px'}}></span>
        <h6 className=" m-0" style={{fontSize:'11px', color:'#fff'}}> COMPLETED</h6>
      </div>
      <div className="text-center pb-3 headerclr pt-1  d-flex align-items-center justify-content-center">
        <h6 className=" m-0" style={{fontSize:'12px', color:'rgb(233 233 233)'}}>DEL-W Beat BAN-W By 1 run</h6>
      </div>
      <div className="p-2 pb-0 bg63">
<div class="d-flex">
<div class="line line02 me-4 contact">My Contests (1)</div>
<div class="line me-4 contact">My Teams (1)</div>

<div class="line me-4 contact">Commentary</div>

<div class="line me-4 contact">Scorecard</div>
{/* <div class="line me-4 contact">Stats</div> */}
{/* <div class="line me-3 contact"> My Network</div> */}



</div>
</div>
<div className="p-3 mt-2">
<div class="demo-preview">
<div class="label label-default label-pill">In Winning Zone</div>
<div class="label label-default label-pill">Prize Pool <img src={up} style={{width:"11px",marginLeft:'2px'}} alt="" /></div>
<div class="label label-default label-pill">Entry  <img src={up} style={{width:"11px",marginLeft:'2px'}} alt="" /></div>
<div class="label label-default label-pill">Spots <img src={up} style={{width:"11px",marginLeft:'2px'}} alt="" /></div>


</div>
</div>
< hr className="me-4 ms-4 mt-1 mb-0 vid" />
<div className="p-3 pb-2 mt-2 pt-0">
<p  className="m-0" style={{color:'#109e38',fontWeight:'500',fontSize:'13px'}}>Congratulations! You've won in 1 contest.</p>
<div className="d-flex align-items-center  justify-content-start pt-1">
             <img style={{width:'18px',marginRight:'5px'}} src={cup} alt="" />
             <h6 className="text-dark m-0"
                    style={{ fontSize: '18px',fontWeight:'600',color:'black'}}>&#8377;59</h6>
                
                </div>
              
</div>

<div class="card-header 02 mb-2 text-start  d-flex align-items-center justify-content-start">
<p  className="m-0" style={{color:'#000',fontWeight:'500'}}>Winnings Breakup </p>
<img style={{width:"10px",transform:'rotate(180deg)',marginLeft:'7px'}} src={sideimg} alt="" />

                </div>
<div className="p-3 pb-0 pt-0">
<div class="alert alert-primary m-0 myaddingbg  d-flex align-items-center justify-content-between" role="alert">
  <div className="d-flex  align-items-center">
  <img src={profils} style={{width:"60px",marginLeft:'2px'}} alt="" />
Compare ranks with your network (3) 
  </div>
<div>
<img style={{width:"10px",transform:'rotate(180deg)',marginRight:'5px'}} src={sideimg} alt="" />
</div>
</div>
</div>
<div className="mb-5 pb-5">
<div className="p-3 pb-5 mb-5">
<div class="card shadowmy text-center">
<div className="d-flex align-items-center p-1   ">
                    {/* <img style={{width:'20px'}} src={sign} alt="" /> */}
                    <p  className="m-0 ms-1 text-dark" style={{fontWeight:'600'}}>Rs.39,65,656</p>
                  </div>
                  <hr className="cardline m-2 mt-0 mb-0" />
                  <div className="d-flex pt-3 align-items-center ps-2 pe-2 justify-content-between ">
                
                <div className="d-flex align-items-center justify-content-start " style={{ width:'33.33%'}}>
             
             <h6 className="text-secondary m-0"
                    style={{ fontSize: '12px',fontWeight:'400'}}>Prize pool</h6>
                
                </div>
                    
                <div className="d-flex align-items-center  justify-content-center " style={{ width:'33.33%'}}>
             
             <h6 className="text-secondary m-0"
                    style={{ fontSize: '12px',fontWeight:'400'}}>Spots</h6>
                
                </div>
                
                <div className="d-flex align-items-center justify-content-end" style={{ width:'33.33%'}}>
                <h6 className="text-secondary m-0"
                    style={{ fontSize: '12px',fontWeight:'400'}}>Entry</h6>
                </div>
              </div>
              <div className="d-flex mb-3 pt-1 align-items-center ps-2 pe-2 justify-content-between ">
                
                <div className="d-flex align-items-center  justify-content-start " style={{ width:'33.33%'}}>
             
             <h6 className="text-dark m-0"
                    style={{ fontSize: '13px',fontWeight:'600',color:'black'}}>&#8377;21 Crores</h6>
                
                </div>
                    
                <div className="d-flex align-items-center  justify-content-center " style={{ width:'33.33%'}}>
             
             <h6 className="text-secondary m-0"
                    style={{ fontSize: '13px',fontWeight:'600'}}>53,129    </h6>
                
                </div>
                
                <div className="d-flex align-items-center  justify-content-end" style={{ width:'33.33%'}}>
                <h6 className="text-secondary m-0"
                    style={{ fontSize: '13px',fontWeight:'600'}}>&#8377;59</h6>
                </div>
              </div>
  <div class="card-header 02 p-2 pt-1 pb-1 text-start">
 <div className="d-flex align-items-center justify-content-between">
 <div className='d-flex align-items-center w-100'> 
                    <p className='m-0 d-flex align-items-center'><img style={{width:'20px'}} className="me-1" src={st} alt="" /><p  className="m-0">&#8377;1.50 Crores</p></p>
                    <p className='m-0 ms-2 d-flex align-items-center'><img style={{width:'24px'}}  className=" me-1" src={trophyji} alt="" /> <p className="m-0">50%</p> </p>
                    <p className='m-0 ms-2 d-flex align-items-center'><img style={{width:'22px'}} className=" me-1" src={secure02} alt="" /></p>
                  

                  </div>
                  <div className="d-flex align-items-center ">
                    <img style={{width:'20px'}} src={sign} alt="" />
                    <p  className="m-0 ms-1">Guaranteed</p>
                  </div>
 </div>
  </div>
 
  <div class="card-footer p-2 ftmyedr text-muted">
  <div className="d-flex align-items-center justify-content-between">
 <div className='d-flex align-items-center w-100'> 
                    <p className='m-0 d-flex align-items-center'><p  className="m-0" style={{color:'#000'}}>Gangster Winning... </p> <p className="m-0 me-1 ms-1 bg-garyadd">T1</p></p>
                    <p className='m-0 ms-2 d-flex align-items-center'> <p className="m-0">486.5</p> </p>
                  

                  </div>
                  <div className="d-flex align-items-center ">
                    {/* <img style={{width:'20px'}} src={sign} alt="" /> */}
                    <p  className="m-0 ms-1 text-dark" style={{fontWeight:'600'}}>#39,65,656</p>
                  </div>
 </div>
 <div className="d-flex align-items-center justify-content-between">
 <div className='d-flex align-items-center w-100'> 
 <p  className="m-0" style={{color:'#109e38',fontWeight:'500',fontSize:'13px'}}>You won &#8377;59</p>
                  

                  </div>
                
 </div>
  </div>
</div>
</div>
</div>

</div>

);
};

export default Support3;
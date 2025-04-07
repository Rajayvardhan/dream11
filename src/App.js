import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes, HashRouter } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import { useJwt, decodeToken } from "react-jwt";
import { UserContext } from "./globalContext";

import { Footers } from "./Footers";
import HomeScreen from "./Screens/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";



import Support from "./Screens/Support/Support";



import Support2 from "./Screens/Support/Support2";
import Support3 from "./Screens/Support/Support3";
import Players from "./Screens/Form/players";
import Players2 from "./Screens/Form/players2";
import Players3 from "./Screens/Form/players3";
import Players4 from "./Screens/Form/players4";
import Players5 from "./Screens/Form/players5";
import Players6 from "./Screens/Form/players6";

require("./css/App-dev.css");
require("./css/responsive.css");
require("./Screens/login.css");

function App() {
const [waitstate, setWaitstate] = useState(true);
const [authToken, setAuthToken] = useState(null);
// const { authToken, isExpired } = useJwt(JSON.parse(localStorage.getItem("authtoken")));

useEffect(() => {

if (
localStorage.getItem("authtoken") !== null &&
localStorage.getItem("authtoken") !== undefined
) {

const myDecodedToken = decodeToken(JSON.parse(localStorage.getItem("authtoken")));
if(myDecodedToken.role===undefined){
myDecodedToken.role="test"
setAuthToken(myDecodedToken);
}
else{
setAuthToken(myDecodedToken);
}

setWaitstate(false);
localStorage.setItem("username", JSON.parse(localStorage.getItem("authtoken")).name)
} else {
setWaitstate(false);
setAuthToken(null);
// window.location.href = "/";
//navigate("/LoginScreen", { replace: true });

}
}, []);
const validation = () => {

const myDecodedToken = decodeToken(JSON.parse(localStorage.getItem("authtoken")));
setAuthToken(myDecodedToken);
}


return (
<HashRouter>
  <div className="App">
    {!waitstate && (
    <UserContext.Provider value={ authToken !==null ? { userId: authToken._id===undefined ? 1 : authToken._id,
       userName:authToken.name===undefined ? 1 : authToken.name, memberId: authToken.id===undefined ? 1 : authToken.id, 
       role:authToken.role===undefined ? 1 : authToken.role.name, 
       mobile: authToken.mobile===undefined ? 1 : authToken.mobile,
      memberReferCode: authToken.memberReferCode===undefined ? 1 : authToken.memberReferCode,
      ReferCode: authToken.referCode===undefined ? 1 : authToken.referCode,
       roleId:authToken.role===undefined ? 1 : authToken.role._id,
        registerDate: authToken.registerDate===undefined ? 1 :authToken.registerDate,
       config: { dateFormat: "DD-MMM-YYYY" , datetimeFormat: "DD-MMM-YYYY HH:mm" ,
      datetimeFormatWithoutYear: "DD-MMM HH:mm" , datetimeSecondFormat: "DD-MMM-YYYY HH:mm:ss" ,
      datetimeSecondFormatAMPM: "DD-MMM-YYYY hh:mm:ss A" , timeFormat: "hh:mm:ss A" , } } : { userId: null, config: {
      dateFormat: "DD-MMM-YYYY" , datetimeFormat: "DD-MMM-YYYY HH:mm" , datetimeFormatWithoutYear: "DD-MMM HH:mm" ,
      datetimeSecondFormat: "DD-MMM-YYYY HH:mm:ss" , datetimeSecondFormatAMPM: "DD-MMM-YYYY hh:mm:ss A" ,
      timeFormat: "hh:mm:ss A" , } } }>
      <Layout className="layout">
        {/* {(authToken== undefined) && (authToken== null) &&
        <Nav2 />} */}
        {/* {(authToken && authToken.id !== undefined) && (authToken && authToken.id !== null) &&
        <Nav authToken={authToken} />} */}
        <ConfigProvider locale={enUS}>
          <Routes>
          <Route path="/" element={<HomeScreen />} />
                 

                  {/* <Route path="Dummy" element={<PrintList/>}/> */}
                  <Route path="HomeScreen" element={<HomeScreen />} /> 

           
        
           

              {/* <Admin Route> */}
                <Route path="Support" element={<Support />} />
                <Route path="Support2" element={<Support2 />} />
                <Route path="Support3" element={<Support3 />} />

               
                <Route path="Players" element={<Players />} />
                <Route path="Players2" element={<Players2 />} />
                <Route path="Players3" element={<Players3 />} />
                <Route path="Players4" element={<Players4 />} />
                <Route path="Players5" element={<Players5 />} />
                <Route path="Players6" element={<Players6 />} />


          </Routes>
        </ConfigProvider>
        <Footers />
      </Layout>
    </UserContext.Provider>
    )}
  </div>
</HashRouter>
);
}

export default App;
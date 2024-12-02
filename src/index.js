import React from 'react';
import ReactDOM from 'react-dom/client';
// import Head from './Head';
// import Use from './Use';
import App from './App';
<link rel="stylesheet" href="style.css"/>



// const variable1 = "the best";
// const variable2 = "No.1"

// const main = {
//   backgroundColor: "yellow" ,
//   height: "100vh" ,
//   width: "100%",
//   color : "blue"
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div style={main}>
  // <Head />
  // <Head />
  // <Head />
  // <Use name = "himank" expert="front-end"/>
  // <Use name = "raj" expert="back-end"/>
  // <Use name = "rahul" expert="DevOps"/>
  // {/* <div style={{ backgroundColor: "yellow" , height: "100vh" , width: "100%"}}> */}
  //   {/* <h1 style={{color: "red"}}>I am {variable1 + ' ' + variable2}</h1> */}
  //   <h1 style={{color: "red"}}>{`I am ${variable1} ${variable2}`}</h1>
  //   <p>hey there</p>
  // </div>

  <>
  <App />
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

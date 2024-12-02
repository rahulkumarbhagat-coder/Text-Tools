import React, { useState } from "react";
import Navbar from './components/Navbar'
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import ErrorPage from "./components/ErrorPage";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
// import Use from './Use';   This one
// import Test from "./Test";
// let next = "World!";

function App(){
    // const[toggle,updatetoggle] = useState(false);    This One
    let[mode, setMode] = useState('light');

    const removeAllClass = ()=>{
        document.body.classList.remove('bg-primary')
        document.body.classList.remove('bg-dark')
        document.body.classList.remove('bg-light')
        document.body.classList.remove('bg-success')
        document.body.classList.remove('bg-danger')
        document.body.classList.remove('bg-warning')
    }

    const toggleMode= (cls) =>{
        removeAllClass();
        document.body.classList.add('bg-'+cls)
        
        if(mode === 'dark'){
            setMode("light");
            showAlert("Light Mode Enabled","success")
            document.title="TextTools - LightMode"
        }
        else{
            setMode('dark');
             showAlert("Dark Mode Enabled","success")
             document.title="TextTools - DarkMode"
        }
       
    }

    const [alert, setAlert] = useState(null)

    const showAlert= (message,type)=> {
        setAlert({
            msg: message,
            type : type
        })
        
        setTimeout(() => {
            setAlert(null)
        }, 1000);
    }

    return (<>
    {/* <h1>Hey there,How are you</h1>  This one 
    <Use /> */}

        {/* <button onClick ={ () => {
            updatetoggle(!toggle);
        }} >Toggle</button>

        {toggle && <Test />}

        <h1>hello {next}</h1> */}

        <Router>
            <Navbar title="TextTools" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert}/>

            <div className="container my-3">
            <Routes>
            <Route exact path="/about" element= {<About mode={mode} />} />
            <Route exact path="*" element= {<ErrorPage/>} />
            
            
            <Route exact path="/" heading="Enter your text" element = {<Textform showAlert = {showAlert} mode={mode}/>}/>
            {/* <Textform heading="Enter your text"  showAlert = {showAlert} mode= {mode} />  */}
            </Routes>
            </div>
        </Router>
    </>
    )
}

export default App;
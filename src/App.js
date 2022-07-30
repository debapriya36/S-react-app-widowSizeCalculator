import logo from './logo.svg';
import './App.css';
import CC from './CC';
import Home from './Home';
import { useEffect, useState } from 'react';


function App() {

                        // useState
  // const[name,setName]=useState('raj'); // name is the value , that can be accesed and modify!  
  // // setName is the setfuction used to change name variable
  // function changeN()
  // {
  //   setName('starboy');
  // }
                     // useEffect
  //   const[lang,setLang]=useState('TypeScript');
  //  useEffect(()=>{
  //   setLang('JavaScript');
  //  },[])
  // const[username,setUsername]=useState('');
  // function showInput()
  // {
  //   alert(username);
    
  // }
  const[windowWidth,setWindowWidth]=useState(window.innerWidth);
  const[windowHeight,setWindowHeight]=useState(window.innerHeight);

     function updateWindow()
     {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
     }

  useEffect(()=>{
    window.addEventListener('resize',updateWindow);
  },[])

  
  return (

    <div className="App">
{/* 
       <h1>
        REACT HOOKS - {name}
       </h1>
       <button onClick={changeN}> change my name </button>
       <CC/> */}
       {/* <h1>
        i am coding in {lang}
       </h1>
      <Home/> */}

      {/*  */}

      {/* <h1>
    <form action="">
    <input type="text" placeholder='enter username'  value={username} onClick={(e)=>{
      setUsername(e.target.value)}}></input> */}


       {/* // everytime we change in input, we need to update inputval */}
      {/* <button onClick={showInput}> show me!</button>
    </form>
    </h1> */}




    <h1>
      Window Width : <p style={{color: 'red'}}> {windowWidth} </p>
      <br />
      Window Height : <p style={{color: 'blue'}}> {windowHeight} </p>
    </h1>


    </div>
  );
}

export default App;

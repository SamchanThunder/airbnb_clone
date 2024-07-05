import globe from './svgs/globe.svg';
import profile from './svgs/profile.svg';
import lines from './svgs/lines.svg';
import logo from './svgs/logo.png'
import './App.css';
import { useState } from 'react';

function App() {
  const [yesScrolled, setYesScrolled] = useState(true);
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    const header = document.getElementById("webHeader");
    const types = document.getElementById("types");
    const logoBox = document.getElementById("logoBox");
    const rightHeaderButtons = document.getElementById("rightHeaderButtons");
    const middleButtons = document.getElementById("middleHeaderButtons");
    const mhButton1 = document.getElementById("mhButton1");
    const mhButton2 = document.getElementById("mhButton2");


  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    types.style.boxShadow = "0px 1px rgba(128, 128, 128, 0.363)";
    types.style.top = "90px";
    header.style.height = "90px";  
    logoBox.style.marginBottom = "0px"
    rightHeaderButtons.style.marginBottom = "0px"
    middleButtons.style.opacity = "0";
    middleButtons.style.marginBottom = "120px";
    mhButton1.style.fontSize = "10px";
    mhButton2.style.fontSize = "10px";
    setYesScrolled(false);
  } else {
    types.style.boxShadow = "none";
    types.style.top = "167px";
    header.style.height = "167px"; 
    logoBox.style.marginBottom = "80px"
    rightHeaderButtons.style.marginBottom = "90px"
    middleButtons.style.opacity = "1";
    middleButtons.style.marginBottom = "90px";
    mhButton1.style.fontSize = "17px";
    mhButton2.style.fontSize = "17px";
    setYesScrolled(true);
  }
  }

  return (
    <div className="App">
      <header id="webHeader" data-visible-range="0">
        <div id="logoBox"><button id="logo"><img src={logo} style={{width: "100px", height: "32px"}}></img></button></div>
        <div id="middleHeaderButtons">
          <button id="mhButton1">Stays</button>
          <div id="grayLine4"></div>
          <button id="mhButton2">Experiences</button>
        </div>
        {yesScrolled ? (
          <div id="middleHeaderSearch">
            <button id="mhsButton1">
              <div id="mhsText">Where<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Search destinations</div></div>
            </button>
            <div id="grayLine1"></div>
            <button id="mhsButton2">
              <div id="mhsText">Check In<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Add dates</div></div>
            </button>
            <div id="grayLine2"></div>
            <button id="mhsButton3">
              <div id="mhsText">Check Out<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Add dates</div></div>
            </button>
            <div id="grayLine3"></div>
            <button id="mhsButton4">
              <div id="mhsText">Who<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Add guests</div></div>
            </button>
            <button id="mhsButton5">
              <div style={{fontSize: "18px", color: "white"}}>🔍︎</div>
            </button>
          </div>
        ) : (
          <div id="middleHeaderSearch2">
            <button id="mhsButton6">
              <div id="mhsText2">Anywhere</div>
            </button>
            <div id="grayLine5"></div>
            <button id="mhsButton7">
              <div id="mhsText2">Any week</div>
            </button>
            <div id="grayLine6"></div>
            <button id="mhsButton8">
              <div id="mhsText2" style={{textAlign:"left", marginLeft: "24px", color: "gray", fontWeight: "normal"}}>Add guests</div>
            </button>
            <button id="mhsButton9">
              <div style={{fontSize: "18px", color: "white"}}>🔍︎</div>
            </button>
          </div>
        )}
        <div id="rightHeaderButtons">
          <button id="rhButton1">Airbnb your home</button>
          <button id="rhButton2"><img src={globe}></img></button>
          <button id="rhButton3"><img src={lines} style={{left: "20px"}}></img><img src={profile}></img></button>
        </div>
      </header>
      <header id="types">
        <button id="typeButton"><img src={globe}></img>Icons</button>
        <button id="typeButton2"><img src={globe}></img>Pools</button>
        <button id="typeButton2"><img src={globe}></img>Country</button>
        <button id="typeButton2"><img src={globe}></img>Beaches</button>
        <button id="typeButton2"><img src={globe}></img>Luxe</button>
        <button id="typeButton2"><img src={globe}></img>Domes</button>
        <button id="typeButton2"><img src={globe}></img>Nice views</button>
        <button id="typeButton2"><img src={globe}></img>Hankoks</button>
        <button id="typeButton2"><img src={globe}></img>OMG!</button>
        <button id="typeButton2"><img src={globe}></img>Parks</button>
        <button id="typeButton2"><img src={globe}></img>Rooms</button>
        <button id="typeButton2"><img src={globe}></img>Castles</button>
        <button id="typeButton2"><img src={globe}></img>Farms</button>
        <button id="typeButton2"><img src={globe}></img>Play</button>
      </header>
      <div id="test"></div>
    </div>
  );
}

export default App;

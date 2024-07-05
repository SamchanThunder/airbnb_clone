import globe from './svgs/globe.svg';
import profile from './svgs/profile.svg';
import lines from './svgs/lines.svg';
import logo from './svgs/logo.png'
import castle from './svgs/castle.svg';
import country from './svgs/country.svg';
import dome from './svgs/dome.svg';
import farm from './svgs/farm.svg';
import hanok from './svgs/hanok.svg';
import luxe from './svgs/luxe.svg';
import omg from './svgs/omg.svg';
import park from './svgs/park.svg';
import play from './svgs/play.svg';
import pool from './svgs/pool.svg';
import room from './svgs/room.svg';
import ticket from './svgs/ticket.svg';
import views from './svgs/views.svg';
import beach from './svgs/beach.svg';
import template from './svgs/template.jpg';
import share from './svgs/share.svg'
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
    const imgFlex = document.getElementById("flexBoxImage");


  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    types.style.boxShadow = "0px 1px rgba(128, 128, 128, 0.363)";
    types.style.top = "90px";
    imgFlex.style.top = "160px"
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
    imgFlex.style.top = "272px"
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
              <div className="mhsText">Where<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Search destinations</div></div>
            </button>
            <div id="grayLine1"></div>
            <button id="mhsButton2">
              <div className="mhsText">Check In<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Add dates</div></div>
            </button>
            <div id="grayLine2"></div>
            <button id="mhsButton3">
              <div className="mhsText">Check Out<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Add dates</div></div>
            </button>
            <div id="grayLine3"></div>
            <button id="mhsButton4">
              <div className="mhsText">Who<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Add guests</div></div>
            </button>
            <button id="mhsButton5">
              <div style={{fontSize: "18px", color: "white"}}>🔍︎</div>
            </button>
          </div>
        ) : (
          <div id="middleHeaderSearch2">
            <button id="mhsButton6">
              <div className="mhsText2">Anywhere</div>
            </button>
            <div id="grayLine5"></div>
            <button id="mhsButton7">
              <div className="mhsText2">Any week</div>
            </button>
            <div id="grayLine6"></div>
            <button id="mhsButton8">
              <div className="mhsText2" style={{textAlign:"left", marginLeft: "24px", color: "gray", fontWeight: "normal"}}>Add guests</div>
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
        <button className="typeButton"><img src={ticket}></img>Icons</button>
        <button className="typeButton2"><img src={pool}></img>Pools</button>
        <button className="typeButton2"><img src={country}></img>Country</button>
        <button className="typeButton2"><img src={beach}></img>Beaches</button>
        <button className="typeButton2"><img src={luxe}></img>Luxe</button>
        <button className="typeButton2"><img src={dome}></img>Domes</button>
        <button className="typeButton2"><img src={views}></img>Nice views</button>
        <button className="typeButton2"><img src={hanok}></img>Hanoks</button>
        <button className="typeButton2"><img src={omg}></img>OMG!</button>
        <button className="typeButton2"><img src={park}></img>Parks</button>
        <button className="typeButton2"><img src={room}></img>Rooms</button>
        <button className="typeButton2"><img src={castle}></img>Castles</button>
        <button className="typeButton2"><img src={farm}></img>Farms</button>
        <button className="typeButton2"><img src={play}></img>Play</button>
      </header>
      <body>
        <div id="flexBoxImage">
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div> 

          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>

          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
          <div className="flexImageElement"><img id="shareImg" src={share}></img><img src={template}></img><div style={{fontSize: "17px"}}><b>Stay in Bruno Mars' House</b></div><div style={{fontSize: "17px", color: "gray"}}>Hosted by Bruno Mars</div><div style={{fontSize: "18px"}}>Coming August</div></div>
        </div>
      </body>
      <footer id="bottomHeader"></footer>
    </div>
  );
}

export default App;

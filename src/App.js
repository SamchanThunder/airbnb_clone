import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="webHeader">
        <div id="logoBox"><button src="" id="logo">airbnb</button></div>
        <div id="middleHeaderButtons">
          <button id="mhButton1">Stays</button>
          <div id="grayLine4"></div>
          <button id="mhButton2">Experiences</button>
        </div>
        <div id="middleHeaderSearch">
          <button id="mhsButton1"><div id="mhsText">Where<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Search destiantions</div></div></button>
          <div id="grayLine1"></div>
          <button id="mhsButton2"><div id="mhsText">Check In<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Add dates</div></div></button>
          <div id="grayLine2"></div>
          <button id="mhsButton3"><div id="mhsText">Check Out<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Add dates</div></div></button>
          <div id="grayLine3"></div>
          <button id="mhsButton4"><div id="mhsText">Who<div style={{color: "gray", fontWeight: "normal", fontSize: "16px"}}>Add guests</div></div></button>
        </div>
        <div id="rightHeaderButtons">
          <button id="rhButton1">Airbnb your home</button>
          <button id="rhButton2">🌐</button>
          <button id="rhButton3"></button>
        </div>
      </header>
      <div id="test"></div>
    </div>
  );
}

export default App;

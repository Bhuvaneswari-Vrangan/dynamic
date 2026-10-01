import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import one from "./assets/images/img1.jpg"
import two from "./assets/images/img2.jpg"
import three from "./assets/images/img3.jpg"
import four from "./assets/images/img4.jpg"
import five from "./assets/images/img5.jpg"
import six from "./assets/images/img6.jpg"
import seven from "./assets/images/img7.jpg"
import eight from "./assets/images/img8.jpg"
import nine from "./assets/images/img9.jpg"
import ten from "./assets/images/img10.jpg"
import eleven from "./assets/images/img11.jpg"
import twelve from "./assets/images/img12.jpg"
import thirteen from "./assets/images/img13.jpg"
import fourteen from "./assets/images/img14.jpg"
import fifteen from "./assets/images/img15.jpg"
import sixteen from "./assets/images/img16.jpg"
import seventeen from "./assets/images/img17.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))

function App(){
  const [page, setPage] = useState("home"); // home or gallery

  if(page === "gallery"){
    return (
      <div>
        <h1 className="title" onClick={()=> setPage("home")} style={{cursor:"pointer"}}>
          Dynamic Image Gallery
        </h1>
        <div className="masonry">
          <div className="item"><img src={two} alt="1" /></div>
          <div className="item"><img src={three} alt="2" /></div>
          <div className="item tall"><img src={four} alt="3" /></div>
          <div className="item"><img src={five} alt="4" /></div>
          <div className="item tall"><img src={six} alt="5" /></div>
          <div className="item small"><img src={seven} alt="6" /></div>
          <div className="item"><img src={eight} alt="7" /></div>
          <div className="item small"><img src={nine} alt="8" /></div>
          <div className="item tall"><img src={ten} alt="9" /></div>
          <div className="item"><img src={eleven} alt="10" /></div>
          <div className="item"><img src={twelve} alt="11" /></div>
          <div className="item tall"><img src={thirteen} alt="12" /></div>
          <div className="item"><img src={fourteen} alt="13" /></div>
          <div className="item"><img src={fifteen} alt="14" /></div>
          <div className="item"><img src={sixteen} alt="15" /></div>
          <div className="item tall"><img src={seventeen} alt="16" /></div>
        </div>
      </div>
    )
  }

  // HOME PAGE
  return (
    <div>
      <h1 className="main">Dynamic Image Gallery</h1>
      <div className="container">
        <div className="left">
          <h1 className="Welcome">Welcome</h1>
          <p className="Para">Good food is a whole mood. Explore hand-crafted recipes</p>
          <p className="Para para-2">Savour the art of fine dining. Every dish is a masterpiece crafted with fresh ingredients and passion.</p>
          <button onClick={() => setPage("gallery")} className="btn">
            Explore Gallery
          </button>
        </div>
        <div className="Right">
          <div className="Imagecard">
            <img src={one} alt="Main Dish" />
          </div>
        </div>
      </div>
    </div>
  )
}

root.render(<App />)
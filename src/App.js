import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./styles/App.css";
import Component from "./components/Component";
import Footer from "./components/Footer";
import loadImg from "./assets/loadingImg.png";

function App() {

  const [text, setText] = useState("");
  const [load, setLoad] = useState(true);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        let randomNumber = Math.floor(Math.random() * 101);
        setText(data[randomNumber]);
        setLoad(false)
        // console.log(data)
      });

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">

      <h1 className="heading  ">
      <Typewriter
        className="heading"
        onInit={(typewriter) => {
          typewriter.typeString(`Random Text Generator`).start();
        }}
      />
      </h1>

      <div>
      {load ? <img src={loadImg} alt="loading" className="loadImg" /> :
        <div className="box-container">
            <Component text={text}/>
          <button className="btn" onClick={getData}>Get Random Text</button>

        </div>
      }
      </div>

      <Footer />
    </div>
  );
}

export default App;

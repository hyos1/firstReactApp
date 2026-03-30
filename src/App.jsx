// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Button from "./Button";
import "./App.css";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    console.log(counter);
    setCounter((value) => value + 1)
  };
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {console.log("CALL THE API...")}, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length >= 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h3>{counter}</h3>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useRef } from "react";



function App() {

  const listRef = useRef();

  const handleClick = (direction) => {
    if (direction === "left"){
      console.log(listRef.current)
        listRef.current.style.color = "red";
    }
  }
  
  return (
    <div className="App">
        <div className="App">
          <h1 ref={listRef}>Hello World!</h1>
          <button type='button' onClick={() => handleClick('left')}>test</button>
        </div>
    </div>
  );
}

export default App;

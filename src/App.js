import React from 'react'
import "./App.scss";
import Button from "./componets/Button";
import Result from "./componets/Result";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <div className="result">
          <Result result={"計算結果"}/>
        </div>
        <div className="button-wrapper">
          <div className="number">
            <div className="upper">
              <Button text={7}/>
              <Button text={8}/>
              <Button text={9}/>
            </div>
            <div className="middle">
              <Button text={4}/>
              <Button text={5}/>
              <Button text={6}/>
            </div>
            <div className="lower">
              <Button text={1}/>
              <Button text={2}/>
              <Button text={3}/>
            </div>
            <div className="bottom">
              <Button text={0}/>
              <Button text={"AC"}/>
              <Button text={"-"}/>
            </div>
          </div>
          <div className="operator">
              <Button text={"÷"}/>
              <Button text={"×"}/>
              <Button text={"-"}/>
              <Button text={"+"}/>
            </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;

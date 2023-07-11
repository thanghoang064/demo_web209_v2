import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import PropDemo from './components/PropDemo';
import Button from './components/Button';
import Button1 from './components/Button1';
import { EffectDemo } from './components/EffectDemo';
import Login from './components/Login';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
       <PropDemo name="abc" type={1}></PropDemo>
        {/* <PropDemo name="abwc" type={122}></PropDemo> */}
        {/* <Counter></Counter> */}
        {/* <EffectDemo></EffectDemo> */}
        {/* <Button1></Button1>
        <Button></Button> */}
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        {/* <Login></Login> */}
      </header>
    </div>
  );
}

export default App;

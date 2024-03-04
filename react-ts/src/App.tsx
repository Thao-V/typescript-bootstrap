import React from 'react';
import './App.css';
import Button from "./Button";
import { Courses } from './Courses';
import DisplayMsg from './DisplayMsg';

function App() {
  const data = [
    {href: "https://miu.edu", name: "WAP"},
    {href: "https://miu.edu", name: "MWA"},
  ]
  return (
    <div className="App">
     <Button label="Login"/>
     <Courses data={data}/>
     <DisplayMsg text="hello"/>
    </div>
  );
}

export default App;

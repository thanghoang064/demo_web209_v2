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
import { Route, Routes } from 'react-router-dom';
import Layout from './components/templates/Layout';
import ShowSinhVien from './components/pages/sinhvien/ShowSinhVien';
function App() {
  return (
    <div className="App">
        {/* <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    path="dashboard"
                    element={<ComponentA />}
                />
                <Route path="sinhvien" element={<ShowSinhVien/>} />
            </Route>
        </Routes> */}
        <Counter /> 
    </div>
  );
}

export default App;

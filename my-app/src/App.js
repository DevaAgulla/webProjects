//import logo from './logo.svg';
import './App.css';
import Upload from './components/upload';
import Display from "./components/Display"
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Search from './components/Search'
function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Display />} />
          <Route path="home" element={<Display />} />
          <Route path="entry" element={<Upload />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App;


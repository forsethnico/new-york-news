import React from 'react';
import ArticleContainer from "../ArticleContainer/ArticleContainer";
// import ArticleDetail from "../ArticleDetail/ArticleDetail";
import Header from '../Header/Header'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from '../NavBar/NavBar'

function App() {


  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ArticleContainer />} />
        {/* <Route path={`/${section}`} element= {<StoryContainer />} /> */}
        {/* <Route path="/:id" element={<ArticleDetail/>} /> */}
      </Routes>
    </div>
  );
}

export default App;

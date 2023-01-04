import React from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LogInPage from "./LogInPage/LogInPage"
import HomePage from "./HomePage/HomePage"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <LogInPage />
         
        <HomePage />
      
      </BrowserRouter>
    </div>
  );
}

import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInPage from './LogInPage/LogInPage';
import HomePage from './HomePage/HomePage';
import Navbar from './LayOut/Navbar';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LogInPage />

        <HomePage />
      </BrowserRouter>
    </div>
  );
}

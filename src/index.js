import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import "./style"
import LogInPage from './LogInPage/LogInPage';
import HomePage from './HomePage/HomePage';
import { Link } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <HomePage />
    <LogInPage />
  </>
);

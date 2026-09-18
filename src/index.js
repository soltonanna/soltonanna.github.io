import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';

import '../public/index.html';
import './index.scss';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

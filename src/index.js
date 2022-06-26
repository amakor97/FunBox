import 'core-js/stable'

import React from 'react';
import ReactDOM from 'react-dom/client';


import 'babel-polyfill';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import Offer from "./blocks/Offer/Offer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Offer />
);

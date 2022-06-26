import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/display-components/Home";
import Contact from "./components/display-components/Contact";
import Activities from "./components/display-components/Activities";
import Magazine from "./components/display-components/Magazine";
import Teachers from "./components/display-components/Teachers";
import Registry from "./components/display-components/Registry";
import Login from "./components/display-components/Login";
import AddUser from "./components/display-components/AddUser";
import Logout from "./components/display-components/Logout";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path="/activitati" element={<Activities/>}/>
                <Route path="/revista-scolii" element={<Magazine/>}/>
                <Route path="/profesori" element={<Teachers/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/catalog" element={<Registry/>}/>
                <Route path="/adaugare-utilizator" element={<AddUser/>}/>
                <Route path="/autentificare" element={<Login/>}/>
                <Route path="/deconectare" element={<Logout/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
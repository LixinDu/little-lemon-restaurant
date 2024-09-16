// import Logo from "./Logo";
import logo from './assets/Logo.svg';
import './Nav.css'
// import About from "./About";
import { Link, Routes, Route } from 'react-router-dom';

function Nav(){
    return(
        <div className="grid-container">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/orderonline">Order online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <Routes>
                {/* <Route path="/" element={<></>}/>
                <Route path="/about" element={<About/>}/> */}
                <Route></Route>
            </Routes>
        </div>
    );
};

export default Nav;
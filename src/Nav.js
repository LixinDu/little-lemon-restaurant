import Logo from "./Logo";
import Home from "./Home";
import About from "./About";
import { Link, Routes, Route } from 'react-router-dom';

function Nav(){
    return(
        <div>
        <nav>
            <Logo/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/orderonline">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        </div>
    );
};

export default Nav;
import React from 'react'
import '../CSS/Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <header>
                <nav className="navbar">
                    <input type="checkbox" name="" id="check" />
                    <label htmlFor="check" className="checkbtn checkbtn2">
                        <i className="fas fa-bars"></i>
                    </label>
                    <ul>
                        <li><Link className="li-item" to="/">Home</Link></li>
                        <li><Link className="li-item" to="/business">Business</Link></li>
                        <li><Link className="li-item" to="/entertainment">Entertainment</Link></li>
                        <li><Link className="li-item" to="/general">General</Link></li>
                        <li><Link className="li-item" to="/health">Health</Link></li>
                        <li><Link className="li-item" to="/science">Science</Link></li>
                        <li><Link className="li-item" to="/sports">Sports</Link></li>
                        <li><Link className="li-item" to="/technology">Technology</Link></li>
                    </ul>
                    <label className="logo">NewsApp</label>
                </nav>
            </header>
        </>
    )
}

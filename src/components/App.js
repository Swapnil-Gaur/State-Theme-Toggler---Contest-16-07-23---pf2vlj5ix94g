import React, { useState } from "react";
import "../styles/App.css";

export default function App() {
    const[theme , setTheme]=useState('light');
    const toggleTheme=()=>{
        setTheme(pretheme=>(pretheme==='light'?'dark':'light'));
    }
    
    return (
        <div className="App">
            <h1>Newton School</h1>
            <div>
                <form>
                    <label>UserName</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                    <button>Login</button>
                </form>
            </div>
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <input type="checkbox" id="switch" onClick={toggleTheme}/>
            <label for="switch" className="label">
                Toggle
            </label>
        </div>
    );
}

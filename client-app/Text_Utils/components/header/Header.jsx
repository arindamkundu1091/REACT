import React,{useState} from 'react'
import Navbar from './Navbar';

export default function Header() {

    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        if(mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = '#333';
        document.getElementById('TextBox').style.backgroundColor = '#222';
        document.getElementById('value').style.backgroundColor = '#222';
        document.getElementById('about').style.backgroundColor = '#333';
        document.getElementById('aboutBtn').style.backgroundColor = '#555';
        document.getElementById('aboutBtn').style.color = 'white';
        document.getElementById('about').style.color = 'white';
        document.getElementById('textForm').style.color = 'white';
        document.getElementById('TextBox').style.color = 'white';
        document.getElementById('value').style.color = 'white';
        document.getElementById('preview').style.color = 'white';
    } else {
        setMode("light");
        document.body.style.backgroundColor = 'white';
        document.getElementById('TextBox').style.backgroundColor = 'white';
        document.getElementById('value').style.backgroundColor = 'white';
        document.getElementById('about').style.backgroundColor = 'white';
        document.getElementById('aboutBtn').style.backgroundColor = 'white';
        document.getElementById('aboutBtn').style.color = 'black';
        document.getElementById('about').style.color = 'black';
        document.getElementById('textForm').style.color = 'black';
        document.getElementById('TextBox').style.color = 'black';
        document.getElementById('value').style.color = 'black';
        document.getElementById('preview').style.color = 'black';
        }
    }

    return (
        <Navbar title= "TextUtils" aboutText= "About" homeText= "Home" mode = {mode} toggleMode = {toggleMode}/>
    );
}


import React from 'react';

import { useState } from 'react';
import menuIcon from '../assets/menu.png';
import xicon from '../assets/x.png';
import '../App.css';
import Hero from "./hero"
import About from "./aboutme"
import Projects  from './projects';
import Contact from './contact';

export default function Header(){
const [togglenav, setTogglenav]=useState(false);
return <section>
    <header>
        <nav className="pr-5 p-2 hidden md:block"> 

            <ul className="flex gap-4 justify-end text-2xl text-white">
                <li className="hover:text-coral cursor-pointer">   <a href='/'>Home</a></li>
                <li className="hover:text-coral cursor-pointer"><a href='#projects'>Projects</a></li>
                <li className="hover:text-coral cursor-pointer"><a href='#about'>About</a></li>
                <li className="hover:text-coral cursor-pointer"><a href='#contact'>Contact</a></li>
                
            </ul>

        </nav>
      </header>
<header className="bg-black text-white w-full">
       <button onClick={()=>setTogglenav(!togglenav)} className="block md:hidden p-2">
        <img src={togglenav ? xicon:menuIcon} alt="Menu" />
        </button>
{togglenav && 
        <nav className="pr-5 p-2 block md:hidden fade-out"> 
            <ul className="flex gap-4 justify-end flex-col text-left text-2xl ">
                <li className="hover:text-coral cursor-pointer"><a href='/'>Home</a></li>
                <li className="hover:text-coral cursor-pointer"><a href='#projects'>Projects</a></li>
                <li className="hover:text-coral cursor-pointer"><a href='#about'>About</a></li>
                <li className="hover:text-coral cursor-pointer"><a href='#contact'>Contact</a></li>
                
            </ul>

        </nav>
   
}
</header>

    </section>
}
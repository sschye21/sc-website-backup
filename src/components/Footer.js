import React from 'react'
import navLogo from '../assets/SC.png'
import '../App.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { IconContext } from "react-icons";

function Footer () {

    const logos = [
        {logo: <FaGithub size={35} />, link: 'https://github.com/sschye21'},
        {logo: <FaLinkedin size={35} />, link: 'https://www.linkedin.com/in/steven-chye/'},
        {logo: <FiMail size={35} />, link: 'mailto:sschye@gmail.com'},
    ]

    const c1 = localStorage.getItem('colour1')

    return (
        <div className="flex flex-col items-center pt-24 text-center" style={{backgroundColor: c1}} id="contact">
            <img className="w-28 h-28 mb-8" src={navLogo} alt="footer-logo"/>
            <p className='max-w-xl titleFont text-white px-6 mb-14'>
                "If you're happy doing what you're doing, then nobody can tell you you're not successful."
            </p>

            <p className='max-w-xl textBody text-white mb-4'>Reach me at:</p>
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <div className="flex flex-row items-center gap-x-5 pb-4">
                    {logos.map((items, key) => {
                        return (
                            <a href={items.link} key={key} target="_blank" rel="noreferrer">
                                {items.logo}
                            </a>
                        )
                    })}
                </div>
            </IconContext.Provider>
            <p className='pb-24 textBody text-white underline'>sschye@gmail.com</p>
        </div>
    )
}

export default Footer;

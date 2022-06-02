import React from 'react'
import '../App.css'
import website from '../assets/Steven-Chye-website.png'
import unit from '../assets/unit.png'
import { BiTennisBall } from 'react-icons/bi'

function Projects () {

    const projects = [
        {desc: "Personal Portfolio Website", link: 'https://github.com/sschye21/sc-website', img: website},
        {desc: "University Network for Investing and Trading (UNIT) website", link: 'http://unit.org.au/', img: unit}
    ]

    const c3 = localStorage.getItem('colour3')

    return (
        <div id="projects">
            <div className='flex flex-col items-center mt-28 mb-40'>
                <h2 className="text-center titleFont text-3xl mb-5">Projects</h2>
                <p className="text-center textBody text-lg">Here are a few projects I've worked on recently!</p>
                <div className='min-h-min mt-20 px-32'>
                    {/* change lg:grid-cols-3 when more projects are added */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-23 items-center text-center'>
                        {projects.map((item, key) => {
                            return (
                                <a className='flex flex-col items-center px-8 pb-8' target='_blank' rel="noreferrer" href={item.link} key={key}>
                                    <img className='w-80 shadow-xl rounded-xl' src={item.img} alt={"project-" + (key + 1)}/>
                                    <p className='textBody pt-4 max-w-sm'>{item.desc}</p>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <button 
                    className="hover:bg-blue-500 text-white textBody font-bold py-2 px-4 rounded-full mt-4" 
                    style={{backgroundColor: c3}}
                >
                    <a href="https://github.com/sschye21" target="_blank" rel="noreferrer" className="flex flex-row">
                        <BiTennisBall className='mt-1 mr-2'/>
                        See More
                    </a>
                </button>
            </div>
        </div>
        
    )
}

export default Projects;

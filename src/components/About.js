import React, { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import '../App.css'
import adobe from '../assets/Adobe.png'
import kpmg from '../assets/KPMG.png'
import ReactWordcloud from 'react-wordcloud';
import { words } from '../components/Words'

function About () {

    const c2 = localStorage.getItem('colour2')

    const options = {
        rotations: 3,
        rotationAngles: [0, 0],
    };

    return (
        <div id="about">
            <div className="relative h-full" style={{backgroundColor: c2, marginTop: -3}}>
                <Tab.Group >
                    <Tab.List>
                        <div className="absolute flex flex-col right-0 textBody gap-24 mt-16">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                    className={                                    
                                        selected  ? 'text-black underline font-bold' : 'text-black'
                                    }
                                    style={{transform: 'rotate(90deg)'}}
                                    >About</button>)} 
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                    className={                                    
                                        selected  ? 'text-black underline font-bold' : 'text-black'
                                    }
                                    style={{transform: 'rotate(90deg)'}}
                                    >Skills</button>)} 
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                    className={                                    
                                        selected  ? 'text-black underline font-bold' : 'text-black'
                                    }
                                    style={{transform: 'rotate(90deg)'}}
                                    >Experience</button>)} 
                            </Tab>
                        </div>
                    </Tab.List>
                    
                    <Tab.Panels>
                        <div className="flex justify-center pt-24">
                            <Tab.Panel>
                                <div className="flex flex-col items-center text-center">
                                    <p className="text-3xl pb-8 titleFont px-16">
                                        Hi! My name is Steven, nice to meet you!
                                    </p>
                                    <p className="max-w-4xl px-20 textBody mb-32">
                                        I'm an ambitious tech enthusiast and a keen software developer who loves building. I'm curious yet confident, 
                                        and perpetually work on constantly improving and upskilling myself one step at a time.
                                        I work as a Global Web Developer Intern at Adobe Australia where I develop webpages as per design mockups for the Adobe.com 
                                        APAC region. I work great in teams, lead by example and can be counted on to consistently deliver above expectations.
                                    </p>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="flex flex-col items-center text-center">
                                    <p className="text-3xl titleFont px-16 mb-8">
                                        Skills
                                    </p>
                                    <p className="max-w-3xl px-20 textBody">
                                        My skills are wideranging, spanning across multiple creative and technical disciplines. I'm constantly learning and 
                                        looking to improve myself everyday and am in a constant pursuit of skills that can help develop me into a well rounded professional.
                                    </p>
                                    <ReactWordcloud className="-mt-4 px-20" words={words} options={options} style={{width: 500, height: 240}}/>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="flex flex-col">
                                    <p className="text-3xl pb-8 titleFont px-16 text-center">
                                        Experience
                                    </p>
                                    <div className='flex flex-col gap-12 px-8'>
                                        <div className="gap-4 flex flex-row items-center">
                                            <img src={adobe} alt="adobe" className="w-32 h-full" />
                                            <div className='flex flex-col items-start'>
                                                <h2 className='font-bold italic text-left pr-12'>Global Web Developer Intern</h2>
                                                <p className="max-w-md text-justify pr-12">
                                                    Developed, authored and tailored webpages for the Adobe China website, liaising with regional and international stakeholders
                                                    to meet requirements
                                                </p>
                                            </div>
                                        </div>
                                        <div className="gap-4 flex flex-row items-start">
                                            <img src={kpmg} alt="kpmg" className='w-32 h-full' />
                                            <div className='flex flex-col items-start'>
                                                <h2 className='font-bold italic text-left pr-12'>Summer Vacationer</h2>
                                                <p className="max-w-md text-justify pr-12">
                                                    Delivered audit and assurance services for an ASX listed company for all confidential financial and non-financial statements
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <p className="text-center mt-16 mb-8">Contact me for full experience details*</p>
                            </Tab.Panel>
                        </div>
                    </Tab.Panels>
                </Tab.Group>
                
            </div>
            
            
        </div>
    )
}

export default About;

import React, { Suspense } from 'react'
import Title from './Title.js'
import laptopImg from '../assets/laptop-design.svg'
import steveImg from '../assets/steve-image-modified.png'
import linkedinImg from '../assets/linkedin.jpg'
// import adobeImg from '../assets/Adobe.svg'
import githubImg from '../assets/github.jpg'
import { Canvas} from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import Box from './Box.js'
import { HashLink } from 'react-router-hash-link';
import '../App.css'
// import Waves from '../components/Waves'

function Header () {

    const c3 = localStorage.getItem('colour3')

    return (
        <>
        {/* <Waves/> */}
        <div>
            <Title />
            <div className="flex flex-col items-center textBody">
                <img src={steveImg} alt="steven-chye" style={{borderRadius: '50%', width: 200}} />
                <div className="flex flex-row justify-center" style={{width: 250, marginTop: -20}}>
                    <Canvas colorManagement camera={{fov: 32}}>
                        <ambientLight intensity={0.5} />
                        <spotLight 
                            position={[10, 15, 10]}
                        />

                        <Suspense fallback={null}>
                            <PresentationControls>
                                <Box image={githubImg} link={"https://github.com/sschye21"}/>
                            </PresentationControls>
                            
                        </Suspense>
                    </Canvas>
                    <Canvas colorManagement camera={{fov: 32}}>
                        <ambientLight intensity={0.5} />
                        <spotLight 
                            position={[10, 15, 10]}
                        />
                        <Suspense fallback={null}>
                            <PresentationControls>
                                <Box image={linkedinImg} link={"https://www.linkedin.com/in/steven-chye/"}/>
                            </PresentationControls>
                        </Suspense>
                    </Canvas>
                </div>
                <HashLink smooth to="#projects">
                    <button 
                        className="hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full textBody" 
                        style={{backgroundColor: c3, marginBottom: 70, marginTop: -30}}
                    >
                        My portfolio {'>'}
                    </button>
                </HashLink>
                <img src={laptopImg} alt="laptop-design" style={{width: 1000, marginTop: -45}}></img>
            </div>
        </div>
        </>
    )
}

export default Header;

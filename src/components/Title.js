import React from 'react';
import Typical from 'react-typical';
import '../App.css'

class Title extends React.Component {
    render () {
        return (
            <div style={{paddingBottom: '7vh'}} id='home'>
                <header>
                <div style={{height: "12vh"}}/>
                    <h1 className="titleFont text-center text-6xl pb-5">👋 Hi, I'm Steven!</h1>
                    <div className="text-center text-lg textBody">
                        <Typical
                            steps={[
                                'A Software Developer 💻', 1000,  
                                'A Tennis Player 🎾', 1000,
                                'A Fashion Enthusiast 👕', 1000,
                            ]}
                            loop={Infinity}
                            wrapper = 'p'
                        />
                    </div>
                </header>
            </div>
        )
    }
}

export default Title;

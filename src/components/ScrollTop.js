import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link';

function ScrollTop () {

    const [showButton, setShowButton] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <>
            {showButton && (
                <HashLink to="">
                    <button onClick={scrollToTop}>
                        <BsFillArrowUpCircleFill className="fixed bottom-12 right-12" size="2.5em" style={{textIndent: -9999}}/>
                    </button>
                </HashLink>
            )}
            
        </>
        
    )
}

export default ScrollTop;

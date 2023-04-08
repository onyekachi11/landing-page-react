import React ,{useState,useEffect}from 'react'
import HeroImg from '../assets/images/image-hero-mobile.png'
import HeroImgDesktop from '../assets/images/image-hero-desktop.png'
import Databiz from '../assets/images/client-databiz.svg'
import Audiophile from '../assets/images/client-audiophile.svg'
import Meet from '../assets/images/client-meet.svg'
import Maker from '../assets/images/client-maker.svg'


const MainBody = () => {
    const [desktopImg, setDesktopImg] = useState(Window.innerWidth >= 600)

    const updateMedia = () => {
    setDesktopImg(window.innerWidth >= 600);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize",updateMedia);
    });

  return (
    <>
    <div className='hero-wrapper'>
        <div  className='hero-img'>
            <img src={desktopImg ? HeroImgDesktop : HeroImg} alt="" />
        </div>
        <div className='hero-text'>
            <h1>
                Make remote work
            </h1>
            <p>Get you team in sync, no matter your location. Streaming processes, create team rituals, and watch productivity soar.</p>
        <div className='hero-btn'>
            <button>Learn More</button>
        </div>
        <div className='partner-wrapper'>
        <div className='partner-img'>
           <img src={Databiz} alt="" /> 
        </div>
        <div className='partner-img'>
           <img src={Audiophile} alt="" /> 
        </div>
        <div className='partner-img'>
           <img src={Meet} alt="" /> 
        </div>
        <div className='partner-img'>
           <img src={Maker} alt="" /> 
        </div>
    </div>
        </div>
    </div>
    </>
  )
}

export default MainBody
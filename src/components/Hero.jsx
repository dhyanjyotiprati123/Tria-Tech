import React from 'react'
import Navbar from './Navbar'
import hero from "../assets/hero.png"
import Mouse from "../assets/Frame.svg"
import { motion } from 'framer-motion'

const Hero = () => {
    const HeaderVariant={
        hidden:{
            y: -200,
            opacity: 0
        },
        show:{
            y: 0,
            opacity: 1,
            transition:{
                type: "spring",
                damping: 10
            }
        }
    }

    const BtnVarient={
        hidden:{
            y: 200,
            opacity: 0,
            scale: .5
        },
        show:{
            y: 0,
            opacity: 1,
            scale:  1,
            transition:{
                type: "spring",
                damping: 10
            }
        }
    }

    const ImgVarient={
        hidden:{
            scale: 0,
            opacity: 0
        },
        show:{
            scale: 1,
            opacity: 1,
            transition:{
                type: "spring",
                duration: 3
            }
        }
    }
    return (
        <div className="hero">
            <Navbar />
            <div className="hero-wrapper">
               <div className="hero-left">
                  <div className="hero-box">
                   <motion.h1 className="main-heading"
                      variants={HeaderVariant}
                      animate="show"
                      initial="hidden"
                   >Lorem ipsum dolor sit amet. <br />
                   Lorem ipsum dolor sit amet. </motion.h1>

                   <motion.button className="btn"
                      variants={BtnVarient}
                      initial="hidden"
                      animate="show"
                   >contact us</motion.button>
                   </div>
               </div>
               <div className="hero-right">
                 <motion.img src={hero} alt="" className="hero-cover"  variants={ImgVarient} initial="hidden" animate="show"  />
               </div>
            </div>

            <div className="hero-mouse">
               <img src={Mouse} alt="" className="hero-scroll" />
            </div>
        </div>
    )
}

export default Hero

import React from 'react'
import UseScroll from '../Animation/Usescroll'
import { motion } from 'framer-motion'
import { SectionAnimation } from '../Animation/Animation'

const SectionRight = ({pic}) => {
    const [element, controls]= UseScroll()
    return (
        <div  className="section">
            <div className="container">
              <div className="section-wrapper">
               <motion.div className="section-left" ref={element}
                 variants={SectionAnimation}
                 animate={controls}
               >
                   <h2 className="sub-heading">Lorem ipsum</h2>
                   <p className="para">Qui dolorum quos eum tempora quod ut laboriosam libero aut itaque unde sed laudantium excepturi. Ea consequatur internos ut saepe eaque ea aliquid repellendus est sunt dolore ut tenetur galisum.</p>
               </motion.div>
               <motion.div className="section-right" ref={element}
                 variants={SectionAnimation}
                 animate={controls}
               >
                  <figure className="section-figure">
                     <img src={pic} alt="" className="section-pic" />
                  </figure>
               </motion.div>
             </div>
            </div>
        </div>
    )
}

export default SectionRight

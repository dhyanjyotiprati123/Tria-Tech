import React from 'react'
import UseScroll from '../Animation/Usescroll'
import { motion } from 'framer-motion'
import { SectionAnimation } from '../Animation/Animation'

const SectionLeft = ({pic}) => {
    const [element, controls]=UseScroll()
    return (
        <div className="section">
            <div className="container">
              <div className="section-wrapper">
                 <motion.div className="section-left" ref={element}
                   variants={SectionAnimation}
                   animate={controls}
                 >
                   <figure className="section-figure">
                      <img src={pic} alt="" className="section-pic" />
                   </figure>
                 </motion.div>
                 <motion.div className="section-right" ref={element}
                   variants={SectionAnimation}
                   animate={controls}
                 >
                    <h2 className="sub-heading">Lorem ipsum</h2>
                    <p className="para">Lorem ipsum dolor sit amet. Est recusandae dolores hic alias quas et tempora obcaecati qui rerum exercitationem aut nesciunt maiores ea alias exercitationem. Aut deleniti mollitia sit voluptatum nemo eum rerum molestias 33 facere odit qui laboriosam quia.</p>
                 </motion.div>
              </div>
            </div>
        </div>
    )
}

export default SectionLeft

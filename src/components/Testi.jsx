import React from 'react'
import Testicard from './Testicard'

const Testi = () => {

    return (
        <div className="testi">
            <div className="testi-header">
               <h1 className="testi-heading">Testimonials</h1>
            </div>

            <div className="testi-cards">
               <Testicard />
               <Testicard />
               <Testicard />
            </div>

            <div className="testi-dots">
              <div className="testi-span"></div>
              <div className="testi-span"></div>
              <div className="testi-span"></div>
              <div className="testi-span"></div>
            </div>
        </div>
    )
}

export default Testi

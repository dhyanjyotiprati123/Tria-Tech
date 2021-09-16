import React from 'react'
import Hero from './components/Hero'
import SectionLeft from './components/SectionLeft'
import "./style/main.css"
import Section1 from "./assets/section1.png"
import Section2 from "./assets/section2.png"
import Section3 from "./assets/section3.png"
import SectionRight from './components/SectionRight'
import Testi from './components/Testi'
import Last from "./assets/last.png"
import Question from './components/Question'
import Footer from './components/Footer'

const App = () => {
  const Inner=window.innerWidth;
  return (
    <div className="app">
       <Hero />
       {Inner > 576?
        <div>
       <SectionLeft pic={Section1} />
       <SectionRight pic={Section2} />
       <SectionLeft pic={Section3} />
       </div>:
       <div>
          <SectionLeft pic={Section1} />
          <SectionLeft pic={Section2} />
          <SectionLeft pic={Section3} />
       </div>
      }
      
       <Testi />
       <div className="section-last">
          <SectionLeft pic={Last} />
       </div>
       <Question />
       <Footer />
    </div>
  )
}

export default App


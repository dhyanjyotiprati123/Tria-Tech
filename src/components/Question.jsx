import React from 'react'
import {FaWhatsapp, FaPhoneAlt} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"

const Question = () => {
    return (
        <div className="ques">
            <h1 className="main-heading text-dark">Questions?</h1>
            <p className="para-light">Help is free, and TritaTech  is ready to assist you to <br />
            make sure everything goes smoothly
             </p>

             <div className="ques-icons">
               <AiOutlineMail style={{fontSize: "4rem", color: "#3082B5"}} />
               <FaPhoneAlt style={{fontSize: "4rem", color: "#3082B5"}} />
               <FaWhatsapp style={{fontSize: "4rem", color: "#3082B5"}} />
             </div>
        </div>
    )
}

export default Question


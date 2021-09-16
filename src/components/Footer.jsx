import React from 'react'
import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai"
import {GrLinkedinOption} from "react-icons/gr"
import {RiArrowUpSLine} from "react-icons/ri"

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-list">
               <li className="footer-item">Lorem ipsum</li>
               <li className="footer-item">Lorem ipsum</li>
               <li className="footer-item">Lorem ipsum</li>
               <li className="footer-item">Lorem ipsum</li>
            </ul>

            <div className="footer-logo">
                <div className="footer-brand"></div>
            </div>

            <div className="footer-icons">
               <AiOutlineTwitter style={{fontSize: "3rem", color: "white"}} />
               <GrLinkedinOption style={{fontSize: "3rem", color: "white"}} />
               <AiOutlineInstagram style={{fontSize: "3rem", color: "white"}} />
               <AiFillFacebook style={{fontSize: "3rem", color: "white"}} />

            </div>

            <div className="footer-about">
               <span className="footer-info">Terms of service - Privacy policy -  © 2021 Tritatech</span>
               <span className="footer-info">Website By TritaTech</span>
            </div>

            <div className="footer-back">
               <RiArrowUpSLine  style={{fontSize: "4rem", color: "white"}} />
               <span className="footer-top">BACK TO TOP</span>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Bottom.css' 

function Bottom() {
  return (
    <div>
        
        <div className="footer">
            <p className="info-footer">
                Mauii-Flix Entertaiment ℗
            </p>
            <ul className="list-footer">
                <li className="items-footer"><FaFacebook /></li>
                <li className="items-footer"><FaInstagram /></li>
                <li className="items-footer"><FaYoutube /></li>
            </ul>
        </div>
    </div>
  )
}

export default Bottom
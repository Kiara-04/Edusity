import React from "react";
import './Footer.css';

function Footer() {

const d = new Date();
let year = d.getFullYear();

    return(
        <div className="footer">
            <p>© {year} Edusity. All rights reserved.</p>
            <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    );
}

export default Footer;
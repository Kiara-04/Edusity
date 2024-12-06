import React from "react";
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

function Contact() {
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a massage<img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu mollis nisl. Nam vitae velit augue. Maecenas ultrices ligula sit amet enim tristique, et pretium tellus tempor. Morbi ultrices faucibus sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul>
                    <li><img src={mail_icon}  alt="" />Contact@Edusity.com</li>
                    <li><img src={phone_icon}  alt="" />+79 865-330-2569</li>
                    <li><img src={location_icon} alt="" />67 Maecenas Street, California</li>
                </ul>
            </div>
            <div className="contact-col">
                <form>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required/>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
                    <label>Message</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit<img src={white_arrow} alt="" /></button>
                </form>
                {/* <span>{Sending...}</span> */}
            </div>
        </div>
    );
}

export default Contact;
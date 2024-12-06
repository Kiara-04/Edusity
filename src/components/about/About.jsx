import React from "react";
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

function About({setPlayState}) {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img"/>
                <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nuturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio sapien, eleifend fermentum tellus a, accumsan pellentesque eros. Nunc non erat dolor. Donec quis dignissim quam. Sed ac leo a nisl pulvinar tincidunt sed eu felis. Nullam volutpat, odio id tempor imperdiet, metus dui interdum erat, vel tempor mi erat vitae leo. Morbi faucibus sit amet felis ac cursus. Donec luctus malesuada leo, et pulvinar dui accumsan in.</p>
                <p>Praesent gravida, nisi at consectetur consectetur, dui ex placerat metus, quis dapibus sapien lorem sit amet felis. Nulla a rutrum tortor. Phasellus in aliquam neque. Integer consectetur semper elementum. Vestibulum egestas posuere lectus a consequat. Nam a tortor sed odio auctor ultricies. Aliquam vitae cursus dui. Aliquam mollis ultrices pretium. In imperdiet nulla sed nulla porta, eu tincidunt lacus luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus</p>
                <p>Nunc tincidunt convallis urna. Aenean scelerisque ipsum quis vulputate convallis. Donec id vestibulum elit. In vel nisi nibh. Ut metus lacus, bibendum quis viverra ac, consectetur id tellus. Morbi et efficitur ligula. Nulla facilisi.</p>
            </div>
        </div>
    );
}

export default About;
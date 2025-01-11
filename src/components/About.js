import React from 'react';
import '../App.css';
import udemyLogo from '../images/udemy.jpg';
import cs50Logo from '../images/cs50.png';
import codecademyLogo from '../images/codecademy.svg';
import freecodecampLogo from '../images/freeCodeCamp.png';
import W3SchoolsLogo from '../images/W3Schools.svg';
import colorCodeLogo from '../images/colorcode.jpg';
import leetCodeLogo from '../images/leetCode.png';
import ztmLogo from '../images/ZTM.png';

const About = () => {
    const logos = [
        { name: 'Udemy', src: udemyLogo },
        { name: 'CS50', src: cs50Logo },
        { name: 'Codecademy', src: codecademyLogo },
        { name: 'FreeCodeCamp', src: freecodecampLogo },
        { name: 'W3Schools', src: W3SchoolsLogo },
        { name: 'ColorCode.io', src: colorCodeLogo },
        { name: 'ZeroToMastery', src: ztmLogo },
        { name: 'LeetCode', src: leetCodeLogo },
    ];

    const StudiesSection = ({ logos }) => (
          <div className="logos study">
            {logos.map((logo, index) => (
              <img key={index} className="logo study-img" id={logo.name} src={logo.src} alt={`${logo.name} Logo`} title={`${logo.name} Logo`} />
            ))}
          </div>
      );

    return (
        <div className="about_main container about">
            <div className="about_main main container">
                <section className="section">
                    <h2 className="center-text">Introduction</h2>
                    <p className='p'>
                        Welcome to my personal project! Here you will find information about me and my interests. Thank you for visiting!
                    </p>
                </section>
                <section className="section">
                    <h2 className="center-text">Background</h2>
                    <p className='p'>
                        I dedicated 15 years as a nurse to helping others and solving complex healthcare challenges, honing analytical skills, attention to detail, and critical thinking. Driven by a passion for problem-solving, I transitioned into software development, focusing on creating innovative solutions through technology. Over the past few years, I’ve mastered full-stack development, working with languages and frameworks like JavaScript, Python, React, and Node.js. I thrive on continuous learning, tackling new challenges, and exploring emerging technologies to deepen my expertise and contribute to impactful tech projects.
                    </p>
                </section>
                <section className="section">
                    <h2 className="center-text">Hobbies</h2>
                    <ul className="indented-list">
                        <li className='p'>Coding</li>
                        <li className='p'>Tennis</li>
                        <li className='p'>Gaming</li>
                        <li className='p'>Gardening/Landscaping</li>
                        <li className='p'>Learning new technologies</li>
                    </ul>
                </section>  
                <section className="section">
                    <h2 className="center-text">Continuing-Education</h2>
                    <StudiesSection logos={logos} />  
                </section>
            </div>
        </div>
    );
};

export default About;

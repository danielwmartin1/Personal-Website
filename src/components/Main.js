import React from 'react';
import '../App.css';
import '../main.css';
import '../buttons.css';

import profileImg from '../images/profile.jpg';
import visualStudioLogo from '../images/visualstudio.png';
import vscodeLogo from '../images/vscode.png';
import githubLogo from '../images/github.png';
import gitLogo from '../images/git.png';
import viteLogo from '../images/Vitejs-logo.svg';
import vercelLogo from '../images/vercel.svg';
import htmlLogo from '../images/HTML.png';
import cssLogo from '../images/CSS.png';
import bootstrapLogo from '../images/bootstrap.png';
import tailwindLogo from '../images/tailwind.png';
import jsLogo from '../images/JS.png';
import jQueryLogo from '../images/jQuery.png';
import typeScriptLogo from '../images/ts-logo-128.png';
import reactLogo from '../images/React.png';
import angularLogo from '../images/angular.svg';
// eslint-disable-next-line
import vueLogo from '../images/vue.png';
import nodeLogo from '../images/node.png';
import npmLogo from '../images/npm.png';
import restapiLogo from '../images/restapi.svg';
import expressLogo from '../images/express.png';
import nextjsLogo from '../images/next-js.svg';
import pythonDjangoLogo from '../images/django-python-logo.png';
import flaskLogo from '../images/flask.svg';
import cLogo from '../images/C.png';
import cPlusLogo from '../images/cPlus.png';
import csharpLogo from '../images/Csharp.png';
import mongodbLogo from '../images/mongodb.svg';
import netLogo from '../images/.NET.png';
import sqlLogo from '../images/SQL.png';
import postgresqlLogo from '../images/postgresql.png';
import sqliteLogo from '../images/sqlite.png';
import supabaseLogo from '../images/supabaseLogo.png';
import jestLogo from '../images/jest.svg';
import postmanLogo from '../images/postman.png';


/**
 * An array of logo objects representing various IDEs, tools, frontend technologies,
 * backend technologies, programming languages, and databases.
 * Each object contains the source path of the logo image and the name of the technology.
 *
 * @type {Array<{src: string, name: string}>}
 * @property {string} src - The source path of the logo image.
 * @property {string} name - The name of the technology.
 *
 * @example
 * // Accessing the first logo object
 * const firstLogo = logos[0];
 * console.log(firstLogo.src); // Output: visualStudioLogo
 * console.log(firstLogo.name); // Output: 'VisualStudio'
 */
const logos = [
  // IDEs and Tools
  { src: visualStudioLogo, name: 'VisualStudio' },
  { src: vscodeLogo, name: 'VSCode' },
  { src: githubLogo, name: 'GitHub' },
  { src: gitLogo, name: 'Git' },
  { src: npmLogo, name: 'NPM' },
  { src: postmanLogo, name: 'Postman' },
  { src: viteLogo, name: 'Vite' },
  { src: vercelLogo, name: 'Vercel' },

  // Frontend Technologies
  { src: htmlLogo, name: 'HTML' },
  { src: cssLogo, name: 'CSS' },
  { src: bootstrapLogo, name: 'Bootstrap' },
  { src: tailwindLogo, name: 'TailwindCSS' },
  { src: jsLogo, name: 'JavaScript' },
  { src: jQueryLogo, name: 'jQuery'},
  { src: typeScriptLogo, name: 'TypeScript' },
  // Unit-Testing
  { src: jestLogo, name: 'Jest' },

  // Frontend Frameworks
  { src: reactLogo, name: 'React' },
  { src: angularLogo, name: 'Angular' },
  //{ src: vueLogo, name: 'Vue' },
  { src: nextjsLogo, name: 'NextJS' },

  // Backend Technologies
  { src: nodeLogo, name: 'NodeJS' },
  { src: restapiLogo, name: 'REST API' },
  { src: expressLogo, name: 'ExpressJS' },
  { src: pythonDjangoLogo, name: 'Python-Django' },
  { src: flaskLogo, name: 'Flask' },


  // Backend Languages
  { src: cLogo, name: 'C' },
  { src: cPlusLogo, name: 'C++' },
  { src: csharpLogo, name: 'C#' },

  
  // Backend Frameworks
  { src: netLogo, name: '.NET' },

  // Databases
  { src: mongodbLogo, name: 'MongoDB' },
  { src: sqlLogo, name: 'SQL' },
  { src: sqliteLogo, name: 'SQLite' },
  { src: postgresqlLogo, name: 'PostgreSQL' },
  { src: supabaseLogo, name: 'Supabase' }
];

const ProfileSection = () => (
  <div className="container">
    <img id="profile" src={profileImg} alt="Profile Pic" title="Profile Pic" />
    <h1 id="name" className='headings'>Daniel Martin</h1>
    <p className="p">
    Welcome! I’m a full-stack developer passionate about technology and problem-solving. Over the past few years, I’ve honed my skills in programming languages like JavaScript and Python, as well as frameworks such as React and Node.js. I thrive in innovative environments, embrace continuous learning, and love exploring emerging technologies to create impactful solutions. Let’s build something amazing together!</p>
  </div>
);

const ExperienceSection = () => (
  <div className="container">
    <h2 id="experience" className='headings'>Experience</h2>
    <p className="p">
      With extensive hands-on experience in web development, I have developed strong expertise in HTML, CSS, JavaScript, and modern frameworks such as React. My journey includes working on a wide range of projects, from small business websites to large-scale web applications, giving me a comprehensive understanding of web technologies and their practical applications.
    </p>
  </div>
);

const TechnologiesSection = () => (
  <div className="container">
    <h2 id="tech" className='headings'>Technologies</h2>
    <div className="logos">
      {logos.map((logo, index) => (
        <img 
          key={index} 
          className="logo" 
          id={logo.name} 
          src={logo.src} 
          alt={`${logo.name} Logo`} 
          title={`${logo.name} Logo`} 
          style={logo.name === 'REST API' ? { width: '5rem', height: '5rem' } : {}}
        />
      ))}
    </div>
  </div>
);

const Main = () => (
  <div className="container">
    <ProfileSection />
    <ExperienceSection />
    <TechnologiesSection />
  </div>
);

export default Main;

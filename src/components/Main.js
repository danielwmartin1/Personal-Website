import React from 'react';
import '../styles/App.css';
import '../styles/Main.css';
import '../styles/buttons.css'; // Changed 'Buttons.css' to 'buttons.css' to match the correct case
import profileImg from '../images/profile.jpg';
import visualStudioLogo from '../images/visualstudio.png';
import vscodeLogo from '../images/vscode.png';
import githubLogo from '../images/github.png';
import gitLogo from '../images/git.png';
import postmanLogo from '../images/postman.png';
import viteLogo from '../images/Vitejs-logo.svg';
import vercelLogo from '../images/vercel.svg';
import htmlLogo from '../images/HTML.png';
import cssLogo from '../images/CSS.png';
import bootstrapLogo from '../images/bootstrap.png';
import tailwindLogo from '../images/tailwind.png';
import jsLogo from '../images/JS.png';
import jQueryLogo from '../images/jQuery.png';
import typeScriptLogo from '../images/ts-logo-128.png';
import jestLogo from '../images/jest.svg';
import reactLogo from '../images/React.png';
import nextjsLogo from '../images/next-js.svg';
import angularLogo from '../images/angular.svg';
import reduxLogo from '../images/redux.png';
import restapiLogo from '../images/restapi.svg';
import nodeLogo from '../images/node.png';
import expressLogo from '../images/express.png';
import pythonDjangoLogo from '../images/django-python-logo.png';
import flaskLogo from '../images/flask.svg';
import cLogo from '../images/C.png';
import cPlusLogo from '../images/cPlus.png';
import csharpLogo from '../images/Csharp.png';
import netLogo from '../images/.NET.png';
import mongodbLogo from '../images/mongodb.svg';
import sqlLogo from '../images/SQL.png';
import sqliteLogo from '../images/sqlite.png';
import mysqlLogo from '../images/mysql.png';
import postgresqlLogo from '../images/postgresql.png';
import supabaseLogo from '../images/supabaseLogo.png';
import netlifyLogo from '../images/netlify.png';

const logos = [
  { src: visualStudioLogo, name: 'VisualStudio' },
  { src: vscodeLogo, name: 'VSCode' },
  { src: githubLogo, name: 'GitHub' },
  { src: gitLogo, name: 'Git' },
  { src: postmanLogo, name: 'Postman' },
  { src: viteLogo, name: 'Vite' },
  { src: vercelLogo, name: 'Vercel' },
  { src: netlifyLogo, name: 'Netlify' },
  { src: htmlLogo, name: 'HTML' },
  { src: cssLogo, name: 'CSS' },
  { src: bootstrapLogo, name: 'Bootstrap' },
  { src: tailwindLogo, name: 'TailwindCSS' },
  { src: jsLogo, name: 'JavaScript' },
  { src: jQueryLogo, name: 'jQuery'},
  { src: typeScriptLogo, name: 'TypeScript' },
  { src: jestLogo, name: 'Jest' },
  { src: reactLogo, name: 'React' },
  { src: reduxLogo, name: 'Redux' },
  { src: nextjsLogo, name: 'NextJS' },
  { src: angularLogo, name: 'Angular' },
  { src: restapiLogo, name: 'REST API' },
  { src: nodeLogo, name: 'NodeJS' },
  { src: expressLogo, name: 'ExpressJS' },
  { src: pythonDjangoLogo, name: 'Python-Django' },
  { src: flaskLogo, name: 'Flask' },
  { src: cLogo, name: 'C' },
  { src: cPlusLogo, name: 'C++' },
  { src: csharpLogo, name: 'C#' },
  { src: netLogo, name: '.NET' },
  { src: mongodbLogo, name: 'MongoDB' },
  { src: supabaseLogo, name: 'Supabase' },
  { src: sqlLogo, name: 'SQL' },
  { src: sqliteLogo, name: 'SQLite' },
  { src: mysqlLogo, name: 'MySQL'},
  { src: postgresqlLogo, name: 'PostgreSQL' },
];

const ProfileSection = () => (
  <div className="container">
    <img id="profile" src={profileImg} alt="Daniel Martin" title="Profile Picture" />
    <h1 id="name" className='headings'>Daniel Martin</h1>
    <p className="p">
      I am a dedicated software engineer with a strong focus on developing scalable and high-performance applications. Proficient in JavaScript, C#, Python, React, .NET, and Node.js, I specialize in delivering robust, efficient, and user-centric solutions. I excel in dynamic environments that prioritize innovation, clean architecture, and modern engineering practices. I am eager to collaborate with a forward-thinking team committed to crafting exceptional applications that drive meaningful impact.
    </p>
  </div>
);

const ExperienceSection = () => (
  <div className="container">
    <h2 id="experience" className='headings'>Experience</h2>
    <p className="p">
      I have a wealth of experience in full-stack web and software development, utilizing a wide range of technologies including React, Angular, Python with Flask, JavaScript with Node.js, and C# with .NET. My projects span from building interactive websites for small businesses to designing enterprise-level applications with a focus on scalability and performance. Furthermore, I am skilled in database management with SQL Server, PostgreSQL, and MongoDB, as well as API development to enable smooth software integration.
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
          style={logo.name === 'REST API' ? { width: '3.75rem', height: '3.75rem', outline: '1px solid aqua' } : 
                 logo.name === 'SQLite' ? { transform: 'scale(1.15)' } : 
                 logo.name === 'Flask' ? { transform: 'scale(1.05)' } : {}}
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

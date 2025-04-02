import React from "react";
import '../styles/App.css';
import '../styles/Projects.css';

const Projects = () => {
    const projectLinks = [
        { href: "https://pro1construction.vercel.app/", text: "My First Website", description: "A simple construction company website." },
        { href: "https://dwm-tictactoe.vercel.app/", text: "Tic-Tac-Toe", description: "A classic Tic-Tac-Toe game built with React." },
        { href: "https://dwm-simonsays.vercel.app/", text: "Simon Says", description: "A memory game inspired by Simon Says." },
        { href: "https://dwm-acls-algorithm.vercel.app/", text: "Interactive ACLS Algorithm", description: "An interactive tool for ACLS algorithms." },
        //{ href: "https://dwm-ecommerce.vercel.app/", text: "E-Commerce (Frontend)", description: "A frontend for an e-commerce platform." },
        { href: "https://dwm-weatherapp.vercel.app/", text: "Weather App", description: "A weather forecasting app using APIs." },
        { href: "https://dwm-todolist-react.vercel.app/", text: "React.JS To-Do List", description: "A to-do list application built with React." },
        { href: "https://dwm-todolist-api.vercel.app/tasks/", text: "React.JS To-Do List API", description: "A to-do list app integrated with an API." },
        { href: "https://dwm-todolist-next.vercel.app/", text: "Next.JS To-Do List", description: "A to-do list app built with Next.js." },
        { href: "https://dwm-todolist-angular.vercel.app/", text: "Angular.TS To-Do List", description: "A to-do list app built with Angular." },
        { href: "https://dwm-intermediate-react-todolist.vercel.app/", text: "React Intermediate To-Do List", description: "An advanced to-do list app in React." },
        { href: "https://dwm-intermediate-react-todolist-api.vercel.app/api/todos/", text: "React Intermediate To-Do List API", description: "An API-powered advanced to-do list app." }
    ];

    return (
        <div className='container main project-div'>
            <div className="portfolio-container">
                <h1 className="portfolio">Portfolio</h1>
                <div
                    id="project-link"
                    key="project-link" 
                    className="project-link anchor project divProject">
                    <a id="githubRepo" className='anchor project' style={{textDecoration: 'underline', paddingBottom: '1rem'}} href="https://github.com/danielwmartin1?tab=repositories" target="_blank" rel="noopener noreferrer" title="https://github.com/danielwmartin1?tab=repositories">
                        My GitHub Repositories
                    </a>
                    <div className='project-link'>
                        {projectLinks.map((project, index) => (
                            <div key={index}>
                                <a className='anchor project' href={project.href} target="_blank" rel="noopener noreferrer" title={project.href}>
                                    {project.text}
                                </a>
                                <p className="projectDescription">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;
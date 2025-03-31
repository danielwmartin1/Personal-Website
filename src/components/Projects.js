import React from "react";
import '../styles/App.css';

/**
 * Projects component renders a list of project links and a link to the user's GitHub repositories.
 *
 * @component
 * @example
 * return (
 *   <Projects />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 *

 */
const Projects = () => {
    const projectLinks = [
        { href: "https://pro1construction.vercel.app/", text: "My First Website" },
        { href: "https://dwm-tictactoe.vercel.app/", text: "Tic-Tac-Toe" },
        { href: "https://dwm-simonsays.vercel.app/", text: "Simon Says" },
        { href: "https://dwm-acls-algorithm.vercel.app/", text: "Interactive ACLS Algorithm" },
        //{ href: "https://dwm-ecommerce.vercel.app/", text: "E-Commerce (Frontend)" },
        { href: "https://dwm-weatherapp.vercel.app/", text: "Weather App" },
        { href: "https://dwm-todolist-react.vercel.app/", text: "React.JS To-Do List" },
        { href: "https://dwm-todolist-api.vercel.app/tasks/", text: "React.JS To-Do List API" },
        { href: "https://dwm-todolist-next.vercel.app/", text: "Next.JS To-Do List" },
        { href: "https://dwm-todolist-angular.vercel.app/", text: "Angular.TS To-Do List" },
        { href: "https://dwm-intermediate-react-todolist.vercel.app/", text: "React Intermediate To-Do List"},
        { href: "https://dwm-intermediate-react-todolist-api.vercel.app/api/todos/", text: "React Intermediate To-Do List API" }
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;
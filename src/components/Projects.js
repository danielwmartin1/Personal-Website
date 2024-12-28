import React from "react";
import "../App.css";

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
 * @description
 * The Projects component displays a portfolio section containing links to various projects and a link to the user's GitHub repositories.
 * Each project link is rendered as an anchor element with the project name and URL.
 *
 * @notes
 * - The project links are stored in an array of objects, each containing `href` and `text` properties.
 * - The GitHub repositories link is styled with an underline and padding at the bottom.
 * - The component uses the `map` function to iterate over the `projectLinks` array and render each project link.
 */
const Projects = () => {
    const projectLinks = [
        { href: "https://pro1construction.vercel.app/", text: "My First Website" },
        { href: "https://dwm-tictactoe.vercel.app/", text: "Tic-Tac-Toe" },
        { href: "https://dwm-simonsays.vercel.app/", text: "Simon Says" },
        { href: "https://acls-algorithm.vercel.app/", text: "ACLS Algorithm" },
        { href: "https://dwm-ecommerce.vercel.app/", text: "E-Commerce Frontend" },
        { href: "https://dwm-weatherapp.vercel.app/", text: "Weather App" },
        { href: "https://dwm-supabase-todolist.vercel.app/", text: "Supabase To-Do List" },
        { href: "https://dwm-todolist.vercel.app/", text: "To-Do List" },
        { href: "https://dwm-todolist-api.vercel.app/tasks/", text: "To-Do List API" },
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
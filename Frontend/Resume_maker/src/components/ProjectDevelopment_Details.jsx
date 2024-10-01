// import React, { useState } from 'react';

// const projectFormClasses = 'border rounded p-2 w-full';
// const projectContainerClasses = 'project mb-4 border p-4 rounded-lg';
// const buttonClasses = 'p-2 rounded';

// const ProjectForm = ({ onBack }) => {
//     const [projects, setProjects] = useState([{ title: '', link: '', description: '' }]);

//     const handleInputChange = (index, e) => {
//         const { name, value } = e.target;
//         const newProjects = [...projects];
//         newProjects[index] = { ...newProjects[index], [name]: value };
//         setProjects(newProjects);
//     };

//     const addProject = () => {
//         setProjects([...projects, { title: '', link: '', description: '' }]);
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h2 className="text-xl font-bold mb-4">Projects Developed</h2>
//             <div id="project-list">
//                 {projects.map((project, index) => (
//                     <div key={index} className={projectContainerClasses}>
//                         <h3 className="font-semibold">Project {index + 1}</h3>
//                         <label className="block mt-2">Title *</label>
//                         <input
//                             type="text"
//                             name="title"
//                             value={project.title}
//                             className={projectFormClasses}
//                             placeholder="Enter project title"
//                             required
//                             onChange={(e) => handleInputChange(index, e)}
//                         />
//                         <label className="block mt-2">Link *</label>
//                         <input
//                             type="url"
//                             name="link"
//                             value={project.link}
//                             className={projectFormClasses}
//                             placeholder="Enter project link"
//                             required
//                             onChange={(e) => handleInputChange(index, e)}
//                         />
//                         <label className="block mt-2">Description *</label>
//                         <textarea
//                             name="description"
//                             value={project.description}
//                             className={projectFormClasses}
//                             placeholder="Enter project description"
//                             required
//                             onChange={(e) => handleInputChange(index, e)}
//                         ></textarea>
//                     </div>
//                 ))}
//             </div>
//             <button id="add-project" className={`bg-secondary text-secondary-foreground hover:bg-secondary/80 ${buttonClasses}`} onClick={addProject}>
//                 Add New Project
//             </button>
//             <div className="mt-4">
//                 <button className={`bg-zinc-300 text-zinc-700 ${buttonClasses} mr-2`} onClick={onBack}>Back</button>
//                 <button className={`bg-blue-500 text-white ${buttonClasses}`}>Next</button>
//             </div>
//         </div>
//     );
// };

// export default ProjectForm;


//ADDED BY NIKITA

import React, { useState } from 'react';
import axios from 'axios';

const projectFormClasses = 'border rounded p-2 w-full';
const projectContainerClasses = 'project mb-4 border p-4 rounded-lg';
const buttonClasses = 'p-2 rounded';

const ProjectForm = ({ onBack }) => {
    // State to manage multiple projects
    const [projects, setProjects] = useState([{ title: '', link: '', description: '' }]);

    // Handle input change for a specific project
    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const newProjects = [...projects];
        newProjects[index] = { ...newProjects[index], [name]: value };
        setProjects(newProjects);
    };

    // Add a new empty project form
    const addProject = () => {
        setProjects([...projects, { title: '', link: '', description: '' }]);
    };

    // Submit the form (API call to add projects)
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Loop through each project and send them individually to the API
            for (const project of projects) {
                await axios.post('http://localhost:5000/api/projects', project);
                console.log('Project added:', project);
            }
            alert('Projects added successfully!');
        } catch (error) {
            console.error('Error adding projects:', error);
            alert('Failed to add projects. Please check the console for errors.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Projects Developed</h2>
            <form onSubmit={handleSubmit}>
                <div id="project-list">
                    {projects.map((project, index) => (
                        <div key={index} className={projectContainerClasses}>
                            <h3 className="font-semibold">Project {index + 1}</h3>
                            <label className="block mt-2">Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={project.title}
                                className={projectFormClasses}
                                placeholder="Enter project title"
                                required
                                onChange={(e) => handleInputChange(index, e)}
                            />
                            <label className="block mt-2">Link *</label>
                            <input
                                type="url"
                                name="link"
                                value={project.link}
                                className={projectFormClasses}
                                placeholder="Enter project link"
                                required
                                onChange={(e) => handleInputChange(index, e)}
                            />
                            <label className="block mt-2">Description *</label>
                            <textarea
                                name="description"
                                value={project.description}
                                className={projectFormClasses}
                                placeholder="Enter project description"
                                required
                                onChange={(e) => handleInputChange(index, e)}
                            ></textarea>
                        </div>
                    ))}
                </div>
                <button
                    id="add-project"
                    className={`bg-secondary text-secondary-foreground hover:bg-secondary/80 ${buttonClasses}`}
                    type="button"
                    onClick={addProject}
                >
                    Add New Project
                </button>
                <div className="mt-4">
                    <button
                        className={`bg-zinc-300 text-zinc-700 ${buttonClasses} mr-2`}
                        type="button"
                        onClick={onBack}
                    >
                        Back
                    </button>
                    <button
                        className={`bg-blue-500 text-white ${buttonClasses}`}
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;

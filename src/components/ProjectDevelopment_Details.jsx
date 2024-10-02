// ProjectForm.jsx
import React, { useState } from 'react';

const projectFormClasses = 'border rounded p-2 w-full';
const projectContainerClasses = 'project mb-4 border p-4 rounded-lg';
const buttonClasses = 'p-2 rounded';

const ProjectForm = ({ onBack, onNext }) => {
    const [projects, setProjects] = useState([{ title: '', link: '', description: '' }]);

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const newProjects = [...projects];
        newProjects[index] = { ...newProjects[index], [name]: value };
        setProjects(newProjects);
    };

    const addProject = () => {
        setProjects([...projects, { title: '', link: '', description: '' }]);
    };

    const handleNext = () => {
        if (projects.every(project => project.title && project.link && project.description)) {
            onNext();  // Call onNext when the form is properly filled
        } else {
            alert('Please fill in all project details.');
        }
       
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Projects Developede</h2>
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
            <button id="add-project" className={`bg-secondary text-secondary-foreground hover:bg-secondary/80 ${buttonClasses}`} onClick={addProject}>
                Add New Project
            </button>
            <div className="mt-4">
                <button className={`bg-zinc-300 text-zinc-700 ${buttonClasses} mr-2`} onClick={onBack}>Back</button>
                <button className={`bg-blue-500 text-white ${buttonClasses}`} onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default ProjectForm;

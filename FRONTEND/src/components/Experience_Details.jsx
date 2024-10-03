// // ExperienceDetails.jsx
// import React, { useState } from 'react';

// const sharedClassNames = {
//     border: 'border border-border',
//     rounded: 'rounded',
//     p2: 'p-2',
//     mb4: 'mb-4',
//     mb2: 'mb-2',
//     gridCols: 'grid grid-cols-1 md:grid-cols-2 gap-4',
//     flex: 'flex items-center',
//     bgWhite: 'bg-white',
//     bgCard: 'dark:bg-card',
//     shadow: 'shadow-md',
//     bgSecondary: 'bg-secondary',
//     textSecondaryForeground: 'text-secondary-foreground',
//     bgMuted: 'bg-muted',
//     textMutedForeground: 'text-muted-foreground',
//     bgPrimary: 'bg-primary',
//     textPrimaryForeground: 'text-primary-foreground',
//     hoverBgSecondary: 'hover:bg-secondary/80',
//     hoverBgMuted: 'hover:bg-muted/80',
//     hoverBgPrimary: 'hover:bg-primary/80',
// };

// const ExperienceItem = ({ experienceCount }) => {
//     return (
//         <div className={`experience-item mb-4 p-4 ${sharedClassNames.border} rounded`}>
//             <div className={sharedClassNames.flex}>
//                 <span className="mr-2">✔️ Experience {experienceCount}</span>
//             </div>
//             <div className={sharedClassNames.gridCols}>
//                 <input type="text" placeholder="Institute/Organisation *" className={`${sharedClassNames.border} ${sharedClassNames.p2} ${sharedClassNames.rounded}`} />
//                 <input type="text" placeholder="Position *" className={`${sharedClassNames.border} ${sharedClassNames.p2} ${sharedClassNames.rounded}`} />
//                 <input type="text" placeholder="Duration *" className={`${sharedClassNames.border} ${sharedClassNames.p2} ${sharedClassNames.rounded}`} />
//                 <textarea placeholder="Description *" className={`${sharedClassNames.border} ${sharedClassNames.p2} ${sharedClassNames.rounded}`} rows="3"></textarea>
//             </div>
//         </div>
//     );
// };

// const ExperienceDetails = ({ onBack,onNext }) => {  // Accept onBack prop
//     const [experienceItems, setExperienceItems] = useState([1]);

//     const addExperience = () => {
//         setExperienceItems([...experienceItems, experienceItems.length + 1]);
//     };

//     return (
//         <div className={`p-6 ${sharedClassNames.bgWhite} ${sharedClassNames.bgCard} ${sharedClassNames.rounded} ${sharedClassNames.shadow}`}>
//             <h2 className={`text-xl font-semibold ${sharedClassNames.mb4}`}>Experience Details</h2>
//             <div id="experience-container">
//                 {experienceItems.map((count) => (
//                     <ExperienceItem key={count} experienceCount={count} />
//                 ))}
//             </div>
//             <button onClick={addExperience} className={`bg-secondary ${sharedClassNames.textSecondaryForeground} ${sharedClassNames.hoverBgSecondary} ${sharedClassNames.p2} ${sharedClassNames.rounded} mt-4`}>Add Experience</button>
//             <div className="flex justify-between mt-6">
//                 <button className={`bg-muted ${sharedClassNames.textMutedForeground} ${sharedClassNames.hoverBgMuted} ${sharedClassNames.p2} ${sharedClassNames.rounded}`} onClick={onBack}>BACK</button> 
//                 <button className={`bg-primary ${sharedClassNames.textPrimaryForeground} ${sharedClassNames.hoverBgPrimary} ${sharedClassNames.p2} ${sharedClassNames.rounded}`} onClick={onNext}>NEXT</button>
//             </div>
//         </div>
//     );
// };

// export default ExperienceDetails;


import React, { useState } from 'react';
import axios from 'axios';

const sharedClassNames = {
    border: 'border border-border',
    rounded: 'rounded',
    p2: 'p-2',
    mb4: 'mb-4',
    mb2: 'mb-2',
    gridCols: 'grid grid-cols-1 md:grid-cols-2 gap-4',
    flex: 'flex items-center',
    bgWhite: 'bg-white',
    bgCard: 'dark:bg-card',
    shadow: 'shadow-md',
    bgSecondary: 'bg-secondary',
    textSecondaryForeground: 'text-secondary-foreground',
    bgMuted: 'bg-muted',
    textMutedForeground: 'text-muted-foreground',
    bgPrimary: 'bg-primary',
    textPrimaryForeground: 'text-primary-foreground',
    hoverBgSecondary: 'hover:bg-secondary/80',
    hoverBgMuted: 'hover:bg-muted/80',
    hoverBgPrimary: 'hover:bg-primary/80',
};

const ExperienceItem = ({ experienceCount, handleChange, experience }) => {
    return (
        <div className={`experience-item mb-4 p-4 ${sharedClassNames.border} rounded`}>
            <div className={sharedClassNames.flex}>
                <span className="mr-2">✔️ Experience {experienceCount}</span>
            </div>
            <div className={sharedClassNames.gridCols}>
                <input
                    type="text"
                    placeholder="Institute/Organisation *"
                    name="organization"
                    value={experience.organization}
                    onChange={(e) => handleChange(experienceCount - 1, e)}
                    className={`${sharedClassNames.border} ${sharedClassNames.p2} ${sharedClassNames.rounded}`}
                />
                <input
                    type="text"
                    placeholder="Position *"
                    name="position"
                    value={experience.position}
                    onChange={(e) => handleChange(experienceCount - 1, e)}
                    className={`${sharedClassNames.border} ${sharedClassNames.p2} ${sharedClassNames.rounded}`}
                />
                <input
                    type="text"
                    placeholder="Duration *"
                    name="duration"
                    value={experience.duration}
                    onChange={(e) => handleChange(experienceCount - 1, e)}
                    className={`${sharedClassNames.border} ${sharedClassNames.p2} ${sharedClassNames.rounded}`}
                />
                <textarea
                    placeholder="Description *"
                    name="description"
                    value={experience.description}
                    onChange={(e) => handleChange(experienceCount - 1, e)}
                    className={`${sharedClassNames.border} ${sharedClassNames.p2} ${sharedClassNames.rounded}`}
                    rows="3"
                ></textarea>
            </div>
        </div>
    );
};

const ExperienceDetails = ({ onBack, onNext }) => {
    const [experienceItems, setExperienceItems] = useState([{
        organization: '',
        position: '',
        duration: '',
        description: ''
    }]);

    const addExperience = () => {
        setExperienceItems([...experienceItems, {
            organization: '',
            position: '',
            duration: '',
            description: ''
        }]);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperiences = [...experienceItems];
        updatedExperiences[index][name] = value;
        setExperienceItems(updatedExperiences);
    };

    const submitExperience = async (experienceData) => {
        try {
            const response = await axios.post('http://localhost:5000/api/experience', experienceData);
            console.log('Experience added:', response.data);
        } catch (error) {
            console.error('Error adding experience:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        experienceItems.forEach(exp => {
            submitExperience(exp);  // Submit each experience item
        });
        onNext();  // Proceed to the next step after submission
    };

    return (
        <div className={`p-6 ${sharedClassNames.bgWhite} ${sharedClassNames.bgCard} ${sharedClassNames.rounded} ${sharedClassNames.shadow}`}>
            <h2 className={`text-xl font-semibold ${sharedClassNames.mb4}`}>Experience Details</h2>
            <div id="experience-container">
                {experienceItems.map((experience, index) => (
                    <ExperienceItem
                        key={index}
                        experienceCount={index + 1}
                        handleChange={handleChange}
                        experience={experience}
                    />
                ))}
            </div>
            <button onClick={addExperience} className={`bg-secondary ${sharedClassNames.textSecondaryForeground} ${sharedClassNames.hoverBgSecondary} ${sharedClassNames.p2} ${sharedClassNames.rounded} mt-4`}>
                Add Experience
            </button>
            <div className="flex justify-between mt-6">
                <button
                    className={`bg-muted ${sharedClassNames.textMutedForeground} ${sharedClassNames.hoverBgMuted} ${sharedClassNames.p2} ${sharedClassNames.rounded}`}
                    onClick={onBack}
                >
                    BACK
                </button>
                <button
                    className={`bg-primary ${sharedClassNames.textPrimaryForeground} ${sharedClassNames.hoverBgPrimary} ${sharedClassNames.p2} ${sharedClassNames.rounded}`}
                    onClick={handleSubmit}  // Handles form submission
                >
                    NEXT
                </button>
            </div>
        </div>
    );
};

export default ExperienceDetails;

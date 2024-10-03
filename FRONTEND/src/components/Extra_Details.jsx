// // ExtraDetails.jsx
// import React, { useState } from 'react';

// const sharedBorderClasses = 'border border-border rounded p-2 flex-1 mr-2';
// const sharedButtonClasses = 'p-2 rounded';
// const sharedPrimaryButtonClasses = 'bg-primary text-primary-foreground';
// const sharedSecondaryButtonClasses = 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
// const sharedRedButtonClasses = 'bg-red-500 text-white';
// const sharedBlueButtonClasses = 'bg-blue-500 text-white';

// const ExtraDetails = ({ onBack }) => {
//     const [skills, setSkills] = useState(['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5', 'Skill 6']);
//     const [interests, setInterests] = useState(['Interest 1', 'Interest 2', 'Interest 3', 'Interest 4']);

//     const addSkill = () => {
//         setSkills([...skills, `New Skill ${skills.length + 1}`]);
//     };

//     const addInterest = () => {
//         setInterests([...interests, `New Interest ${interests.length + 1}`]);
//     };

//     return (
//         <div className="p-6 bg-card rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Extra Details</h2>

//             <div className="mb-6">
//                 <h3 className="font-medium mb-2">Skills/Languages</h3>
//                 <div id="skills-container">
//                     {skills.map((skill, index) => (
//                         <div key={index} className="flex items-center mb-2">
//                             <input type="text" placeholder={skill} className={sharedBorderClasses} />
//                         </div>
//                     ))}
//                 </div>
//                 <button onClick={addSkill} className={`${sharedSecondaryButtonClasses} ${sharedButtonClasses}`}>Add Skill</button>
//             </div>

//             <div>
//                 <h3 className="font-medium mb-2">Interest</h3>
//                 <div id="interests-container">
//                     {interests.map((interest, index) => (
//                         <div key={index} className="flex items-center mb-2">
//                             <input type="text" placeholder={interest} className={sharedBorderClasses} />
//                         </div>
//                     ))}
//                 </div>
//                 <button onClick={addInterest} className={`${sharedSecondaryButtonClasses} ${sharedButtonClasses}`}>Add Interest</button>
//             </div>

//             <div className="mt-6 flex justify-between">
//                 <button className={`${sharedRedButtonClasses} ${sharedButtonClasses}`} onClick={onBack}>BACK</button>
//                 <button className={`${sharedBlueButtonClasses} ${sharedButtonClasses}`}>NEXT</button> {/* Handle 'Next' as per your flow */}
//             </div>

//             <div className="mt-4">
//                 <button className={`${sharedPrimaryButtonClasses} ${sharedButtonClasses}`}>DOWNLOAD RESUME</button>
//             </div>
//         </div>
//     );
// };

// export default ExtraDetails;
import React, { useState } from 'react';
import axios from 'axios';

const sharedBorderClasses = 'border border-border rounded p-2 flex-1 mr-2';
const sharedButtonClasses = 'p-2 rounded';
const sharedPrimaryButtonClasses = 'bg-primary text-primary-foreground';
const sharedSecondaryButtonClasses = 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
const sharedRedButtonClasses = 'bg-red-500 text-white';
const sharedBlueButtonClasses = 'bg-blue-500 text-white';

const ExtraDetails = ({ onBack }) => {
    const [skills, setSkills] = useState(['Skill 1', 'Skill 2']);
    const [interests, setInterests] = useState(['Interest 1', 'Interest 2']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const addSkill = () => {
        setSkills([...skills, '']); // Initialize with an empty string for new skill
    };

    const addInterest = () => {
        setInterests([...interests, '']); // Initialize with an empty string for new interest
    };

    const handleSkillChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = value;
        setSkills(updatedSkills);
    };

    const handleInterestChange = (index, value) => {
        const updatedInterests = [...interests];
        updatedInterests[index] = value;
        setInterests(updatedInterests);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError('');

        try {
            // Send skills and interests to the backend
            await axios.post('http://localhost:5000/api/extra-details', {
                skills,
                interests,
            });
            alert('Extra details added successfully!');
        } catch (err) {
            setError('Error adding extra details');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-card rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Extra Details</h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div className="mb-6">
                <h3 className="font-medium mb-2">Skills/Languages</h3>
                <div id="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input 
                                type="text" 
                                value={skill} 
                                onChange={(e) => handleSkillChange(index, e.target.value)} 
                                className={sharedBorderClasses} 
                            />
                        </div>
                    ))}
                </div>
                <button onClick={addSkill} className={`${sharedSecondaryButtonClasses} ${sharedButtonClasses}`}>Add Skill</button>
            </div>

            <div>
                <h3 className="font-medium mb-2">Interest</h3>
                <div id="interests-container">
                    {interests.map((interest, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input 
                                type="text" 
                                value={interest} 
                                onChange={(e) => handleInterestChange(index, e.target.value)} 
                                className={sharedBorderClasses} 
                            />
                        </div>
                    ))}
                </div>
                <button onClick={addInterest} className={`${sharedSecondaryButtonClasses} ${sharedButtonClasses}`}>Add Interest</button>
            </div>

            <div className="mt-6 flex justify-between">
                <button className={`${sharedRedButtonClasses} ${sharedButtonClasses}`} onClick={onBack}>BACK</button>
                <button className={`${sharedBlueButtonClasses} ${sharedButtonClasses}`} onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Loading...' : 'NEXT'}
                </button>
            </div>

            <div className="mt-4">
                <button className={`${sharedPrimaryButtonClasses} ${sharedButtonClasses}`}>DOWNLOAD RESUME</button>
            </div>
        </div>
    );
};

export default ExtraDetails;

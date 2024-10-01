// ExtraDetails.jsx
import React, { useState } from 'react';

const sharedBorderClasses = 'border border-border rounded p-2 flex-1 mr-2';
const sharedButtonClasses = 'p-2 rounded';
const sharedPrimaryButtonClasses = 'bg-primary text-primary-foreground';
const sharedSecondaryButtonClasses = 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
const sharedRedButtonClasses = 'bg-red-500 text-white';
const sharedBlueButtonClasses = 'bg-blue-500 text-white';

const ExtraDetails = ({ onBack }) => {
    const [skills, setSkills] = useState(['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5', 'Skill 6']);
    const [interests, setInterests] = useState(['Interest 1', 'Interest 2', 'Interest 3', 'Interest 4']);

    const addSkill = () => {
        setSkills([...skills, `New Skill ${skills.length + 1}`]);
    };

    const addInterest = () => {
        setInterests([...interests, `New Interest ${interests.length + 1}`]);
    };

    return (
        <div className="p-6 bg-card rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Extra Details</h2>

            <div className="mb-6">
                <h3 className="font-medium mb-2">Skills/Languages</h3>
                <div id="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input type="text" placeholder={skill} className={sharedBorderClasses} />
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
                            <input type="text" placeholder={interest} className={sharedBorderClasses} />
                        </div>
                    ))}
                </div>
                <button onClick={addInterest} className={`${sharedSecondaryButtonClasses} ${sharedButtonClasses}`}>Add Interest</button>
            </div>

            <div className="mt-6 flex justify-between">
                <button className={`${sharedRedButtonClasses} ${sharedButtonClasses}`} onClick={onBack}>BACK</button>
                <button className={`${sharedBlueButtonClasses} ${sharedButtonClasses}`}>NEXT</button> {/* Handle 'Next' as per your flow */}
            </div>

            <div className="mt-4">
                <button className={`${sharedPrimaryButtonClasses} ${sharedButtonClasses}`}>DOWNLOAD RESUME</button>
            </div>
        </div>
    );
};

export default ExtraDetails;

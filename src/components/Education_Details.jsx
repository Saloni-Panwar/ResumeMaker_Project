import React from 'react';

const inputClasses = "border border-gray-300 rounded-md p-2 w-full"; 
const imageClasses = "ml-2";
const textClasses = "text-muted-foreground";

const EducationForm = ({ onBack, onNext }) => {
    return (
        <div className="p-6 bg-card rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Education Details</h2>
            <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                    <label className={textClasses}>College/University *</label>
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            className={`${inputClasses} flex-1`} 
                            placeholder="Enter College/University" 
                            required 
                        />
                        <img 
                            aria-hidden="true" 
                            alt="graduation-cap" 
                            src="https://openui.fly.dev/openui/24x24.svg?text=🎓" 
                            className={imageClasses} 
                            width="16" 
                            height="16" 
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className={textClasses}>Qualification *</label>
                    <input 
                        type="text" 
                        className={inputClasses} 
                        placeholder="Enter Qualification" 
                        required 
                    />
                </div>

                <div className="flex flex-col">
                    <label className={textClasses}>School *</label>
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            className={`${inputClasses} flex-1`} 
                            placeholder="Enter School" 
                            required 
                        />
                        <img 
                            aria-hidden="true" 
                            alt="graduation-cap" 
                            src="https://openui.fly.dev/openui/24x24.svg?text=🎓" 
                            className={imageClasses} 
                            width="16" 
                            height="16" 
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className={textClasses}>Start Date *</label>
                    <input 
                        type="text" 
                        className={inputClasses} 
                        placeholder="dd-mm-yyyy" 
                        required 
                    />
                    <img 
                        aria-hidden="true" 
                        alt="calendar" 
                        src="https://openui.fly.dev/openui/24x24.svg?text=📅" 
                        className="mt-1" 
                        width="16" 
                        height="16" 
                    />
                </div>

                <div className="flex flex-col">
                    <label className={textClasses}>End Date *</label>
                    <input 
                        type="text" 
                        className={inputClasses} 
                        placeholder="dd-mm-yyyy" 
                        required 
                    />
                    <img 
                        aria-hidden="true" 
                        alt="calendar" 
                        src="https://openui.fly.dev/openui/24x24.svg?text=📅" 
                        className="mt-1" 
                        width="16" 
                        height="16" 
                    />
                </div>

                <div className="flex flex-col">
                    <label className={textClasses}>Description *</label>
                    <textarea 
                        className={inputClasses} 
                        placeholder="Enter Description" 
                        required 
                    ></textarea>
                </div>
            </div>

            <div className="flex justify-between mt-6">
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-md" onClick={onBack}>BACK</button>
                <button className="bg-destructive text-destructive-foreground hover:bg-destructive/80 p-2 rounded-md" onClick={onNext}>NEXT</button>
            </div>
            <p className={`${textClasses} mt-4`}>Page 2</p>
        </div>
    );
};

export default EducationForm;

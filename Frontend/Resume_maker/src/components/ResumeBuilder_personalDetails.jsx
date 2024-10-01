// import React from 'react';

// const INPUT_CLASS = 'border border-gray-300 rounded p-2 w-full';
// const BUTTON_CLASS = 'p-2 rounded';
// const CONTAINER_CLASS = 'bg-gray-100 p-6 rounded-lg shadow-md';
// const TEXT_CLASS = 'text-gray-600';

// const ResumeBuilder = ({ onNext }) => {
//     return (
//         <div className={CONTAINER_CLASS}>
//             <h1 className="text-lg font-bold mb-4">Resume Builder</h1>
//             <h2 className="text-md font-semibold mb-2">Personal Details</h2>
//             <div className="grid grid-cols-2 gap-4">
//                 <div>
//                     <label className="block mb-1" htmlFor="first-name">First Name *</label>
//                     <input className={INPUT_CLASS} type="text" id="first-name" placeholder="First Name" required />
//                 </div>
//                 <div>
//                     <label className="block mb-1" htmlFor="last-name">Last Name *</label>
//                     <input className={INPUT_CLASS} type="text" id="last-name" placeholder="Last Name" required />
//                 </div>
//                 <div>
//                     <label className="block mb-1" htmlFor="email">Email *</label>
//                     <input className={INPUT_CLASS} type="email" id="email" placeholder="Email" required />
//                 </div>
//                 <div>
//                     <label className="block mb-1" htmlFor="phone">Phone Number</label>
//                     <input className={INPUT_CLASS} type="tel" id="phone" placeholder="Phone Number" />
//                 </div>
//                 <div>
//                     <label className="block mb-1" htmlFor="website">Your Website</label>
//                     <input className={INPUT_CLASS} type="url" id="website" placeholder="Your Website" />
//                 </div>
//                 <div>
//                     <label className="block mb-1" htmlFor="github">GitHub</label>
//                     <input className={INPUT_CLASS} type="text" id="github" placeholder="GitHub" />
//                 </div>
//                 <div>
//                     <label className="block mb-1" htmlFor="linkedin">Linked In</label>
//                     <input className={INPUT_CLASS} type="text" id="linkedin" placeholder="Linked In" />
//                 </div>
//                 <div>
//                     <label className="block mb-1" htmlFor="facebook">Facebook</label>
//                     <input className={INPUT_CLASS} type="text" id="facebook" placeholder="Facebook" />
//                 </div>
//                 <div>
//                     <label className="block mb-1" htmlFor="twitter">Twitter</label>
//                     <input className={INPUT_CLASS} type="text" id="twitter" placeholder="Twitter" />
//                 </div>
//                 <div>
//                     <label className="block mb-1" htmlFor="instagram">Instagram</label>
//                     <input className={INPUT_CLASS} type="text" id="instagram" placeholder="Instagram" />
//                 </div>
//             </div>
//             <div className="flex justify-between mt-4">
//                 <button className={`bg-gray-300 ${TEXT_CLASS} ${BUTTON_CLASS}`}>BACK</button>
//                 <button className={`bg-blue-500 text-white ${BUTTON_CLASS}`} onClick={onNext}>NEXT</button>
//             </div>
//             <p className={`text-sm ${TEXT_CLASS} mt-2`}>Page 1</p>
//         </div>
//     );
// };

// export default ResumeBuilder;


//ADDED BY NIKITA

import React, { useState } from 'react';
import axios from 'axios';

const INPUT_CLASS = 'border border-gray-300 rounded p-2 w-full';
const BUTTON_CLASS = 'p-2 rounded';
const CONTAINER_CLASS = 'bg-gray-100 p-6 rounded-lg shadow-md';
const TEXT_CLASS = 'text-gray-600';

const ResumeBuilder = ({ onNext }) => {
    // Define state to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        website: '',
        github: '',
        linkedin: '',
        facebook: '',
        twitter: '',
        instagram: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send the form data to your backend
            await axios.post('http://localhost:5000/api/resume/submit', formData);
            alert('Form submitted successfully!');
            onNext(); // Move to the next step if needed
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={CONTAINER_CLASS}>
                <h1 className="text-lg font-bold mb-4">Resume Builder</h1>
                <h2 className="text-md font-semibold mb-2">Personal Details</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1" htmlFor="firstName">First Name *</label>
                        <input className={INPUT_CLASS} type="text" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="lastName">Last Name *</label>
                        <input className={INPUT_CLASS} type="text" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="email">Email *</label>
                        <input className={INPUT_CLASS} type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="phone">Phone Number</label>
                        <input className={INPUT_CLASS} type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="website">Your Website</label>
                        <input className={INPUT_CLASS} type="url" id="website" value={formData.website} onChange={handleChange} placeholder="Your Website" />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="github">GitHub</label>
                        <input className={INPUT_CLASS} type="text" id="github" value={formData.github} onChange={handleChange} placeholder="GitHub" />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="linkedin">Linked In</label>
                        <input className={INPUT_CLASS} type="text" id="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="Linked In" />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="facebook">Facebook</label>
                        <input className={INPUT_CLASS} type="text" id="facebook" value={formData.facebook} onChange={handleChange} placeholder="Facebook" />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="twitter">Twitter</label>
                        <input className={INPUT_CLASS} type="text" id="twitter" value={formData.twitter} onChange={handleChange} placeholder="Twitter" />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="instagram">Instagram</label>
                        <input className={INPUT_CLASS} type="text" id="instagram" value={formData.instagram} onChange={handleChange} placeholder="Instagram" />
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <button className={`bg-gray-300 ${TEXT_CLASS} ${BUTTON_CLASS}`}>BACK</button>
                    <button type="submit" className={`bg-blue-500 text-white ${BUTTON_CLASS}`}>NEXT</button>
                </div>
                <p className={`text-sm ${TEXT_CLASS} mt-2`}>Page 1</p>
            </div>
        </form>
    );
};

export default ResumeBuilder;


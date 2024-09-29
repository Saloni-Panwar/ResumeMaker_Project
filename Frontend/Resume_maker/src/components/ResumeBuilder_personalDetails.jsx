import React from 'react';

const INPUT_CLASS = 'border border-gray-300 rounded p-2 w-full';
const BUTTON_CLASS = 'p-2 rounded';
const CONTAINER_CLASS = 'bg-gray-100 p-6 rounded-lg shadow-md';
const TEXT_CLASS = 'text-gray-600';

const ResumeBuilder = () => {
    return (
        <div className={CONTAINER_CLASS}>
            <h1 className="text-lg font-bold mb-4">Resume Builder</h1>
            <h2 className="text-md font-semibold mb-2">Personal Details</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-1" htmlFor="first-name">First Name *</label>
                    <input className={INPUT_CLASS} type="text" id="first-name" placeholder="First Name" required />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="last-name">Last Name *</label>
                    <input className={INPUT_CLASS} type="text" id="last-name" placeholder="Last Name" required />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="email">Email *</label>
                    <input className={INPUT_CLASS} type="email" id="email" placeholder="Email" required />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="phone">Phone Number</label>
                    <input className={INPUT_CLASS} type="tel" id="phone" placeholder="Phone Number" />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="website">Your Website</label>
                    <input className={INPUT_CLASS} type="url" id="website" placeholder="Your Website" />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="github">GitHub</label>
                    <input className={INPUT_CLASS} type="text" id="github" placeholder="GitHub" />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="linkedin">Linked In</label>
                    <input className={INPUT_CLASS} type="text" id="linkedin" placeholder="Linked In" />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="facebook">Facebook</label>
                    <input className={INPUT_CLASS} type="text" id="facebook" placeholder="Facebook" />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="twitter">Twitter</label>
                    <input className={INPUT_CLASS} type="text" id="twitter" placeholder="Twitter" />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="instagram">Instagram</label>
                    <input className={INPUT_CLASS} type="text" id="instagram" placeholder="Instagram" />
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <button className={`bg-gray-300 ${TEXT_CLASS} ${BUTTON_CLASS}`}>BACK</button>
                <button className={`bg-blue-500 text-white ${BUTTON_CLASS}`}>NEXT</button>
            </div>
            <p className={`text-sm ${TEXT_CLASS} mt-2`}>Page 1</p>
        </div>
    );
};

export default ResumeBuilder;

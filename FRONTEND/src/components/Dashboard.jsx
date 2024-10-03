import React from 'react';

const Dashboard = ({ onNext }) => {
    return (
        <div className="container mx-auto px-4 py-16 text-center">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-blue-700 mb-6">
                    Free Resume Builder - ATS-Approved
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                    Jobscan's resume builder is the easy way to create a winning resume that's 
                    perfectly tailored for the job and formatted for pesky applicant tracking systems.
                </p>
                <button 
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md"
                    onClick={onNext}
                >
                    Build Your Resume
                </button>
            </div>

            {/* Logos Section */}
            <div className="mt-16">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Jobscan users have been hired by:
                </h2>
                <div className="flex justify-center space-x-6">
                    <img src="https://via.placeholder.com/100x40?text=Kaiser" alt="Kaiser Permanente" className="w-20" />
                    <img src="https://via.placeholder.com/100x40?text=Amazon" alt="Amazon" className="w-20" />
                    <img src="https://via.placeholder.com/100x40?text=KPMG" alt="KPMG" className="w-20" />
                    <img src="https://via.placeholder.com/100x40?text=Microsoft" alt="Microsoft" className="w-20" />
                    <img src="https://via.placeholder.com/100x40?text=NASA" alt="NASA" className="w-20" />
                    <img src="https://via.placeholder.com/100x40?text=Apple" alt="Apple" className="w-20" />
                </div>
            </div>

            {/* Laptop Image */}
            <div className="mt-16 flex justify-center">
                <img src="https://via.placeholder.com/300x200?text=Laptop+Image" alt="Laptop" className="w-96 shadow-lg" />
            </div>
        </div>
    );
};

export default Dashboard;

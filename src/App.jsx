// App.jsx
import { useState } from 'react';
import './App.css';
import ResumeBuilder from './components/personal_Details';
import EducationForm from './components/Education_Details';
import ProjectForm from './components/ProjectDevelopment_Details';
import ExperienceDetails from './components/Experience_Details';
import ExtraDetails from './components/Extra_Details';

function App() {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handleBack = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div className="App">
            {currentPage === 0 && <ResumeBuilder onNext={handleNext} />}
            {currentPage === 1 && <EducationForm onBack={handleBack} onNext={handleNext} />}
            {currentPage === 2 && <ProjectForm onBack={handleBack} onNext={handleNext} />}
            {currentPage === 3 && <ExperienceDetails onBack={handleBack} onNext={handleNext} />} 
            {currentPage === 4 && <ExtraDetails onBack={handleBack} />}
        </div>
    );
}

export default App;

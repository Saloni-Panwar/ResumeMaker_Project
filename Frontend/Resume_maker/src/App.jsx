import { useState } from 'react';
import './App.css';
import ResumeBuilder from "./components/ResumeBuilder_personalDetails";
import EducationForm from "./components/Education_Details";
import ProjectForm from "./components/ProjectDevelopment_Details"; 

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
      {currentPage === 2 && <ProjectForm onBack={handleBack} />} 
    </div>
  );
}

export default App;

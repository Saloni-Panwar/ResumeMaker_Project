import { useState } from 'react';
import './App.css';
import ResumeBuilder from "./components/ResumeBuilder_personalDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ResumeBuilder />
    </div>
  );
}

export default App;

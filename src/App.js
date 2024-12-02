import Navbar from "./components/Navbar/Navbar.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/Education/Education.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Conference from "./components/Conference/Conference.jsx";


function App() {
  return (
    <div className="body">
    <div className="parent">
      <Navbar/>
      <div className="page-content">
        <Intro/>
        <Education/>
        <Experience/>
        <Conference/>
        <Projects/>
      </div>
    </div>
      
    </div>
  );
}

export default App;

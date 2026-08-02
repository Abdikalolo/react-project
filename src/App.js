import './App.css';
import Header from './components/Header';
import AddProjectForm from './components/AddProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import { useState } from 'react';

function App (){
  const [projects, setProjects] = useState([{
    id: 1,
    title: "Portfolio Website",
    description:"A personal portfolio built with react."
  },
  {
    id: 2,
    title: "Weather App",
    description: "Weather app that displays weather using an API."
  },
  {
    id: 3,
    title: "To Do App",
    description: "An App that manages daily tasks",
  }]);

  const [search, setSearch] = useState("");

  function AddProject(newProject){
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) =>
  project.title.toLowerCase().includes(search.toLocaleLowerCase())
  );
  
  return (
    <div className='App'>
      <Header/>
      <div className='container mt-4'>
        <AddProjectForm addProject={AddProject}/>
        <SearchBar search={search} setSearch={setSearch} />
        <ProjectList projects={filteredProjects}/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import AddProjectForm from './components/AddProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

function App (){
  return (
    <div className='App'>
      <Header/>
      <div className='container mt-4'>
        <AddProjectForm />
        <SearchBar />
        <ProjectList/>
      </div>
    </div>
  );
}

export default App;

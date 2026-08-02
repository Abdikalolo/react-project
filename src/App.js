import './App.css';
import Header from './components/Header';
import AddProjectForm from './components/AddProjectForm';

function App (){
  return (
    <div className='App'>
      <Header/>
      <div className='container mt-4'>
        <AddProjectForm />
      </div>
    </div>
  );
}

export default App;

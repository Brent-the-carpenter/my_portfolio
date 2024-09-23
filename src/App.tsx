
import './App.css'
import ProjectCard from './components/projectCard'
import projects from './projects'

function App() {
  
  return (
    <>
    
      <h1>My projects</h1>
      <div className='projectContainer'>
      {projects.map(project => (
         <ProjectCard key={project.id} project={project} />
      ))}
      </div>
    </>
  )
}

export default App

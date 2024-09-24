
import './App.css'
import ProjectCard from './components/projectCard'
import projects from './projects'
import About from './components/about'
import TechLogos from './components/techLogos'

function App() {
  
  return (
    <>
      <About />
      <h1>Technologies have used</h1>
      <TechLogos />
      <h1>My projects</h1>
      <hr />
      <div className='projectContainer'>
      {projects.map(project => (
         <ProjectCard key={project.id} project={project} />
      ))}
      </div>
    </>
  )
}

export default App

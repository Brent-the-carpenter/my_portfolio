import Project from '../types/project'
import gitIcon from '../assets/github-mark.svg'
function ProjectCard({project}:{project:Project}){
    const {title,description,img,altText,url,github} = project
    return (
        <div className='projectCard'>
        <h2>{title}</h2>
        {img && altText && <img src={img} alt={altText} />}
        <p>{description}</p>
        <div className='linkContainer'>
        {url && <a href={url} target="_blank" rel='noopener noreferrer'>Live View</a>}
        <a href={github} target="_blank" rel='noopener noreferrer'><img src={gitIcon} className='icon'/> </a>
        </div>
        </div>
    )
}
export default ProjectCard
import ProjectCard from "./ProjectCard";

 function ProjectList({ projects }){
    return(
        <div>
            {projects.map((projects) => (
                <ProjectCard
                key={Project.id}
                title={project.title}
                description={project.description}
                />
            ))}
        </div>
    );
 }
export default ProjectList;
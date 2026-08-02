import { useState } from "react";
function AddProjectForm({ addProject }){
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        const newProject = {
            id: Date.now(),
            title: title,
            description: description
        };

        addProject(newProject);
        setTitle("");
        setDescription("");
    }

    return(
        <form className="card p-4 mb-4"
        onSubmit={handleSubmit}>
            <h3>Add Project</h3>

            <input
                 className="form-control mb-3"
                 placeholder="Project Description"
                 value={title}
                 onChange={(e)=> setTitle(e.target.value)}
            />

            <textarea
                   className="form-control mb-3"
                   placeholder="Project Title"
                   value={description}
                   onChange={(e) => setDescription(e.target.value)}
            />

            <button className="btn btn-primaty">
                Add Project
            </button>
        </form>
    );
}

export default AddProjectForm;
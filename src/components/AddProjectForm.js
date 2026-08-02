function AddProjectForm(){
    return (
        <div className="card p-4 mb-4">
            <h3>Add Project</h3>

            <div className="mb-3">
                <label className="form-label">Title</label>
                <input 
                      type="text"
                      className="form-control"
                      placeholder="Enter Project Title"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea  
                         className="form-control"
                         rows= "3"
                         placeholder="Enter Project Description"
                ></textarea>
            </div>

            <button className="btn btn-primary">
                Add
            </button>
        </div>
        
    );
}

export default AddProjectForm;
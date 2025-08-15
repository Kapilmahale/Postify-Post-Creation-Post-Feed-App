const CreatePost=()=> {
    return (
        <div className="container mt-5">
            <h2>Create Post</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Caption</label>
                    <input type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Description</label>
                    <textarea className="form-control" id="content" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
        </div>
    );
}

export default CreatePost;
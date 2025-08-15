const Post=(props) => {
    return (
        <div className="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.post.title}</h5>
                        <p className="card-text">{props.post.body}</p>
                        <a href="#" className="btn btn-success">{props.post.reactions.likes} 	&#128150;</a>
                        
                        {/* dislikes,views,comments */}
                        <a href="#" className="btn btn-danger mx-3">{props.post.reactions.dislikes} 	&#128078;</a>
                        <a href="#" className="btn btn-info my-3">{props.post.views} &#128065;</a>

                </div>
        </div>
    )
}

export default Post;
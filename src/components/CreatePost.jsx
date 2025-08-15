import  { useContext, useRef } from 'react';
import {PostList} from "../store/post_list_store";

const CreatePost= () => {

  const {addPost} = useContext(PostList);

 const useridElement=useRef();
  const posttitleElement=useRef();
  const postbodyElement=useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const userId = useridElement.current.value;
    const title = posttitleElement.current.value;
    const body = postbodyElement.current.value;

    addPost({ userId, title, body });
  }

   return (
    <form className="container mt-5" onSubmit={handleSubmit}>
 <div className="mb-3">
    <label htmlFor="userId" className="form-label">User ID</label>
    <input type="text"  ref={useridElement} className="form-control" id="userId" />
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" ref={posttitleElement} className="form-control" id="title" />
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Content</label>
    <textarea className="form-control" id="body" rows="3" ref={postbodyElement}></textarea>
  </div>

  <button type="submit" className="btn btn-primary">Post</button>
</form>
           
   );
}
export default CreatePost;
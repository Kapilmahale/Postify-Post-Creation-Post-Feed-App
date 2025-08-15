import { useContext } from "react";

const Getposts=({setSelectedTab,RandomPosts})=>{


    const handleOnClickPost=(tabName)=>{
        setSelectedTab(tabName);
    }

    // const handlePost=()=>{
    //     RandomPosts();
    // }

    return(
        <div className="bg-light text-secondary px-4 py-1 text-center"> 
        <div className="py-5"> 
            <h1 className="display-5 fw-bold text-dark">Get New Posts </h1>
             <div className="col-lg-6 mx-auto"> 
                <p className="fs-5 mb-4">Quickly design and customize responsive
                   Posts ,to show your Friends</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={() => RandomPosts()}>Get Random Posts</button>
                    <button type="button" className="btn btn-outline-dark btn-lg px-4"  onClick={() => handleOnClickPost('CreatePost')}>Create Posts</button> 
                </div> 
            </div> 
        </div> 
    </div>
    )
}

export default Getposts;

// handlePost('Post')
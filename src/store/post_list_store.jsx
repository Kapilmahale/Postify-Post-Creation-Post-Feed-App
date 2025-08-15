import {contextCreator, createContext} from 'react';
import { useReducer } from 'react';


export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postReducer=(currPost,action)=>{
  // const newPostList= currPost;
  if(action.type==="ADD_POST"){
    // newPostList=[action.payload,...currPost];
    return [action.payload, ...currPost];
  }
  return currPost;
}

const PostListProvider=({children}) => {

  const [postList,dispatchPostList]= useReducer(postReducer, Default_PostList);

  const addPost=(userId, title, body )=>{
    dispatchPostList(
      {type:"ADD_POST", 
      payload:{
        id:userId, 
        title:title, 
        body:body}});
  };
  
  const deletePost=()=>{};

   return <PostList.Provider value={
    {
       postList:postList, 
      addPost:addPost,
      deletePost:deletePost
     }

  }>{children}</PostList.Provider>
}


const Default_PostList = [
  {
  id:"1",
  title:"All he wanted was a candy bar.",
  body:"All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face",
  reactions: { likes:10, dislikes:2, },
  views:100,
  // userid:"user1",
  // tags:["tag1", "tag2"],
},
{
  id:"2",
  title:"The robot clicked disapprovingly.",
  body:"The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. Sir, you will undoubtedly end up in a drunkard's grave, dead of hepatic cirrhosis, it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table....",

  reactions: { likes:20, dislikes:5 },
  views:200,
  // userid:"user2",
  // tags:["tag2", "tag3"],

}];


export default PostListProvider;
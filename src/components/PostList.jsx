import React, { useState } from 'react';
import Post from './Post';
import Getposts from './GetPosts';
import { useContext } from "react";
import { PostList as PostListData } from '../store/post_list_store.jsx';

const Postlist=({setSelectedTab})=>{

    const[PostLists,setPostLists]=useState([]);
   
    const {postList} = useContext(PostListData);

    const RandomPosts=async()=>{
        let data= await fetch('https://dummyjson.com/posts')
        let parsedData = await(data.json());
        console.log(parsedData);
        setPostLists(parsedData.posts);
    }

    return (
        <>
        <Getposts setSelectedTab={setSelectedTab} RandomPosts={RandomPosts}></Getposts>

        {/* //my posts */}

        <div className='container mt-5 row row-cols-1 row-cols-md-3 '>
        {postList.map((post) => {
            return <Post key={post.id} post={post} />;
        })}
        </div>

        <div className='container mt-5 row row-cols-1 row-cols-md-3 '>
        {PostLists.map((post) => {
            return <Post key={post.id} post={post} />;
        })}
        </div>
        </>
    )

}

export default Postlist;
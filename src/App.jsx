import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
// import CreatePost from './components/CreatePost_00.jsx'
import Postlist from './components/PostList.jsx'
import CreatePost from './components/CreatePost.jsx'
import { useState } from 'react'
import PostListProvider from './store/post_list_store.jsx'


function App() {
  
  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <PostListProvider>
    <div className="app-container">
      <Sidebar selectedTab={selectedTab}  setSelectedTab={setSelectedTab}/>
      <div className="content">
        <Header/>
        {selectedTab==='Home'?<Postlist setSelectedTab={setSelectedTab}/>:<CreatePost/>}    

        <Footer/>
      </div>
    </div>
  </PostListProvider>
  )
}

export default App

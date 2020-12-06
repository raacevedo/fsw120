import React from "react"

import Blog from "./Blog.js"
import blogPost from "./blogData"

import "./style.css"

function App() {
    const blogComponents = blogPost.map(blog => <Blog title={blog.title} 
        subTitle={blog.subTitle} author={blog.author} date={blog.date}/>)

    return (
        <div>
            {blogComponents}
        </div>
        
    )
}

export default App
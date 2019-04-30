import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from './App'
import './App.css'

function Posts() {
  const [posts, setPosts] = useState([])
  const postsVisible = useContext(PostContext)

  const fetchPosts = async () => {
    const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')

    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts(posts)
  }, [])

  return (
    <div className="name">
      {posts.map(
        post =>
          postsVisible.showPost && (
            <ul>
              <li>
                <p>{post.title}</p>
              </li>
            </ul>
          )
      )}
    </div>
  )
}

export default Posts

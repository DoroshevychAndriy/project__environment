import React, { Component } from 'react'
import BlogPostMain from './components/BlogPostMain/BlogPostMain'
import BlogPostBody from './components/BlogPostBody/BlogPostBody'

export class BlogPost extends Component {
  render() {
    return (
      <div>
        <BlogPostMain />
        <BlogPostBody />
      </div>
    )
  }
}

export default BlogPost
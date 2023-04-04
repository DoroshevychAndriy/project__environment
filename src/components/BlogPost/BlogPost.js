import React, { Component } from 'react'
import BlogPostMain from './components/BlogPostMain/BlogPostMain'
import BlogPostBody from './components/BlogPostBody/BlogPostBody'

export class BlogPost extends Component {
  componentDidMount(){
    let header = document.querySelector('.component__header');
    header.classList.remove('header__active')
    window.scrollTo(0, 0)
  }
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
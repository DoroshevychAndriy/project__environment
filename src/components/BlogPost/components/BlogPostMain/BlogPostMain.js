import React, { Component } from 'react'

export class BlogPostMain extends Component {
  render() {
    return (
      <div className='component__blog-post'>
        <div className="blog-post">
            <div className="blog-post__abovetitle">21 DEC 2021</div>
            <div className="blog-post__title"> Is climate change happening faster than expected?</div>
            <div className="blog-post__subtitle">Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit.</div>
            <div className="blog-post__img"></div>
        </div>
      </div>
    )
  }
}

export default BlogPostMain
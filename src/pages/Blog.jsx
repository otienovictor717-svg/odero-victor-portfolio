import React from 'react';
import { BLOG_POSTS } from '../data/portfolio';

function Blog() {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <p className="section-tag">Insights</p>
          <h1>Blog</h1>
          <p className="lead">
            Thoughts on web development, design patterns, and building great user
            experiences.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="blog-card">
                {post.image && (
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                )}
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime} min read</span>
                </div>
                <a href={post.url || `#blog-${post.id}`} className="read-more">
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;

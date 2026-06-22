import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import blogs from '../data/blogs';
import './Blogs.css';

// ── Tag filter list ────────────────────────────────────────────────────────────
const ALL_TAGS = ['All', ...Array.from(new Set(blogs.flatMap((b) => b.tags)))];

// ── Blog card ──────────────────────────────────────────────────────────────────
function BlogCard({ post, onOpen }) {
  return (
    <article className="blog-card" onClick={() => onOpen(post)} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(post)}>
      {post.coverImage && (
        <div className="blog-card-cover">
          <img src={post.coverImage} alt={post.title} />
        </div>
      )}
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span className="blog-source-badge">Obsidian</span>
          <span className="blog-date">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'short', day: 'numeric',
            })}
          </span>
        </div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-summary">{post.summary}</p>
        <div className="blog-card-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>
        <span className="blog-read-btn">Read post →</span>
      </div>
    </article>
  );
}

// ── Reader overlay ─────────────────────────────────────────────────────────────
function BlogReader({ post, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="reader-overlay" onClick={onClose}>
      <div className="reader-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header bar */}
        <div className="reader-topbar">
          <button className="reader-back" onClick={onClose}>
            ← Back to posts
          </button>
          <span className="reader-source">
            ✦ from Obsidian vault
          </span>
        </div>

        {/* Article */}
        <article className="reader-article">
          {post.coverImage && (
            <img className="reader-cover" src={post.coverImage} alt={post.title} />
          )}
          <header className="reader-header">
            <div className="reader-meta">
              <span className="blog-date">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </span>
              <div className="blog-card-tags" style={{ marginTop: 8 }}>
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
            <h1 className="reader-title">{post.title}</h1>
          </header>

          <div className="reader-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}

// ── Main Blogs section ─────────────────────────────────────────────────────────
function Blogs() {
  const [activeTag, setActiveTag] = useState('All');
  const [openPost, setOpenPost]   = useState(null);

  const filtered =
    activeTag === 'All'
      ? blogs
      : blogs.filter((b) => b.tags.includes(activeTag));

  return (
    <>
      <section id="blogs" className="blogs-section">
        <div className="blogs-container">
          <h2 className="blogs-heading">Blog Posts</h2>

          {blogs.length === 0 ? (
            <div className="blogs-empty-state">
              <p className="blogs-empty-title">No posts synced yet</p>
              <p className="blogs-empty-hint">
                1. Open <code>vault.config.js</code> and set your vault path<br />
                2. Create a <code>Blogs/</code> folder in your Obsidian vault<br />
                3. Write posts with frontmatter (see below)<br />
                4. Run <code>npm run sync-blogs</code> then <code>npm start</code>
              </p>
              <pre className="blogs-frontmatter-example">{`---
title: "My First Post"
date: 2026-06-21
tags: [SRE, Kubernetes]
summary: "Optional one-line teaser"
---

Write your post here in normal Markdown.`}</pre>
            </div>
          ) : (
            <>
              <div className="blog-filters">
                {ALL_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`blog-filter-btn${activeTag === tag ? ' active' : ''}`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {filtered.length === 0 ? (
                <p className="blogs-empty">No posts for this topic yet.</p>
              ) : (
                <div className="blog-grid">
                  {filtered.map((post) => (
                    <BlogCard key={post.id} post={post} onOpen={setOpenPost} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {openPost && (
        <BlogReader post={openPost} onClose={() => setOpenPost(null)} />
      )}
    </>
  );
}

export default Blogs;

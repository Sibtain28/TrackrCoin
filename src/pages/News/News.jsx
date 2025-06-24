import React, { useEffect, useState } from 'react';
import './News.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = 'e19a438a80b6a8f50e0be4df052a0547';
  const API_URL = `https://gnews.io/api/v4/search?q=crypto&lang=en&country=in&token=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setArticles(Array.isArray(data.articles) ? data.articles : []);
      } catch (error) {
        console.error('Error fetching news:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="news-loading">Loading news...</div>;
  if (!articles.length) return <div className="news-loading">No news found.</div>;

  return (
    <div className="news-page">
      <h1>Crypto News</h1>
      <div className="news-grid">
        {articles.map((article, index) => (
          <a key={index} href={article.url} className="news-card" target="_blank" rel="noreferrer">
            {article.image && <img src={article.image} alt={article.title} />}
            <div className="news-content">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <div className="news-footer">
                <span>{article.source.name}</span>
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;

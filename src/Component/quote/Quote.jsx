import React, { useState, useEffect } from "react";
import "./quote.css";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.log(error);
    }
  };

  const getNewQuote = () => {
    fetchQuote();
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="container">
      <div id="quote-box" className="card">
        <div className="card-body">
          <blockquote className="card-text" id="text">
            {quote}
          </blockquote>
          <p className="card-footer text-end" id="author">
            - {author}
          </p>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              id="new-quote"
              onClick={getNewQuote}
            >
              New Quote
            </button>
          </div>
          <div className="d-grid gap-2">
            <a
              className="btn btn-secondary"
              id="tweet-quote"
              href="https//:twitter.com"
              onClick={tweetQuote}
              target="_blank"
            >
              Tweet Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

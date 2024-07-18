import React, { createContext, useState, useEffect } from "react";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [defaultNews, setDefaultNews] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=8d9618af012a43479eb4ba028cd289c4"
    )
      .then((response) => response.json())
      .then((data) => setDefaultNews(data.articles.slice(0, 20)));
  }, []);

  const handleInterestClick = (interest) => {
    setSelectedInterest(interest);
    setSearchResults([]);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${interest.name}&apiKey=8d9618af012a43479eb4ba028cd289c4`
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  };

  const searchNews = (searchQuery) => {
    fetch(
      `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=8d9618af012a43479eb4ba028cd289c4`
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data.articles));
  };

  return (
    <NewsContext.Provider
      value={{
        news,
        defaultNews,
        selectedInterest,
        handleInterestClick,
        searchResults,
        searchNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider, NewsContext };

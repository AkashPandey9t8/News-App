import React, { useContext } from "react";
import { NewsContext } from "./context/NewsContext";
import Interests from "./Interests";
import NewsCard from "./NewsCard";

const Hero = () => {
  const {
    news,
    defaultNews,
    selectedInterest,
    handleInterestClick,
    searchResults,
  } = useContext(NewsContext);

  return (
    <div className="hero  mt-[80px] max-sm:min-w-[730px] max-w-full   min-w-fit p-2 pt-6 bg-slate-900  shadow-lg animate__animated animate__fadeIn">
      <Interests onInterestClick={handleInterestClick} />
      {searchResults.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeIn">
          {searchResults.map((article, index) => (
            <NewsCard key={`${article.url}-${index}`} article={article} />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeIn">
          {selectedInterest
            ? news.map((article, index) => (
                <NewsCard key={`${article.url}-${index}`} article={article} />
              ))
            : defaultNews.map((article, index) => (
                <NewsCard key={`${article.url}-${index}`} article={article} />
              ))}
        </div>
      )}
    </div>
  );
};

export default Hero;

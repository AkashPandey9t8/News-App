import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="newscard h-[75vh] w-full ml-2 bg-white shadow-md rounded-lg overflow-hidden relative hover:bg-black max-sm:h-auto ">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 p-1 object-cover rounded-t-lg "
      />
      <h2 className="text-lg font-extrabold text-gray-700 m-2 hover:text-white">
        {article.title}
      </h2>
      <p className="text-gray-600 m-2">{article.description}</p>
      <button
        className="bg-blue-500  hover:bg-blue-800 text-white font-bold py-2 px-4 float-end mr-3 absolute bottom-3 right-0 rounded opacity-70 hover:opacity-90 "
        onClick={() => window.open(article.url, "_blank")}
      >
        Read More
      </button>
    </div>
  );
};

export default NewsCard;

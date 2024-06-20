import React, { useEffect, useState } from "react";

import NavBar from "./NavBar";
import "./style.css";
import Newsitem from "./newsitem";
const Newbord = ({ category }) => {
  const [articles, setArticles] = useState([]);

  let apiurl = "1c9f26185b3842568e9697a83ca4ac1e";
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiurl}`; //  import.meta.env.REACT_APP_API_KEY &&&& ${process.env.REACT_APP_API_KEY}

    fetch(url)
      .then((resopnse) => resopnse.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default Newbord;
// 1c9f26185b3842568e9697a83ca4ac1e

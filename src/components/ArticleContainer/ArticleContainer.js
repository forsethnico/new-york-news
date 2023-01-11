import { useState, useEffect } from "react";
import "./ArticleContainer.css";
import Card from "../Card/Card";
import { fetchArticles } from "../../utilities/apiCalls";

const StoryContainer = ({ section }) => {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles("Home")
      .then((response) => {
        if (response.results.length > 0) {
          setLoaded(true);
          console.log(response);
          setArticles(response.results);
        } else {
          setError("Failed to fetch data. Try again.");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [section]);

  const storyCards = articles.map((article) => {
    return (
      <Card
        title={article.title}
        key={article.id}
        image={article.url}
        id={article.id}
      />
    );
  });
  if (loaded) {
    return (
      <section className="stories-container">
        <div className="story-cards">{storyCards}</div>
      </section>
    );
  }
};

export default StoryContainer;

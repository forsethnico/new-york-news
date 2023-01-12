import { useParams } from "react-router-dom";
import "./ArticleContainer.css";
import Card from "../Card/Card";
import { useEffect } from "react";

const ArticleContainer = ({ onLoad, articles }) => {
  let params = useParams();

  useEffect(() => {
    onLoad(params.section);
  }, [params.section]);

  const filteredStories = articles.filter(
    (article) => article.item_type === "Article" && article.multimedia
  );
  const storyCards = filteredStories.map((article) => {
    const { title, abstract, byline, section, uri } = article;
    return (
      <Card
        title={title}
        abstract={abstract}
        byline={byline}
        key={uri}
        section={section}
        url={article.short_url}
        image={article.multimedia[0].url}
        alt={article.multimedia[0].caption}
      />
    );
  });

  return (
    <section className="article-container">
      <div>{storyCards}</div>
    </section>
  );
};

export default ArticleContainer;

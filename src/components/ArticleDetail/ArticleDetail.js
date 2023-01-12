import { useParams } from "react-router-dom";

const ArticleDetail = ({ articles }) => {
  const { title } = useParams();
  const decodedArticleTitle = decodeURIComponent(title);
  const article = articles.find(
    (article) => article.title === decodedArticleTitle
  );

  return <section></section>;
};

export default ArticleDetail;

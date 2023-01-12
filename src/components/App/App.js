import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchArticles } from "../../utilities/apiCalls";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import ArticleDetail from "../ArticleDetail/ArticleDetail";
import "./App.css";

const categories = [
  "travel",
  "health",
  "business",
  "sports",
  "arts",
  "technology",
  "politics",
];

const App = () => {
  const [articles, setArticles] = useState([]);
  const [section, setSection] = useState("home");
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(section)
    fetchArticles(section)
      .then((response) => {
        if (response.results.length > 0) {
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

  return (
    <div className="App">
      <Header />
      <NavBar categories={categories} />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleContainer
              articles={articles}
              onLoad={() => {}}
            />
          }
        />
        <Route
          path="/section/:section"
          element={
            <ArticleContainer
              articles={articles}
              onLoad={(newSection) => setSection(newSection)}
            />
          }
        />
        <Route
          path="/article/:articleTitle"
          element={<ArticleDetail articles={articles} />}
        />
      </Routes>
    </div>
  );
};

export default App;

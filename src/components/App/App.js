import "./App.css";
import StoryContainer from "../StoryContainer/StoryContainer";
import Header from "../Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={Home />} />
        <Route path={`/${section}`} element={StoryContainer />} />
        <Route path="/:id" element={ArticleDetail/>} />
      </Routes>
    </div>
  );
}

export default App;

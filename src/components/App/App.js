import { useState, useEffect } from "react";
import "./App.css";
import {fetchStories} from '../../utilities/apiCalls'

function App() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false)
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories("travel").then((response) => {
      if (response.status === 'OK') {
        setLoaded(true);
        console.log(response)
        setStories(response.results);
      } else {
        setError(error.message);
      }
    });
  });
  if(loaded) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world.</p>
      </header>
    </div>
  );
  }
}

export default App;

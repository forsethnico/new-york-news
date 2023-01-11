import { useState, useEffect} from 'react';
import "./StoryContainer.css"
import { fetchStories } from '../../utilities/apiCalls'

function StoryContainer({section}) {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [stories, setStories] = useState([]);

    useEffect((section) => {
      fetchStories(section).then((response) => {
        if (response.status === "OK") {
          setLoaded(true);
          console.log(response);
          setStories(response.results);
        } else {
          setError(error.message);
        }
      });
    });
}

export default StoryContainer
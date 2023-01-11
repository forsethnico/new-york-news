const apiKey = process.env.REACT_APP_API_KEY

const fetchStories = async (section) => {
  const response = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`,
    {
      method: "GET",
  });
  if (!response.ok) {
    throw Error(response.status + ":" + response.statusText);
  }
  return await response.json();
};

export {fetchStories}

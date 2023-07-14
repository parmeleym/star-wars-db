import {useState, useEffect} from "react";

export default function getAllStarships(props) {

  const url = `https://swapi.dev/api/starships/`;

  const [data, setData] = useState("null");

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch(e) {
      console.error(e)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>{data.name}</h1>
        <h2>{data.model}</h2>
      </div>
    );
  };

  const loading = () => {
   console.log('Loading data..');
    return (
      <div>
         <p>Loading...</p>
      </div>
    );
  };

  return data ? loaded() : loading();

}
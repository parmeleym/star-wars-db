import {useState, useEffect} from "react";

async function getAllStarships() {

  const url = `https://swapi.dev/api/starships/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } 
  catch(e) {
    console.error(e);
  }

}

export default getAllStarships
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import getAllStarships from './components/sw-api/'

function App() {

  const [shipList, setShipList] = useState([]);
  const [result, setResult] = useState([]);
  
  useEffect(() => {
    (async () => {
      try{
        console.log("Loading data");
        const result = await getAllStarships();
        const ships = result.results;
        setResult(result);
        setShipList(ships);
        console.log(shipList);
      }
      catch(e){
        console.error(e);
      }
    })();
  }, [])

  return (
    <>
      <Header />
      <div id='shipCardsContainer'>
        {shipList.map((ship, key) => (
          <Card 
            key={key}
            name={ship.name}
            model={ship.model}
            cost_in_credits={ship.cost_in_credits}
            passengers={ship.passengers}
            // cargo_capacity={cargo_capacity}
          />
        ))}
      </div>
    </>
  );
}

export default App

import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import { useState } from "react";

function App() {
  let showDetails = () => {
    alert('added successfully')
  }
  const [arr, setArr] = useState([
    {
     title: `Microwave Oven`,
     price: `30,000`,
     category: `Electronics`,
     description: `"your choices comfort your life style.."`,
     image: `https://pngimg.com/uploads/microwave/microwave_PNG15721.png` 
    },
    {
     title: `Fridge`,
     price: `50,000`,
     category: `Electronics`,
     description: `"your choices comfort your life style.."`,
     image: `https://www.pngall.com/wp-content/uploads/5/Fridge-PNG-Picture.png` 
    },
    {
     title: `Air Conditioner`,
     price: `1,00,000`,
     category: `Electronics`,
     description: `"your choices comfort your life style.."`,
     image: 'https://www.dawlance.com.pk/wp-content/uploads/2019/10/ac-inverter.png' 
    }
    
  ])
    return (

    <div className="App">
      <header className="App-header">
        {arr.map((e,i) =>{
          return (<Card image = {e.image} title = {e.title} price = {e.price} category = {e.category} descrip = {e.description} action = {showDetails} key={i}/>)
        })} 
        
      </header>
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import imgRickMorty from './img/ryck_morty.png'
import './App.css';
import { useState } from 'react';
import Caract from './components/Caract';



function App() {
    const [caracteres, setCaracteres]= useState(null);
  const restAppi=async()=>{
    const api=await fetch("https://rickandmortyapi.com/api/character")
    const caracteresApi=await api.json()
    //console.log(caracteresApi)
    setCaracteres(caracteresApi.results);
  //
  }
  //console.log(caracteres);
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='title'>Ryck and Morty</h1> 
      
        {caracteres ? (
          <Caract  Caract={caracteres} setCaracter={setCaracteres}/>
        ):
        <>
          <img src={imgRickMorty} alt='rick & morty' className='img-name'></img>
          <button className="btn-search" onClick={restAppi}>Buscar</button>
        </>
        }
      
      </header>
    </div>
  );
}

export default App;

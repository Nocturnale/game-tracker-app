

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import GameList from './components/GameList';
import Header from './components/Header';
import gameData from './data/games.json'
import type { Game } from './type';
import GameForm from './components/GameForm';

function App() {


const games:Game[] = gameData;

  return (
    <BrowserRouter>
      <Header />
       <Routes>
        <Route path="/" element={<GameList games={games}/>} />
        <Route path="/ajouter" element={<GameForm />} />
      </Routes>
      
    </BrowserRouter>
    

  )
}

export default App

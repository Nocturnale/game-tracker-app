

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import GameList from './components/GameList';
import Header from './components/Header';
import GameForm from './components/GameForm';
import { useEffect, useState } from 'react';
import type { Game } from './type';
import { getGames } from './services/gameService';

function App() {

    //State commun pas forcément nécessaire car GameList et GameForm ne sont pas sur la même route
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        getGames().then(setGames)
    }, [])

    
    const handleOnGameAdded = (newGame: Game) => {
      setGames(prev => [...prev, newGame]);
    };

  return (
    <BrowserRouter>
      <Header />
       <Routes>
        <Route path="/" element={<GameList games={games}/>} />
        <Route path="/ajouter" element={<GameForm onGameAdded={handleOnGameAdded} />} />
      </Routes>
      
    </BrowserRouter>
    

  )
}

export default App



import './App.css'
import GameList from './components/GameList';
import Header from './components/Header';
import gameData from './data/games.json'
import type { Game } from './type';

function App() {


const games:Game[] = gameData;

  return (
    <>
      <Header />
      <GameList games={games}/>
    </>
    

  )
}

export default App

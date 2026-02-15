

import './App.css'
import GameList from './components/GameList';
import Header from './components/Header'

function App() {

  type Game = {
    id: number
    title: string
    playedHours: number
    rating: number
    status: string
    priority: string
 };

  return (
    <>
      <Header />
      <GameList />
    </>
    

  )
}

export default App

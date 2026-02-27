

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import GameList from './components/GameList';
import Header from './components/Header';
import GameForm from './components/GameForm';

function App() {



  return (
    <BrowserRouter>
      <Header />
       <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/ajouter" element={<GameForm />} />
      </Routes>
      
    </BrowserRouter>
    

  )
}

export default App

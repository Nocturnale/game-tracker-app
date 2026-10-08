import { useEffect, useState } from 'react'
import './App.css'
import { getGames } from './api/games';
import type { Game } from '@game-tracker-app/shared';

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getGames().then(setGames);
  }, []);

  return (
    <main>
      <h1>Mes jeux</h1>

      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.title} — {game.status}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App

import { GameList } from './components/games/GameList';
import Header from './components/layout/Header';
import { useGames } from './hooks/useGames';

function App() {
  const {data: games, isPending, isError } = useGames();

  if (isPending){
    return <p>Chargement...</p>;
  }

  if (isError){
    return <p>Impossible de charger les jeux</p>
  }

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Mes jeux</h1>
        <GameList games={games}/>
      </main>
    </>
    
  );
}

export default App

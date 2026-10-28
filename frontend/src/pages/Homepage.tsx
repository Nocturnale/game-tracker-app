import { useState } from "react";
import { GameList } from "../components/games/GameList";
import { useGames } from "../hooks/useGames";
import type { GameFiltering } from "@game-tracker-app/shared";
import { usePlatforms } from "../hooks/usePlatforms";
import { GameFilters } from "../components/games/GameFilters";

export default function HomePage() {
    const [filters, setFilters] = useState<GameFiltering>({});

    const {
        data: games, 
        isPending, 
        isError 
    } = useGames(filters);

    const {
        data: platforms,
        isPending: platformsPending,
        isError: platformsError,
      } = usePlatforms();
      
    if (isPending){
        return <p>Chargement...</p>;
    }

    if (isError){
        return <p>Impossible de charger les jeux</p>
    }

    return (
        <>
        <main className="p-8">
            <h1 className="text-3xl font-bold">Mes jeux</h1>
            {platformsError && (
                <p>Impossible de cahrger les plateformes</p>
            )}
            <GameFilters
                filters={filters}
                platforms={platforms ?? []}
                onFiltersChange={setFilters}
            />

            {platformsPending && (
                <p>Chargement des plateformes</p>
            )}
            <GameList games={games}/>
        </main>
        </>
        
    );
}
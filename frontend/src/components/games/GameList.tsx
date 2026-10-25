import type { Game } from '@game-tracker-app/shared'
import GameCard from './GameCard';

type GameListProps = {
    games: Game[];
};

export function GameList({ games }: GameListProps){
    return (
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-6">
            <div className="flex flex-wrap justify-center gap-6">
                {games.map((game) => (
                        <GameCard
                            game={game}
                            key={game.id}
                        />
                ))}
            </div>
        </div>
    )
}
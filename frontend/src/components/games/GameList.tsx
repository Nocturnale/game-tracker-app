import type { Game } from '@game-tracker-app/shared'
import GameCard from './GameCard';

type GameListProps = {
    games: Game[];
};

export function GameList({ games }: GameListProps){
    return (
        <div>
            {games.map((game) => (
                    <GameCard
                        game={game}
                        key={game.id}
                    />
            ))}
        </div>
    )
}
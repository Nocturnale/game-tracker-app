import { useQuery } from "@tanstack/react-query";
import { getGames } from "../api/games";
import type { GameFiltering } from "@game-tracker-app/shared";

export function useGames(filters?: GameFiltering) {
    return useQuery({
        queryKey: ['games', filters],
        queryFn: () => getGames(filters),
    });
}
import { useQuery } from "@tanstack/react-query";
import { getGames } from "../api/games";

export function useGames() {
    return useQuery({
        queryKey: ['games'],
        queryFn: getGames,
    });
}
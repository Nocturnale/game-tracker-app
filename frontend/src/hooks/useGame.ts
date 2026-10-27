import { useQuery } from '@tanstack/react-query';
import { getGameById } from '../api/games';

export function useGame(id: string) {
    return useQuery({
        queryKey: ['games', id],
        queryFn: () => getGameById(id),
    });
}

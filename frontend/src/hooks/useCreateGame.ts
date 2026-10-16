import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGame } from "../api/games";

export function useCreateGame(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createGame,

        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['games']
            });
        },
    });
}
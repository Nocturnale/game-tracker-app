import { useNavigate } from "react-router";
import { usePlatforms } from "../hooks/usePlatforms";
import { createGameSchema, GAME_STATUSES, type CreateGame } from "@game-tracker-app/shared";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateGame } from "../hooks/useCreateGame";

export default function GameCreatePage() {
  const navigate = useNavigate();
  const { data: platforms, isPending: isLoadingPlatforms, isError: platformsError } = usePlatforms();
  const createGameMutation = useCreateGame();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateGame>({
    resolver: zodResolver(createGameSchema),
    defaultValues: {
      title: '',
      status: GAME_STATUSES[0],
      platformId: '',
    },
  });

  const onSubmit = (data: CreateGame) => {
    createGameMutation.mutate(data, {
      onSuccess: () => navigate('/'),
    });
  };

    return (
      <main className="mx-auto max-w-2xl p-6">
        <h1 className="mb-6 text-3xl font-bold">Ajouter un jeu</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="title" className="mb-1 block font-medium">
              Titre *
            </label>
            <input
              id="title"
              {...register('title')}
              className="w-full rounded border p-2"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="platformId" className="mb-1 block font-medium">
              Plateforme *
            </label>
            {isLoadingPlatforms ? (
              <p>Chargement de splateformes...</p>
            ) : platformsError ? (
              <p className="">Impossible de charger les plateformes</p>
            ) : (
              <select
                id="platformId"
                {...register('platformId')}
                className="w-full rounded border p-2"
              >
                <option value="">Choisir une plateforme</option>
                {platforms?.map((platform) => (
                  <option key={platform.id} value={platform.id}>
                    {platform.name}
                  </option>
                ))}
              </select>
            )}

            {errors.platformId && (
              <p className="mt-1 text-sm text-red-500">
                {errors.platformId.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="status" className="mb-1 block font-medium">
              Statut *
            </label>
            <select
              id="status"
              {...register('status')}
              className="w-full rounded border p-2"
            >
              {GAME_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {errors.status && (
              <p className="mt-1 text-sm text-red-600">
                {errors.status.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="estimatedHours" className="mb-1 block font-medium">
              Durée estimée (heures)
            </label>
            <input
              id="estimatedHours"
              type="number"
              min="0"
              {...register('estimatedHours', {
                setValueAs: (value) =>
                  value === '' ? undefined : Number(value),
              })}
              className="w-full rounded border p-2"
            />
            {errors.estimatedHours && (
              <p className="mt-1 text-sm text-red-600">
                {errors.estimatedHours.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="playedHours" className="mb-1 block font-medium">
              Heures jouées
            </label>
            <input
              id="playedHours"
              type="number"
              min="0"
              {...register('playedHours', {
                setValueAs: (value) =>
                  value === '' ? undefined : Number(value),
              })}
              className="w-full rounded border p-2"
            />
            {errors.playedHours && (
              <p className="mt-1 text-sm text-red-600">
                {errors.playedHours.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="priority" className="mb-1 block font-medium">
              Priorité
            </label>
            <select
              id="priority"
              {...register('priority')}
              className="w-full rounded border p-2"
            >
              <option value="">Aucune</option>
              <option value="Basse">Basse</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Haute">Haute</option>
            </select>
          </div>

          {createGameMutation.isError && (
            <p className="text-red-600">
              {createGameMutation.error.message}
            </p>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={createGameMutation.isPending || isLoadingPlatforms || platformsError }
              className="round bg-[#6b5cb1] px-4 py-2 font-medium text-white hover:opacity-90 disabled:opacity-50"
            >
              { createGameMutation.isPending ? 'Création...' : 'Créer le jeu'}
            </button>
            <button 
              type="button"
              onClick={() => navigate('/')}
              className="rounded border px-4 py-2"
            >
              Annuler
            </button>
          </div>
        </form>
      </main>
    );
  }


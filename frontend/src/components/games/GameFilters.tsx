import { GAME_STATUSES, type GameFiltering, type Platform } from "@game-tracker-app/shared";

type GameFiltersProps = {
    filters: GameFiltering,
    platforms: Platform[],
    onFiltersChange: (filters: GameFiltering) => void;
}

export function GameFilters({
    filters,
    platforms,
    onFiltersChange,
}: GameFiltersProps) {
    return(
        <section className="mx-auto mb-6 w-full max-w-screen-2xl px-4">
            <div className="flex flex-col gap-4 rounded-sm p-4 sm:flex-row">
                <input
                    type="search"
                    placeholder="Rechercher un jeu"
                    aria-label="Rechercher un jeu par titre"
                    value={filters.title ?? ''}
                    onChange={(event) => 
                        onFiltersChange({
                            ...filters,
                            title: event.target.value
                        })
                    }
                    className="w-full rounded border px-3 py-2"
                />
                <select
                    aria-label="Filtrer par statut"
                    value={filters.status ?? ''}
                    onChange={(event) => 
                        onFiltersChange({
                            ...filters,
                            status: event.target.value
                            ? (event.target.value as GameFiltering['status'])
                            : undefined, 
                        })
                    }
                    className="w-full rounded border px-3 py-2 sm:w-56"
                >
                    <option value="">Tous les statuts</option>
                        {GAME_STATUSES.map((status) => (
                            <option key={status} value={status}>
                            {status}
                            </option>
                        ))}
                </select>
                <select
                    aria-label="Filter par plateforme"
                    value={filters.platformId ?? ''}
                    onChange={(event) =>
                        onFiltersChange({
                            ...filters,
                            platformId: event.target.value || undefined,
                        })
                    }
                    className="w-full rounded border px-3 py-2 sm:w-56"
                    >
                        <option value="">Toutes les plateformes</option>
                        {platforms.map((platform) => (
                            <option key={platform.id} value={platform.id}>
                                {platform.name}
                            </option>
                        ))}
                </select>
            </div>
        </section>
    )
}
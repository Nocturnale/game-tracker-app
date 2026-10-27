export const GAME_STATUSES = [
    'À faire',
    'En cours',
    'Terminé',
    'Abandonné',
    'Infini',
  ] as const;
  
export type GameStatus = (typeof GAME_STATUSES)[number];

export type Priority = "Basse" | "Moyenne" | "Haute";
export type Status = "À faire" | "En cours" | "Terminé";

export interface Game {
  id: number;
  title: string;
  playedHours: number;
  rating: number;
  priority: Priority;
  status: Status;
  device: string;
}
 
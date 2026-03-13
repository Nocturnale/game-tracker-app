import type { Device } from "../constants/devices";
import type { Priority } from "../constants/priority";
import type { Status } from "../constants/status";


export interface Game {
  id: number;
  title: string;
  playedHours: number;
  estimatedHours:number;
  rating: number;
  priority: Priority;
  status: Status;
  device: Device;
}
 
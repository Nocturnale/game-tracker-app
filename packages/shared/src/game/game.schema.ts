import { z } from 'zod';

import { GAME_STATUSES } from './game-status.js';

export const gameStatusSchema = z.enum(GAME_STATUSES);
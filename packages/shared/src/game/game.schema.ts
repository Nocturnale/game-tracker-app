import { z } from 'zod';

import { GAME_STATUSES } from './game-status.js';
import { platformSchema } from '../platform/platform.schema.js';

export const gameStatusSchema = z.enum(GAME_STATUSES);

export const gameSchema = z.object({
    id: z.uuid(),
    title: z.string().trim()
    .min(1, 'Game title is required'),
    playedHours: z.number().nonnegative().optional(),
    estimatedHours: z.number().nonnegative().optional(),
    status: gameStatusSchema,
    platform: platformSchema,
    rating: z.number().min(0).max(10).optional(),
    priority: z.string().optional()

});
export type Game = z.infer<typeof gameSchema>;

export const createGameSchema = gameSchema
    .omit({
        id: true,
        platform: true,
    })
    .extend({
        platformId: z.uuid('Invalid platform ID'),
    });
export type CreateGame = z.infer<typeof createGameSchema>;

export const updateGameSchema = 
    createGameSchema.partial();

export type UpdateGameInput = z.infer<typeof updateGameSchema>;
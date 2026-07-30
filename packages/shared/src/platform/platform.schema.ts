import { z } from 'zod';

export const platformSchema = z.object({
  id:z.uuid(),
  name: z.string().trim()
  .min(1, 'Platform name is required')
  .max(100, 'Platform name must contain at most 100 characters'),
});
export type Platform = z.infer<typeof platformSchema>;

export const createPlatformSchema = platformSchema.omit({
  id: true,
})

export type CreatePlatform = z.infer<typeof createPlatformSchema>;

export const updatePlatformSchema =
    createPlatformSchema.partial();

export type UpdatePlatformInput = z.infer<typeof updatePlatformSchema>;    
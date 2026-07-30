import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PlatformsModule } from './platforms/platforms.module.js';
import { createPlatformSchema } from '@game-tracker-app/shared';
import mikroOrmConfig from '../mikro-orm.config.js';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    PlatformsModule,
  ],
})
export class AppModule {}
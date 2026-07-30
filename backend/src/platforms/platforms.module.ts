import { Module } from '@nestjs/common';
import { PlatformsService } from './platforms.service.js';
import { PlatformsController } from './platforms.controller.js';

@Module({
  providers: [PlatformsService],
  controllers: [PlatformsController]
})
export class PlatformsModule {}

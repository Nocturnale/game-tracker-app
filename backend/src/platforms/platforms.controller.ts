import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PlatformsService } from './platforms.service.js';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.js';
import { CreatePlatform, createPlatformSchema, UpdatePlatformInput, updatePlatformSchema } from '@game-tracker-app/shared';

@Controller('platforms')
export class PlatformsController {
    constructor(
        private readonly platformsService: PlatformsService,
    ) {}

    @Post()
    create(
        @Body(new ZodValidationPipe(createPlatformSchema))
        data: CreatePlatform,
     ) {
        return this.platformsService.createPlatform(data);
    }    

    @Get()
    findAll() {
        return this.platformsService.findAll();
    }

    @Get(':id')
    findById(
        @Param('id') id: string,
    ){
        return this.platformsService.findById(id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body(new ZodValidationPipe(updatePlatformSchema))
        data: UpdatePlatformInput,
    ) {
        return this.platformsService.update(id, data)
    }
}

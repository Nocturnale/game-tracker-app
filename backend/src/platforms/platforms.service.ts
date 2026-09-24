import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlatform, UpdatePlatformInput } from '@game-tracker-app/shared';
import { Platform } from './entities/platform.entity.js';

@Injectable()
export class PlatformsService {
    constructor(
        private readonly em: EntityManager,
    ){}

    async createPlatform(data: CreatePlatform){

        const platform = this.em.create(Platform, data);
        await this.em.flush();

        return platform;
    }

    async findAll(): Promise<Platform[]> {

        const platforms = await this.em.findAll(Platform);

        return platforms;
    }

    async findById(id: string): Promise<Platform> {

        const platform = await this.em.findOne(Platform, id)
        if(!platform){
            throw new NotFoundException(`Platform with id" ${id}" not found`)
        }
        
        return platform
    }

    async update(id: string, data: UpdatePlatformInput){
        const platform = await this.em.findOne(Platform, id)

        if(!platform){
            throw new NotFoundException(`Platform with id" ${id}" not found`)
        }
        Object.assign(platform, data);

        await this.em.flush();

        return platform;
    }
}

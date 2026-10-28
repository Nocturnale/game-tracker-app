import { EntityManager } from "@mikro-orm/core";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateGame, GameFiltering, UpdateGameInput } from '@game-tracker-app/shared';
import { Game } from "./entities/game.entity.js";
import { Platform } from "../platforms/entities/platform.entity.js";
import { filter } from "rxjs";

@Injectable()
export class GamesService {
    constructor(
        private readonly em: EntityManager,
    ){}

    async createGame(data: CreateGame){
        const { platformId, ...gameData } = data;

        const platform = await this.em.findOne(Platform, platformId)

        if(!platform) {
            throw new NotFoundException(
                `Plateforme avec l'identifiant ${platformId} introuvable`
            );
        }

        const game = this.em.create(Game, {...gameData, platform})
        await this.em.flush();

        return game;
    }

    async findAll(filters?: GameFiltering): Promise<Game[]>{
        const where = {
            ...(filters?.status && { status: filters.status }),
            ...(filters?.title && { title: { $ilike: `%${filters.title}%`} }),
            ...(filters?.platformId && {
                platform: { id: filters.platformId },
            })
        }

        const games = await this.em.find(Game, where, {
            populate: ['platform'],
        });

        return games
    }

    async getGameById(id: string): Promise<Game>{
        const game = await this.em.findOne(
            Game,
            { id },
            { populate: ['platform'] },
        );

        if (!game){
            throw new NotFoundException(`game with id ${id} not found`)
        }

        return game
    }
    
    async update(id: string, data: UpdateGameInput){
        const game = await this.em.findOne(Game, id)

        if(!game){
            throw new NotFoundException(`Game with id ${id} not found`)
        }

        Object.assign(game, data)

        await this.em.flush();

        return game
    }

    async delete(id: string){
        const game = await this.em.findOne(Game, id)
        if(!game){
            throw new NotFoundException(`Game with id ${id} not found`)
        }

        await this.em.remove(game).flush()
        
    }
}
import { EntityManager } from "@mikro-orm/core";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateGame } from '@game-tracker-app/shared';
import { Game } from "./entities/game.entity.js";
import { Platform } from "../platforms/entities/platform.entity.js";

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
}
import { Body, Controller, Post } from "@nestjs/common";
import { GamesService } from "./games.service.js";
import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe.js";
import { CreateGame, createGameSchema } from '@game-tracker-app/shared';

@Controller('games')
export class GamesController {
    constructor(
        private readonly gamesService: GamesService,
    ) {}

    @Post()
    create(
        @Body(new ZodValidationPipe(createGameSchema))
        data: CreateGame,
        ) {
            
        return this.gamesService.createGame(data);
    }  
}
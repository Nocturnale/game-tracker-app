import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { GamesService } from "./games.service.js";
import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe.js";
import { CreateGame, createGameSchema, UpdateGameInput, updateGameSchema } from '@game-tracker-app/shared';

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

    @Get()
    findAll(){
        return this.gamesService.findAll();
    }

    @Patch(':id')
    update(
        @Param('id') id:string,
        @Body( new ZodValidationPipe(updateGameSchema))
        data: UpdateGameInput,
    ){
        return this.gamesService.update(id, data)
    }

    @Delete(':id')
    delete(
        @Param('id') id: string
    ){
        return this.gamesService.delete(id)
    }
}
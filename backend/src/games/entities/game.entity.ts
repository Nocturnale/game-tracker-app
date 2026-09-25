import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/decorators/legacy";
import { Platform } from "../../platforms/entities/platform.entity.js";
import {
  GAME_STATUSES,
  type GameStatus,
} from '@game-tracker-app/shared';

@Entity({ tableName : 'games' })
export class Game {
    @PrimaryKey({
        type: 'uuid',
        defaultRaw: 'gen_random_uuid()',
      })
    id!: string;
    
    @Property()
    title!: string;

    @Property({ fieldName: 'played_hours', default: 0 })
    playedHours?: number;

    @Property({ fieldName: 'estimated_hours', default: 0 })
    estimatedHours?: number;

    @Enum({
      items: () => GAME_STATUSES,
    })
    status!: GameStatus;

    @ManyToOne(() => Platform, { fieldName: 'platformId'})
    platform!: Platform;

    @Property()
    rating?: number;

    @Property()
    priority?: string;
}
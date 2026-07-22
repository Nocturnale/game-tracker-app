import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';

@Entity({ tableName: 'platforms' })
export class Platform {

  @PrimaryKey({
    type: 'uuid',
    defaultRaw: 'gen_random_uuid()',
  })
  id!: number;

  @Property()
  name!: string;

}
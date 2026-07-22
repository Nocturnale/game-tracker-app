import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';

@Entity()
export class Platform {

  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

}
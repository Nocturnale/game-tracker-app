import { Migration } from '@mikro-orm/migrations';

export class Migration20260721151720 extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table "platform" ("id" serial primary key, "name" varchar(255) not null);`);
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "platform" cascade;`);
  }

}

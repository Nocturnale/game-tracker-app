import { Migration } from '@mikro-orm/migrations';

export class Migration20260722090250 extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table "platforms" ("id" uuid not null default gen_random_uuid(), "name" varchar(255) not null, primary key ("id"));`);

    this.addSql(`drop table if exists "platform" cascade;`);
  }

  override down(): void | Promise<void> {
    this.addSql(`create table "platform" ("id" serial primary key, "name" varchar(255) not null);`);

    this.addSql(`drop table if exists "platforms" cascade;`);
  }

}

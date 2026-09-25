import { Migration } from '@mikro-orm/migrations';

export class Migration20260925133621 extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table "games" ("id" uuid not null default gen_random_uuid(), "title" varchar(255) not null, "played_hours" int null default 0, "estimated_hours" int null default 0, "status" text not null, "platformId" uuid not null, "rating" int null, "priority" varchar(255) null, primary key ("id"));`);

    this.addSql(`alter table "games" add constraint "games_platformId_foreign" foreign key ("platformId") references "platforms" ("id");`);
    this.addSql(`alter table "games" add constraint "games_status_check" check ("status" in ('À faire', 'En cours', 'Terminé', 'Abandonné'));`);
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "games" cascade;`);
  }

}

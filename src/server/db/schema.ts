import * as pg from "drizzle-orm/pg-core";

export const animalTypeEnum = pg.pgEnum("animal_type_enum", ["DOG", "CAT"]);

export const animals = pg.pgTable("animals", {
  id: pg
    .varchar({ length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  name: pg.varchar({ length: 255 }).notNull(),
  type: animalTypeEnum().notNull(),
  breed: pg.varchar().notNull(),
  description: pg.text().notNull(),
  age: pg.text().notNull(),

  createdAt: pg.timestamp().notNull().defaultNow(),
});

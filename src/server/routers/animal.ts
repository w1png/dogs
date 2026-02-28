import Elysia from "elysia";
import { AnimalSchema } from "../../shared/animal";
import { db } from "../db";
import { animals } from "../db/schema";
import { desc, eq } from "drizzle-orm";

export const animalRouter = new Elysia({
  prefix: "/animals",
})
  .post(
    "/",
    async ({ body }) => {
      await db.insert(animals).values(body);
    },
    {
      body: AnimalSchema,
    },
  )
  .put(
    "/:id",
    async ({ params, body }) => {
      await db.update(animals).set(body).where(eq(animals.id, params.id));
    },
    {
      body: AnimalSchema,
    },
  )
  .delete("/:id", async ({ params }) => {
    await db.delete(animals).where(eq(animals.id, params.id));
  })
  .get("/", async ({ status }) => {
    return await db.query.animals.findMany({
      orderBy: desc(animals.createdAt),
    });
  });

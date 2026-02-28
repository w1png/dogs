import Elysia from "elysia";
import { animalRouter } from "./routers/animal";

export const app = new Elysia({
  prefix: "/api",
}).use(animalRouter);

export type App = typeof app;

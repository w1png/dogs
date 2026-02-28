import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { DefaultLogger, type LogWriter } from "drizzle-orm";

class ConsoleLogger implements LogWriter {
  write(message: string) {
    console.log(message);
  }
}

export const db = drizzle(process.env.DATABASE_URL || "", {
  logger: new DefaultLogger({ writer: new ConsoleLogger() }),
  schema: schema,
});

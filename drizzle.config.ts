import { type Config } from "drizzle-kit";

import { env } from "npm/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  tablesFilter: ["t3gallery_*"],
} satisfies Config;

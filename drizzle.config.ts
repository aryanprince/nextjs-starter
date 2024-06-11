import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: "sqlite",
    driver: "turso",
    schema: "./src/server/db/schema.ts",
    out: "./src/server/db/migrations",
})
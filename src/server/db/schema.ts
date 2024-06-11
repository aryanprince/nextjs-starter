import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const blogs = sqliteTable('blogs', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content'),
});

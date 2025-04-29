import { cors } from '@elysiajs/cors';
import { Elysia } from 'elysia';

import { SQLDatabase } from './configs/database.config';

const app = new Elysia({ serve: { reusePort: true } });

app.use(cors()).get('hi', () => 'Hello Elysia');

app.listen(process.env.PORT || 3000, async () => {
  try {
    await SQLDatabase.initialize();
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
  } catch (error: any) {
    console.log('Main error (index.ts):', error.message);
  }
});

export type App = typeof app;

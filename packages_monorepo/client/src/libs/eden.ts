// client.ts
import { treaty } from '@elysiajs/eden';
import type { App } from '@monorepo/server';

const app = treaty<App>('localhost:3000');

export default app;

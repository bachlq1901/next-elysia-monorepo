// client.ts
import { treaty } from '@elysiajs/eden';
import { eden } from '@shared/configs/eden';

const app: any = treaty<typeof eden.app>('localhost:8080');

export default app;

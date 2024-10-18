import express from 'express';
import getEvents from './events/routes';

import { getUserByEmail } from './users/controller';
const app = express();

app.use(express.json());

app.use(getEvents);

app.get('/getUser/:user_email', getUserByEmail);
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  },
);

export default app;

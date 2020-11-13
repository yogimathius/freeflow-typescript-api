import express, { Request, Response } from 'express';
import bodyparser from 'body-parser';

require('dotenv').config();
const queryFunctions = require('./database');

const app = express();
const PORT = 8000;

//Require Routers
const userRouter = require('./routers/users');
const likeRouter = require('./routers/likes');
const karmaRouter = require('./routers/karmas');
const commentRouter = require('./routers/comments');
const postingRouter = require('./routers/postings');
// Router

app.use(bodyparser.json());

app.use('/api/users', userRouter(queryFunctions));
app.use('/api/likes', likeRouter(queryFunctions));
app.use('/api/karmas', karmaRouter(queryFunctions));
app.use('/api/comments', commentRouter(queryFunctions));
app.use('/api/postings', postingRouter(queryFunctions));

app.get('/', (req: Request, res: Response) =>
	res.send('Express TypeScript Server')
);

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}!`));

import cors from 'cors';
import express from 'express';
import usersRouter from "./routers/users";
import reposRouter from "./routers/repositories";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/users', usersRouter);
app.use('/repositories', reposRouter);


const run = async () => {
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
};

run().catch(console.error);
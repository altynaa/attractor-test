import cors from 'cors';
import express from 'express';
import usersRouter from "./routers/users";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/users', usersRouter);


const run = async () => {
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
};

run().catch(console.error);
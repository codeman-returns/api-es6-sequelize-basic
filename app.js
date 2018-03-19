import express from 'express';
import bodyParser from 'body-parser';
import users from './routes/users';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users);

app.listen(3000, () => console.log('Running'));
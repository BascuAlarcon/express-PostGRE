import express from 'express';
import 'dotenv/config'
import routerTodo from './routes/todo.route';

const app = express();

app.use(express.json());

app.use('/api/todos', routerTodo)

const PORT = process.env.PORT || 5001;

app.listen(5001, () => {
    console.log('Server running on port', PORT)
})
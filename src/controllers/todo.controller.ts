import { Request, Response } from 'express';
import { todoModel } from "../models/todo.models";


const getAll = async (req: Request, res: Response) => {
    try {
        const { rows } = await todoModel.findAll();
        res.json(rows)
    } catch (error) {
        console.log(error);
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const { title } = req.body;
        const response = await todoModel.create(title);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const todoController = {
    getAll,
    create
}
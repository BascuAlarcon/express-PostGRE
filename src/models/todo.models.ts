import { pool } from "../database/connection"

const findAll = async () => {
    const result = await pool.query('SELECT * FROM todos');
    return result;
}

const create = async (title: String) => {
    const query = "INSERT INTO todos (title) VALUES ($1) RETURNING *"
    const { rows } = await pool.query(query, [title])
    return rows[0];
}

export const todoModel = {
    findAll,
    create
};

import { v4 as uuidv4 } from 'uuid';
import  pool from "../db.js";



const insertTodo = async (title) => {
    const id = uuidv4();
    const completed = false;
    await pool.query('INSERT INTO todo (id, title, completed) VALUES ($1, $2, $3)', [id, title, completed]);
  };
  
//   insertTodo().catch(err => console.error('Error executing query', err.stack));

export default insertTodo
  
  
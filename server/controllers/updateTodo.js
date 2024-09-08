
import { v4 as uuidv4 } from 'uuid';
import  pool from "../db.js";



const updateTodo = async (id) => {
    const response = await  pool.query('update  todo set completed = true where id = $1 ;' , [id]);
    return response
};
  

export default updateTodo
// updateTodo("88764437-79e0-4afb-8c25-c5aca2e59d29").catch(err => console.error('Error executing query', err.stack));
  
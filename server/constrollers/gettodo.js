
import { v4 as uuidv4 } from 'uuid';
import  pool from "../db.js";



const getTodo = async () => {
    const response = await pool.query('select * from todo;');
    return response
};
export default getTodo
  
// getTodo().catch(err => console.error('Error executing query', err.stack));
  
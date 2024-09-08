// Import the 'pg' library
import pkg from 'pg';
import { v4 as uuidv4 } from 'uuid';
const {Pool} = pkg


// Create a new pool instance
 const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'todo',
    password: 'password',
    port: 5432,
});

export default pool

// const query1 = `select * from todo;`

// // Example query using the pool
// pool.query(query1)
//     .then(res => console.log(res.rows))
//     .catch(err => console.error('Query error', err.stack))
//     .finally(() => pool.end()); // Close all connections in the pool

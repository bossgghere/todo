import express, { json } from "express"
import getTodo from "./constrollers/gettodo.js"
import insertTodo from "./constrollers/createtodo.js"
import updateTodo from "./constrollers/updateTodo.js"
const app = express()


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("Hello gg")
})

app.get('/todos', async (req, res) => {
    try {
        const todos = await getTodo()
        res.status(200).send(todos.rows)

    } catch (e) {
        console.log(e)
        res.status(400)
    }
})

app.post('/todos',async(req,res)=>{
    const{title}=req.body
    try{
        const response=await insertTodo(title)
        res.status(200).send(response)

    }
    catch (e){
        console.log(e);
        res.status(400).send(e)
    }
})


app.patch('/completed',async(req,res)=>{
    const {id}=req.body
    try{
        const response=await updateTodo(id)
        res.status(200).send(response)

    }
    catch (e){
        console.log(e);
        res.status(400).send(e)
    }
})



app.listen(3000, () => {
    console.log("server is running")
})
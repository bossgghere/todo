import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Supersamosa from './temp'

function App() {
  const [todo, setTodo] = useState('')
  const [todos,setTodos] = useState([])
  const [id,setid] = useState(1)

  const handleChange = (e)=> {
        
    
  }



  const handleSubmit = async (event) => {
    event.preventDefault();
    const todoObj  = {
      id:id,
      value:todo,
      checked:false
    }
    setid(id+1)
    setTodos((prevTodos) =>[...prevTodos, todoObj]);
    setTodo("")

  }
  useEffect(()=>{
    console.log(todos)
  },[todos])

  return (
    <>

      <div className="m-4 p-10">

        <Supersamosa />
        <br />
        <form onSubmit={handleSubmit}>
          <input type="text"
          value={todo}
          onChange={(e) => { 
            setTodo(e.target.value)

          }} 
          placeholder='Enter a todo' 
          name='todo' 
          className="border border-gray-300 rounded-md p-2 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
          <br />
          <button type='submit' 
          className='bg-blue-500 mt-4 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
          >Save the todo
          </button>
        </form>
          
          {
            todos.map((todo)=>(
              <div  className=' flex gap-3' key={todo.id}>
                {todo.value} 
                <input type="checkbox" onChange={(e)=>{
                  // console.log(todo.id)
                  checked=true;
                  console.log(e)
                }} name="" id="" />
              </div>
            ))
          }

      </div>

    </>
  )
}

export default App


function samosa(x) { return x * x }

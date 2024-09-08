import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState('')
  const [store, setStore] = useState([
    { id: 1, value: 'Learn React', done: true },
    { id: 2, value: 'Build a project', done: false },
  ])


  const handlechange = (e, id) => {
    const { checked } = e.target;
    setStore((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: checked } : todo
      )
    );
  }


  function addtodo(todo) {
    let arr = store
    const newTodo = {
      "id": arr.length + 1,
      "value": todo,
      "done": false
    }
    arr.push(newTodo)
    setStore(arr)
    setTodo('')
  }

  useEffect(() => {
    console.log(store)
  }, [store])


  return (
    <> <div className='flex justify-center items-center h-4/5'>
      <div className="m-4 p-10">
        <br />
        <h1 className='text-3xl underline font-sans font-bold'>My Todo</h1>
        <br />
        <form onSubmit={(e) => {
          e.preventDefault()
          addtodo(todo)
        }}>

          <input placeholder="todo likh yaha pe" type="text"
            value={todo}
            className="w-half p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300" onChange={(e) => { setTodo(e.target.value) }} />
          <br />
          <br />
          <button type='submit' className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"> submitt </button>


        </form>

        <div>
          {
            store.map((todo) => (
              <div
                key={todo.id}
                className='flex gap-2'
              >
                <div className='mt-4 flex gap-4'>
                {todo.done ? <div className='line-through' >{todo.value} </div>: <div   >{todo.value} </div> }
                  
                  <input type="checkbox"
                    checked={todo.done}
                    onChange={(e) => {
                      handlechange(e, todo.id)
                    }}
                  /> 
                  </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
    </>
  )
}

export default App
                                
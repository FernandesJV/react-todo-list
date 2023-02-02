import { useState, useEffect } from "react";



function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList'))||[])

  const handleKeyDown = e => {
    
    if(e.key==='Enter'){
      setTodoList(todoList.concat([{'text':e.target.value, complete: false}]))
      e.target.value = ''
    }
  }

  const handleChange = (e) => {
    let newTodoList = [...todoList]
    newTodoList[parseInt(e.target.parentNode.getAttribute('todoindex'))].complete = e.target.checked
    setTodoList(newTodoList)
  }

  useEffect(() => {
    console.log(todoList)
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [ todoList ])

  return (
    <div className="App">
      <div className="list">
        <input type='text' onKeyDown={ handleKeyDown }></input>
        { todoList.map( (item, index) => {
            return(
              <div todoindex= { index } key={ index } style= {{ display: 'flex' }} >
              <p> { item.text } </p>
              <input type='checkbox' onChange={ handleChange } checked = { item.complete }></input>
              </div>)
          }) 
        }
        </div>
    </div>
  );
}

export default App;

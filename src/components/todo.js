import React, { useEffect, useState } from "react"
import todoStyles from "./todo.module.scss"
import { BsFillTrashFill, BsCheck, BsArrowClockwise } from "react-icons/bs";

function ToDoComponent() {
  const [items, setItems] = useState([])
  useEffect(() => {
    var toDoList = JSON.parse(localStorage.getItem("toDoList"))
    setItems(toDoList)
  }, [])

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(items))
  }, [items])

  const addItem = e => {
    e.preventDefault()
    if (e.target[0].value !== "") {
      var newListItem = {
        text: e.target[0].value,
        isCompleted: false,
        key: Date.now(),
      }
      e.target.reset()
      const newTodos =
        items != null ? [...items, { ...newListItem }] : [{ ...newListItem }]
      setItems(newTodos)
      localStorage.setItem("toDoList", JSON.stringify(newTodos))
    }
  }

  const deleteItem = index => {
    const newTodos = [...items]
    newTodos.splice(index, 1)
    setItems(newTodos)
    localStorage.setItem("toDoList", JSON.stringify(newTodos))
  }

  const toggleLineThroughItem = index => {
    const newTodos = [...items]
    newTodos[index].isCompleted = newTodos[index].isCompleted ? false : true;
    setItems(newTodos)
    localStorage.setItem("toDoList", JSON.stringify(newTodos))
  }

  return (
    <div className={`widget toDo ${todoStyles.toDoWrapper}`}>
      <h2>ToDo:</h2>
      <div className={`${todoStyles.toDoItemsWrapper}`}>
        {items && items.length !== 0 ? (
          items.map((item, index) => (
            <div className={`toDo--item ${todoStyles.toDoItem}`} key={item.key}>
              <div
                className={`${todoStyles.toDoItemName}`}
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "",
                }}
              >
                - {item.text}
              </div>
              <span className={`${todoStyles.itemControls}`}>
                <button title={item.isCompleted ? "Mark Item as not complete" : "Mark Item as complete"}
                  onClick={() => {
                    toggleLineThroughItem(index)
                  }}
                >
                  {item.isCompleted ? <BsArrowClockwise/> : <BsCheck/>}
                </button>
                <button title="Delete Item"
                  onClick={() => {
                    deleteItem(index)
                  }}
                >
                  <BsFillTrashFill/>
                </button>
              </span>
            </div>
          ))
        ) : (
          <div className={`${todoStyles.toDoItemName}`}>
            Add something to your todo list...
          </div>
        )}
      </div>
      <form
        className={`${todoStyles.toDoForm}`}
        onSubmit={e => {
          addItem(e)
        }}
      >
        <input placeholder="Do something.." className={todoStyles.input} />
        <button href="#" className={todoStyles.button}>
          Add Item
        </button>
      </form>
    </div>
  )
}
export default ToDoComponent

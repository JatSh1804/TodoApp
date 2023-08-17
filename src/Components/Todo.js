import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({ task, deleteTodo, toggleComplete, setQuantity }) => {
  const [current, setCurrent] = useState(task.quantity || 0);

  const [colour, setcolour] = useState(0)
  useEffect(() => {
    setQuantity(task, current)
    setcolour()
  }, [current])


  const handleInc = () => {
    setCurrent(current + 1);
    setQuantity(task, current);
  }
  const handleDec = () => {
    if (current == 0) {
      setCurrent(current)

    } else {
      setCurrent(current - 1);
    }
  }
  // let Red = 255 - (255 * (Number / 100))
  //     Green = 255 * (Number / 100)
  //     Blue = 0

  const todoStyle = { }
  return <>
    <div className="Todo" style={{ backgroundColor: `rgb(${255 - (255 * (colour / 100)), 255 * (colour / 100)},0)`}}>
      <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <p className={`${task.completed ? 'completed' : ''}`}>
        <button className='btn Dec' onClick={handleDec}>
          -</button>&nbsp;{current}&nbsp;<button onClick={handleInc} className='btn Inc' >+</button>
      </p>
      <p className={`${task.completed ? 'completed' : ""}`} >{task.goal}</p>
      <p style={{ width: 'fit-content' }}>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </p>
    </div>
  </>
}

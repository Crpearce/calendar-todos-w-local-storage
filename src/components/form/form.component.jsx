import { useState, useEffect } from 'react'

import './form.styles.css'

const Form = ({ name }) => {
  const localStorageTasks = JSON.parse(localStorage.getItem(`${name} schedule`))
  const [taskDate, setTaskDate] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [newTask, setNewTask] = useState('')
  const [allTasks, setAllTasks] = useState(localStorageTasks || [])

  useEffect(() => {
    localStorage.setItem(`${name} schedule`, JSON.stringify(allTasks))
  }, [allTasks, name])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      id: Date.now(),
      date: taskDate,
      desc: taskDesc,
      completed: false,
    }
    setNewTask(newTask)
    setAllTasks([newTask, ...allTasks])
    setTaskDate('')
    setTaskDesc('')
  }

  const updateComplete = (id) => {
    const matchingTask = allTasks.find((task) => task.id === id)
    const position = allTasks.indexOf(matchingTask)
    const changeStatus = {
      id: matchingTask.id,
      date: matchingTask.date,
      desc: matchingTask.desc,
      completed: !matchingTask.completed,
    }
    const replacement = allTasks.splice(position, 1, changeStatus)
    if (replacement) {
      setAllTasks(replacement)
    }
    setAllTasks(allTasks)
    localStorage.setItem(`${name} schedule`, JSON.stringify(allTasks))
  }

  const removeTask = (id) => {
    const matchingTask = allTasks.filter((task) => task.id !== id)
    setAllTasks(matchingTask)
  }

  return (
    <div className='form-container'>
      <h1 className='form-header'>{name}'s todo list</h1>
      <div className='input-container'>
        <label>
          Date:
          <input
            type='date'
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
          />
        </label>
        <label>
          Task description:
          <input
            type='text'
            value={taskDesc}
            placeholder='Add task'
            onChange={(e) => setTaskDesc(e.target.value)}
            required
          />
        </label>
        <button onClick={handleSubmit}> add to list</button>
      </div>
      <ul className='list-container'>
        {allTasks?.map((task) => {
          return (
            <li key={task.id}>
              <label>
                Completed:
                <input
                  type='checkbox'
                  defaultChecked={task.completed}
                  onClick={() => updateComplete(task.id)}
                />
              </label>
              <h3>{task.date}</h3>
              <p>{task.desc}</p>
              <button onClick={() => removeTask(task.id)}>X</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Form

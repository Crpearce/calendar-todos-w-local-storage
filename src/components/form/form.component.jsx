import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { LuDelete } from 'react-icons/lu'
import { BsFillCalendarPlusFill } from 'react-icons/bs'

import './form.styles.css'

const Form = ({ nameDisplay }) => {
  const localStorageTasks = JSON.parse(
    localStorage.getItem(`${nameDisplay} schedule`)
  )
  const [taskDate, setTaskDate] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [newTask, setNewTask] = useState('')
  const [allTasks, setAllTasks] = useState(localStorageTasks || [])

  useEffect(() => {
    localStorage.setItem(`${nameDisplay} schedule`, JSON.stringify(allTasks))
  }, [allTasks, nameDisplay])

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
    localStorage.setItem(`${nameDisplay} schedule`, JSON.stringify(allTasks))
  }

  const removeTask = (id) => {
    const matchingTask = allTasks.filter((task) => task.id !== id)
    setAllTasks(matchingTask)
  }

  return (
    <div className='form-container'>
      <h1 className='form-header'>{nameDisplay}'s todo list</h1>
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
        <BsFillCalendarPlusFill className='add-icon' onClick={handleSubmit} />
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
              <LuDelete
                className='delete-icon'
                onClick={() => removeTask(task.id)}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Form

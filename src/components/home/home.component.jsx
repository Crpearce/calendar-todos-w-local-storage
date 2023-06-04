import { useState } from 'react'
import { Link } from 'react-router-dom'

import { BsFillCalendarDateFill } from 'react-icons/bs'
import { AiOutlineUserAdd } from 'react-icons/ai'

import './home.styles.css'

const Home = () => {
    const localStorageNames = JSON.parse(
    localStorage.getItem(`names`)
    )
    console.log(localStorageNames)
  const [newUser, setNewUser] = useState('')
  const [allUsers, setAllUsers] = useState(localStorageNames)

  const handleSubmit = (e) => {
    const info = {
      id: Date.now(),
      name: newUser,
    }
    const initalTodos = []
    localStorage.setItem(`${info.name} schedule`, JSON.stringify(initalTodos))
    setNewUser(info)
    setAllUsers([...allUsers, info.name])
    localStorage.setItem('names', JSON.stringify([...allUsers, newUser]))
    setNewUser('')
  }

  return (
    <div className='home-container'>
      <h1>Family Task Tracker</h1>
      <div className='add-member-container'>
        <label className='add-person-label'>
          Add Calendar:
          <input
            type='text'
            value={newUser}
            placeholder='Name'
            onChange={(e) => setNewUser(e.target.value)}
            required
          />
          <AiOutlineUserAdd
            onClick={handleSubmit}
            className='add-member-icon'
          />
        </label>
      </div>
      <div className='calendar-container'>
        {allUsers.length === 0 && <h1>Please add a family member to begin</h1>}
        {allUsers.map((user) => {
          return (
            <Link
              to={`/${user}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              key={user}
            >
              <h2>
                {user}'s Calendar{' '}
                <BsFillCalendarDateFill className='calendar-icon' />
              </h2>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home

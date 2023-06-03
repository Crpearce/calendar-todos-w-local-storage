import { Link } from 'react-router-dom'

import { BsFillCalendarDateFill } from 'react-icons/bs'

import './home.styles.css'

import { useState } from 'react'

const Home = () => {
  const [newUser, setNewUser] = useState('')
  const [allUsers, setAllUsers] = useState('')


  const handleSubmit = (e) => {
    console.log(newUser)
    const userInfo = {
      id: Date.now(),
      name: newUser,
    }
    setNewUser(userInfo)
    setAllUsers([...allUsers, newUser])
    setNewUser('')
  }

  return (
    <div className='home-container'>
      <h1>Family Task Tracker</h1>
      <div>
        <input
          type='text'
          value={newUser}
          placeholder='Name'
          onChange={(e) => setNewUser(e.target.value)}
          required
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div className='calendar-container'>
        <Link to='/Colby' style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>
            Colby's Calendar{' '}
            <BsFillCalendarDateFill className='calendar-icon' />
          </h2>
        </Link>
        <Link
          to='/Natalie'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h2>
            Natalies's Calendar{' '}
            <BsFillCalendarDateFill className='calendar-icon' />
          </h2>
        </Link>
        {allUsers.length !== 0 &&
          allUsers.map((user) => {
            return (
              <Link
                to='/user'
                style={{ textDecoration: 'none', color: 'inherit' }}
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

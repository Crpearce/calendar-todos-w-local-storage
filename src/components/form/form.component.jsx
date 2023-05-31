import './form.styles.css'

const Form = () => {
  return (
    <div className='form-container'>
      <label>
        {' '}
        Date:
        <input
          type='date'
        //   value={taskDate}
        //   onChange={(e) => setTaskDate(e.target.value)}
        />
      </label>
      <label>
        {' '}
        Task description:
        <input
          type='text'
        //   value={taskDesc}
        //   placeholder='Add task'
        //   onChange={(e) => setTaskDesc(e.target.value)}
          required
        />
      </label>
      <button> add to list</button>
      {/* <ul className='list-container'>
        {allTasks?.map((task) => {
          return (
            <li key={task.id}>
              <label>
                {' '}
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
      </ul> */}
    </div>
  )
}

export default Form
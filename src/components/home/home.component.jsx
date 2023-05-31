import { Link } from "react-router-dom"

import './home.styles.css'

const Home = () => {
  return (
    <div className="home-container">
        <h1>Family Task Tracker</h1>
        <Link to='/Colby'>
            <button>Colby's Calendar</button>
        </Link>
        <Link to='/Natalie'>
            <button>Natalie's Calendar</button>
        </Link>
    </div>
  )
}

export default Home
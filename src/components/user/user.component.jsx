import { useParams } from 'react-router-dom'

import Form from '../form/form.component'
import Navigation from '../navigation/navigation.component'

import './user.styles.css'

const User = () => {
  let { userId } = useParams()
  
  return (
    <div className='schedule-container'>
      <Navigation />
      <Form nameDisplay={userId} />
    </div>
  )
}

export default User

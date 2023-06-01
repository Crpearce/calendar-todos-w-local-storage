import Form from '../form/form.component'
import Navigation from '../navigation/navigation.component'
import './natalie.styles.css'

const Natalie = () => {
  return (
    <div className='schedule-container'>
      <Navigation />
      <Form name='Natalie'/>
    </div>
  )
}

export default Natalie
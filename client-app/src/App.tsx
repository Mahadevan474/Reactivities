import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Header, List, ListItem } from 'semantic-ui-react'

function App() {
  //const [count, setCount] = useState(0) React Hook usestate --> To DO later

  const [activities, setActivities] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:5000/api/activities')
      .then(responce  =>{
        setActivities(responce.data)
        console.log(responce)
      })
    }, [])

  return (
  
    <div> 

      <Header as = 'h2' icon = 'users' content = 'Reactivities'/>
        
        <List>
          {activities.map((activity:any) => (
            <ListItem key = {activity.id}>
              {activity.title}
            </ListItem>
            
          ))}
        </List>
    </div>
  )
}

export default App

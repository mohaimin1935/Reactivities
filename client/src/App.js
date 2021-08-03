import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/Activities")
      .then(response => setActivities(response.data))
  }, [])

  console.log(activities)

  if (activities) {
    return (
      <div>
        {
          activities.map(activity => (
            <div className='p-4 m-2 rounded bg-gray-200 max-w-md mx-auto'>
              <h3>
                {activity.title}
              </h3>
            </div>
          ))
        }
      </div>
    )
  } else { return <>Loading...</>}
}

export default App;

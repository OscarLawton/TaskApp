//import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: 'wash clothes',
        day: 'Fri 9th June at 2:30 pm',
        reminder: false
      },
      {
        id: 2,
        text: 'Collect money',
        day: 'Fri 9th June at 2:30 pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Take out bins',
        day: 'Fri 9th June at 2:30 pm',
        reminder: false
      }
  ])
  
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
} 

/* class App extends React.Component {
  render(){
    return <h1>hello from a class</h1>
  }
}
 */
export default App

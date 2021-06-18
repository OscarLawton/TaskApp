//import React from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
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
  
  // Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  // Toggle Reminder 
  const toggleReminder = (id) => {
    console.log()
    setTasks(tasks.map((task) => task.id === id? { ...task, reminder: !task.reminder }: task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Taskas')}
      
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

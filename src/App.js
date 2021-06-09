//import React from 'react'
import Header from './components/Header'
import Tasks from './components/Task'
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: 'wash clothes',
        reminder: false
      },
      {
        id: 2,
        text: 'wash clothes',
        reminder: true
      },
      {
        id: 3,
        text: 'wash clothes',
        reminder: false
      }
    ])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
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

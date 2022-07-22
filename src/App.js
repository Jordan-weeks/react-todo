import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'



function App() {
  const [tasks, setTasks] = useState([
    {
        text: 'this is a test',
        id: 1
    },
    {
        text: 'this is another test',
        id: 2
    }
  ])

  return (
    <div className="container">
     <Header title="hello" />
    <Tasks tasks={tasks} />
    </div>
  );
}
// CSS in JS
// const headingStyle = {
//   color: 'purple'
// }
export default App;

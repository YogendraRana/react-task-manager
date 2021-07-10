//import style
import './css/style.css'

//import components
import Header from './components/Header'
import InputTaskForm from './components/InputTaskForm'
import TaskList from './components/TaskList'

//import Context
import TaskContextProvider from './context/TaskContext'

function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <TaskContextProvider>
          <Header />
          <InputTaskForm />
          <TaskList />
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;

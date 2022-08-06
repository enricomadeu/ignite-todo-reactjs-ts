import { useState } from 'react'

import { Header, Input, Tasks } from './components'

import styles from './App.module.css'

interface Tasks {
  id: number;
  isActive: boolean;
  task: string;
}

export function App() {
  const [taskCount, setTaskCount] = useState(0);

  const [tasks, setTasks] = useState<Tasks[]>([]);

  function handleCheckTask(id: number){
    setTasks(tasks.map(task => {
      if(task.id === id){
        task.isActive = !task.isActive;
      }
      return task;
    }));
  }

  function handleCreateTask(task: string){
    setTasks([...tasks, {
      id: taskCount,
      isActive: false,
      task,
    }]);
    setTaskCount(prevState => prevState + 1);
  }

  function handleDeleteTask(id: number){
    setTasks(prevState => prevState.filter(task => task.id !== id));
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Input
          handleCreateTask={handleCreateTask}
        />
        <Tasks 
          data={tasks}
          handleCheckTask={handleCheckTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  )
}

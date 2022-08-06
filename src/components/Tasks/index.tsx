import { useState } from 'react';

import clipboard from '../../assets/clipboard.svg';
import styles from './Tasks.module.css'
import { TaskCard } from '../TaskCard'

interface TasksProps {
  data: {
    id: number;
    isActive: boolean;
    task: string;
  }[];
  handleCheckTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

export function Tasks(props: TasksProps) {

  const { data, handleCheckTask, handleDeleteTask } = props;

  const allTasks = data.length;
  const activeTasks = data.filter(task => task.isActive).length;

  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <div>
          <strong>Tarefas Criadas</strong>
          <p>{allTasks}</p>
        </div>
        <div>
          <strong>Concluídas</strong>
          <p>{activeTasks}</p>
        </div>
      </header>
      <div className={styles.tasksContent}>
        {data.length > 0 ? (
          (data.map((task) => (
            <TaskCard 
              key={task.id}
              data={task}
              handleCheckTask={handleCheckTask}
              handleDeleteTask={handleDeleteTask}
            />
          )))
        ) : (
          <div className={styles.emptyTasks}>
            <img src={clipboard} alt="Clipboard" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </div>
      
    </div>
  )
}
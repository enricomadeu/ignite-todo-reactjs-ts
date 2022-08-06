import styles from './TaskCard.module.css';
import { Checkbox } from '../Checkbox'
import { Trash } from 'phosphor-react';

interface TaskCardProps {
  data: {
    id: number;
    isActive: boolean;
    task: string;
  },
  handleCheckTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

export function TaskCard(props: TaskCardProps) {
  const { id, isActive, task } = props.data;
  const { handleCheckTask, handleDeleteTask } = props;
  return (
    <div className={styles.card}>
      <Checkbox 
        id={id}
        isActive={isActive}
        handleCheckTask={handleCheckTask}
      />
      <p className={`${isActive && styles.activeTask}`}>
        {task}
      </p>
      <button 
        className={styles.deleteButton}
        onClick={() => handleDeleteTask(id)}
      >
        <Trash size={16}/>
      </button>
    </div>
  )
}
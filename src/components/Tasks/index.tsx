import clipboard from '../../assets/clipboard.svg';
import styles from './Tasks.module.css'
import { TaskCard } from '../TaskCard'

export function Tasks(){
  let haveTasks = false;

  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <div>
          <strong>Tarefas Criadas</strong>
          <p>0</p>
        </div>
        <div>
          <strong>Concluídas</strong>
          <p>0</p>
        </div>
      </header>
      {haveTasks ? (
        <TaskCard/>
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
  )
}
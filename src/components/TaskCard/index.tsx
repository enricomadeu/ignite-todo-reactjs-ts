import styles from './TaskCard.module.css';
import { Checkbox } from '@mui/material'

export function TaskCard(){
  return (
    <div className={styles.card}>
      <Checkbox />
      <p>Uma tarefa do crl</p>
    </div>
  )
}
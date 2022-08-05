import todo_logo from '../../assets/todo_logo.svg';
import styles from './Header.module.css';

export function Header(){
  return (
    <header className={styles.header}>
      <img src={todo_logo} alt="ToDo Logo" />
    </header>
  )
}
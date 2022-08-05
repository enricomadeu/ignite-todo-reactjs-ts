import { useState } from "react"
import styles from "./Input.module.css"
import { PlusCircle } from "phosphor-react"

export function Input(){
  const [newTask, setNewTask] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(newTask)
    setNewTask('');
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" value={newTask} onChange={handleChange} placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={16}/>
      </button>
    </form>
  )
}
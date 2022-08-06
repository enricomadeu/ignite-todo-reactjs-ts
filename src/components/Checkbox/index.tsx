import { useState } from 'react';
import styles from './Checkbox.module.css';
import { Check } from 'phosphor-react';

interface CheckboxProps {
  id: number;
  isActive: boolean;
  handleCheckTask: (id: number) => void;
}

export function Checkbox(props: CheckboxProps) {
  const { id, isActive, handleCheckTask } = props;

  return (
    <button 
      className={`${styles.checkbox} ${isActive && styles.isActive}`}
      onClick={() => handleCheckTask(id)}
    >
      {isActive && <Check weight="bold" color="var(--gray-100)" size={12}/>}
    </button>
  )
}
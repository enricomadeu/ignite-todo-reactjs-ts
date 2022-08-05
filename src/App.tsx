import { useState } from 'react'

import { Header, Input, Tasks } from './components'

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Input />
        <Tasks />
      </div>
    </>
  )
}

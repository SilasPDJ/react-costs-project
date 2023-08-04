import React from 'react'
import styles from './Message.module.css'
import { useState, useEffect } from 'react'

export default function Message({ type, msg, duration }) {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!msg) {
      setVisible(false)
      return
    }
    setVisible(true)
    const timer = setTimeout(() => {
      setVisible(false)
    }, duration || 5000)
    return () => clearTimeout(timer)

  }, [msg])


  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>
          {msg}
        </div>

      )}
    </>
  )
}

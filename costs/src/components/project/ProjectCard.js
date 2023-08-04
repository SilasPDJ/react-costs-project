import React from 'react'
import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

export default function ProjectCard({ id, name, budget, category, handlerRemove }) {

  return (
    <div key={id} className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento: </span> R${budget}
      </p>
      <div>
        <p>Editar</p>
        <p>Remover</p>
      </div>

    </div>
  )
}

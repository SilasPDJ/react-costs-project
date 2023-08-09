import React from 'react'
import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function ProjectCard({ id, name, budget, category, handlerRemove }) {
  return (
    <div key={id} className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento: </span> R${budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}>&nbsp;&nbsp;&nbsp;</span> {category}
      </p>
      <div className={styles.project_card_actions}>
        <Link to="/">
          <BsPencil />Editar
        </Link>
        <button>
          <BsFillTrashFill /> Excluir
        </button>
      </div>

    </div>
  )
}
import React from 'react'
import styles from './ProjectForm.module.css'

export default function ProjectForm() {
  return (
    <form className={styles.form}>
      <div>
        <input type="text" name="" id="" placeholder="Insira o nome do projeto" />
      </div>
      <div>
        <input type="number" name="" id="" placeholder="Insiera o orçamento total" />
      </div>
      <div>
        <select name="category_id" id="">
          <option value="">Selecione a Categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  )
}

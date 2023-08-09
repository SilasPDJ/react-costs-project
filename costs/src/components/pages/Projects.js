import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from './Projects.module.css'

import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"

export default function Projects() {
  const [projects, setProjects] = useState([])
  //
  const location = useLocation()

  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then((resp) => resp.json())
      .then((data) => {
        setProjects(data)
      })
      .catch((err) => console.log(err))
  })

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/new_project" text="Criar Projeto" />
      </div>

      {message && <Message msg={message} type='success' duration={3000} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (

            < ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category.name} />
          ))}
      </Container>

    </div>
  )
}
import React from 'react'
import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'ContentType': 'application/json',
      },
    }).then(resp => resp.json())
      .then((data) => {
        setProject(data)
      })
  }, [id])
  console.log(id)
  return (
    <div>{project.name}</div>
  )
}

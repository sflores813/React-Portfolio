import React from 'react'
import { useState } from 'react'
import { projects } from '../data/Projects'
const Projects = () => {
    //  eslint-disable-next-line
    const [cards, setCards] = useState(projects)


    return (
        <>
          <section className="projects">
          <h1>Projects Page!</h1>
          <div className="cards">
              {cards.map(({id, title, desc, github, demo, image}) =>
              (
              <article key={id}>
                  <img src={image} alt={title} />
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <ul>
                      <li><a href={github} target="=blank" rel="noopener noreferrer">GitHub</a></li>
                      <li><a href={demo} target="=blank" rel="noopener noreferrer">demo</a></li>
                  </ul>

                </article>
              ))}
              
          </div>
          </section>
        </>
    )
}

export default Projects

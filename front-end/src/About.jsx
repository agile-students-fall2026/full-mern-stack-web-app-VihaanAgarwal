import { useEffect, useState } from 'react'
import axios from 'axios'

const About = () => {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`).then(response => setAbout(response.data))
  }, [])

  return about && (
    <>
      <h1>{about.title}</h1>
      {about.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <img src={about.imageUrl} alt={about.imageAlt} width="300" />
    </>
  )
}

export default About

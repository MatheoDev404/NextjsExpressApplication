'use client'
import React from 'react'
import Card from '../components/Card/Card'
import { useState, useEffect } from 'react'

interface logement {
  id: ''
  title: ''
  picture: ''
}

const GaleriePage = () => {
  const [logements, setlogements] = useState([])

  const getData = () => {
    fetch('datas/logements.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (logements) {
        setlogements(logements)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <section className="Home__gallery">
        {logements.map((logement: logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            picture={logement.picture}
          />
        ))}
      </section>
    </div>
  )
}

export default GaleriePage

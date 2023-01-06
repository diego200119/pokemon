import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'

const PokemonCard = ({ pokeUrl }) => {
  const [pokeData, setPokeData] = useState({})

  const getPokemon = async () => {
    const response = await fetch(pokeUrl)
    const data = await response.json()
    setPokeData(data)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className='poke'>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokeData.sprites?.front_default} />
      <Card.Body>
        <Card.Title> <h3>{pokeData.name}</h3></Card.Title>
        </Card.Body>
    </Card>
    </div>
  )
}

export default PokemonCard
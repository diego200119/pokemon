import { useEffect, useState } from "react"
import PokeBrowser from "./PokeBrowser.jsx"
import PokemonCard from "./PokemonCard.jsx"

const PokemonsContainer = () => {
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState("")


    const pokeRequest = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=45&offset=0")
        const data = await response.json()
        
        setPokemons(data.results)

    }
    useEffect(() => {
        pokeRequest()

    }, [])

    const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.includes("search"))

    return (
        <>
        <h1>Buscador de POKEMONES</h1>
      <div className="p">
        <p>Hoy en día existen seis generaciones de estos monstruos, 
            siendo los primeros y más conocidos Charizard de Pokémon 
            rojo; Venusaur, de Pokémon verde, y Pikachu, de Pokémon amarillo.</p>
        </div>
            <PokeBrowser setSearch={setSearch} />
            <div>
                
            {pokemons.filter((pokemon) => pokemon.name.includes(search))
             .map((pokemon) => <PokemonCard key={pokemon.name} pokeUrl={pokemon.url} />)
                    
                }
            </div>

        </>
    )
}
export default PokemonsContainer
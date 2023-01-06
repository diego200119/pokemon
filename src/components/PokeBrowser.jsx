const PokeBrowser = ({ setSearch }) => {
    return (
      <div>
            <label htmlFor="search"></label>
            <input type="text" placeholder="Buscador" name="search" onChange={(e)=>setSearch(e.target.value)} />
     </div>
    )
}

export default PokeBrowser
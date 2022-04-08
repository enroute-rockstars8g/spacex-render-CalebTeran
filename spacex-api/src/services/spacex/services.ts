export const getPokemonByID = async (id: number) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

      if (response.status !== 200) return;
  
      const pokemon = await response.json();
      console.log(pokemon)
  
      return pokemon;
    } catch (e) {
      console.error(e);
    }
  };
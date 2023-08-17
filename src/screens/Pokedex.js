import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { getPokemonApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
    console.log("Empieza");
  }, []);

  async function loadPokemons() {
    console.log("entro");
    const response = await getPokemonApi(nextUrl);
    setNextUrl(response.next);
    const pokemonArray = [];
    console.log("salioo");

    for (const pokemon of response.results) {
      const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
      console.log(pokemonDetails.name);
      pokemonArray.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        type: pokemonDetails.types[0].type.name,
        order: pokemonDetails.order,
        // image: pokemonDetails.sprites.other["official-artwork"].front_default,
        image: pokemonDetails.sprites.other["home"].front_default,
      });
    }

    setPokemons([...pokemons, ...pokemonArray]);
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} />
      {/* <ScrollView
        style={{
          backgroundColor: "white",
          width: "100%",
        }}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        {pokemons &&
          pokemons.map((pokemon, index) => (
            <View
              key={index}
              style={{
                marginBottom: 10,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "purple",
                borderRadius: 20,
                height: 300,
                width: 300,
                gap: 1,
                backgroundColor:
                  pokemon.type === "grass"
                    ? "rgba(0, 255, 0, 0.5)"
                    : pokemon.type === "fire"
                    ? "rgba(255, 0, 0, 0.5)"
                    : pokemon.type === "water"
                    ? "rgba(0, 0, 255, 0.5)"
                    : pokemon.type === "bug"
                    ? "rgba(0,255, 0, 1)"
                    : pokemon.type === "normal"
                    ? "rgb(200, 200, 200)"
                    : "white",
              }}
            >
              <Image
                source={{ uri: pokemon.imagen }}
                style={{ width: 200, height: 200 }}
              />
              <Text
                style={{
                  color: "white",
                  backgroundColor: "black",
                  fontSize: 25,
                  borderRadius: 20,
                  paddingHorizontal: 10,
                }}
              >
                {pokemon.name}
              </Text>
              <Text
                style={{
                  color: "white",
                  backgroundColor: "black",
                  position: "absolute",
                  top: -10,
                  right: -10,
                  fontSize: 25,
                  borderRadius: 99,
                  width: 40,
                  height: 40,
                  textAlign: "center",
                }}
              >
                {pokemon.order}
              </Text>
              <Text
                style={{
                  color: "white",
                  backgroundColor: "black",
                  fontSize: 18,
                  borderRadius: 20,
                  paddingHorizontal: 10,
                }}
              >
                {pokemon.type}
              </Text>
            </View>
          ))}
      </ScrollView> */}
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Button title="Anterior" />
        <Text>1</Text>
        <Button title="Siguiente" />
      </View> */}
    </SafeAreaView>
  );
}

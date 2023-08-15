import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { getPokemonApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import { shouldUseActivityState } from "react-native-screens";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
    console.log("Empieza");
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi();
      const pokemonArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonArray]);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(pokemons);
  return (
    <SafeAreaView>
      <ScrollView>
        {pokemons &&
          pokemons.map((pokemon, index) => (
            <View
              key={index}
              style={{
                marginBottom: 10,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "purple",
                height: 140,
                width: 140,
                backgroundColor: "white",
              }}
            >
              <Image
                source={{ uri: pokemon.imagen }}
                style={{ width: 60, height: 60 }}
              />
              <Text>{pokemon.name}</Text>
              <Text>{pokemon.order}</Text>
              <Text>{pokemon.type}</Text>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

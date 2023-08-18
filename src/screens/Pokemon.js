import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonDetailsApi } from "../api/pokemon";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import Header from "../components/Pokemon/Header";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  const pokemonColor = getColorByPokemonType(
    pokemon ? pokemon.types[0].type.name : ""
  );
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };
  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        console.log(response.species.name);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) {
    return null;
  }
  console.log(pokemon && pokemon.types[0].type.name);

  return (
    <View>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other.home.front_default}
        type={pokemon.types[0].type.name}
      />
      {/* <Image
        source={{ uri: pokemon && pokemon.sprites.other.home.front_default }}
        style={styles.image}
      />
      <Text>{pokemon ? pokemon.species.name : "no cargo"}</Text> */}
      {/* <Text>{pokemon ? pokemon.species.name : "no cargo"}</Text> */}
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    position: "absolute",
    bottom: 7,
    right: 8,
    width: 300,
    height: 300,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
});

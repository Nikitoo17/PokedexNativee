import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonDetailsApi } from "../api/pokemon";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);
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

  console.log(pokemon && pokemon.sprites.other.home.front_default);

  return (
    <View>
      <Text>{pokemon ? pokemon.species.name : "no cargo"}</Text>
      {/* <Text>{pokemon ? pokemon.species.name : "no cargo"}</Text> */}
      <Image
        source={{ uri: pokemon && pokemon.sprites.other.home.front_default }}
      />
    </View>
  );
}

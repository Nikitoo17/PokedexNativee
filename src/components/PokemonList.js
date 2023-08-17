import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons } = props;

  const loadMore = () => {
    console.log("cargando");
  };

  return (
    <FlatList
      styles={{ height: "100%", width: "100%" }}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false} // Para que no aparezca la barra de scroll
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    fontSize: 16,
  },
});

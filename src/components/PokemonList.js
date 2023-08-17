import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, nextUrl } = props;

  const loadMore = () => {
    loadPokemons();
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
      onEndReached={nextUrl && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        nextUrl && (
          <ActivityIndicator size="large" style={styles.spinner} color="red" />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    fontSize: 16,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

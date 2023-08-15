import { Text } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonApi } from "../api/pokemon";

export default function Pokedex() {
  useEffect(() => {}, []);

  const loadPokemon = async () => {
    try {
      await getPokemonApi();
    } catch (error) {
      throw error;
    }
  };

  return (
    <SafeAreaView style={{ justifyContent: "space-between", height: 400 }}>
      <Text
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
          textAlign: "center",
          color: "white",
        }}
      >
        Pokedex
      </Text>
    </SafeAreaView>
  );
}

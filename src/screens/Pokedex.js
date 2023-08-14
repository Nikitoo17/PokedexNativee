import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pokedex() {
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

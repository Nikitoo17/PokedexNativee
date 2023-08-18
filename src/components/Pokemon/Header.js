import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { capitalize } from "lodash";
import React from "react";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props) {
  const { name, image, order, type } = props;
  const color = getColorByPokemonType(type);
  return (
    <View>
      <SafeAreaView>
        <View style={styles.contentImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 100,
  },
  image: {
    width: 300,
    height: 300,
  },
});

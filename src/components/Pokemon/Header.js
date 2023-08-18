import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { capitalize } from "lodash";
import React from "react";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props) {
  const { name, image, order, type } = props;
  console.log(props);
  const color = getColorByPokemonType(type);

  const bgStyles = { backgroundColor: color, ...styles.bgStyles };
  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bgStyles: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "white",
    fontWeight: "bold",
  },
  contentImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

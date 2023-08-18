import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { map, capitalize } from "lodash";

export default function Type(props) {
  const { types } = props;
  return (
    <View style={styles.content}>
      <Text>Type</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
});

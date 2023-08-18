import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { capitalize } from "lodash";

export default function Stats(props) {
  const { stats } = props;
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Stats</Text>
      {stats &&
        stats.map((item, index) => (
          <View key={index} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.blockInfo}>
              <Text style={styles.statName}>{item.base_stat}</Text>
            </View>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "gray",
  },
  blockInfo: {},
});

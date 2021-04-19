import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { icons, images, FONTS, COLORS, SIZES } from "../../constants";

const IconedBtn = ({ title, style, onPress, source }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={source}
        resizeMode="contain"
        style={{ width: 25, height: 25, marginRight: 5, marginLeft: 0 }}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    backgroundColor: "#A952F6",
    height: 50,
    borderRadius: 10,
    marginBottom: 13,
  },
  text: {
    color: "white",
    fontSize: 16,
    lineHeight: 50,
    textAlign: "center",
  },
});

export default IconedBtn;

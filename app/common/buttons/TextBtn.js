import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TextBtn = ({ title, textStyle, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  text: {
    color: "#A952F6",
  },
});

export default TextBtn;

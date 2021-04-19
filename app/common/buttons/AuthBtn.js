import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AuthBtn = ({ title, style, onPress, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "#A952F6",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    lineHeight: 50,
    textAlign: "center",
  },
});

export default AuthBtn;

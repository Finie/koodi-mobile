import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

const Input = ({ style, ...props }) => {
  return <TextInput {...props} style={[styles.input, style]} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgb(240,240,240)",
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgb(240,240,240)",
    height: 50,
    paddingLeft: 13,
    marginBottom: 13,
  },
});

export default Input;

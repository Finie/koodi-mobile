import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const GrayedBtn = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {},
});

export default GrayedBtn;

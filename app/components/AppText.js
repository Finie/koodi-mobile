import React from "react";
import { StyleSheet, Text } from "react-native";
import appTheme from "../constants/theme";

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    text:{
        fontSize:appTheme.SIZES.defaultSize,
        
    }
});

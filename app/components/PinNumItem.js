import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import appTheme from "../constants/theme";
import AppText from "./AppText";

import Icon from "react-native-vector-icons/Feather";

export default function PinNumItem({ onPress, number, isIcon }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {!isIcon && <AppText style={styles.text}>{number}</AppText>}

      {isIcon && <Icon name="delete" size={30} color={appTheme.COLORS.black} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 106,
    height: 80,
    backgroundColor: appTheme.COLORS.white,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  text: {
    fontSize: appTheme.SIZES.h1,
  },
});

import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import appTheme from "../constants/theme";
import AppText from "./AppText";

export default function AppPinInput({
  onChangeText,
  isFocused,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      {isFocused && (
        <AppText style={{ fontSize: 30, color: appTheme.COLORS.primary }}>
          *
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appTheme.COLORS.gray,
    borderColor: appTheme.COLORS.borderGray,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    margin: 6,
  },
});

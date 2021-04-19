import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { set } from "react-native-reanimated";
import AppPinInput from "./AppPinInput";

export default function AppPin({ data }) {
  const [firstPin, setfirstPin] = useState(false);
  const [secondPin, setsecondPin] = useState(false);
  const [thirdPin, setthirdPin] = useState(false);
  const [fourthPin, setfourthPin] = useState(false);

  useEffect(() => {
    if (data === 1) {
      setfirstPin(true);
      setsecondPin(false);
      setthirdPin(false);
      setfourthPin(false);
    } else if (data === 2) {
      setfirstPin(true);
      setsecondPin(true);
      setthirdPin(false);
      setfourthPin(false);
    } else if (data === 3) {
      setfirstPin(true);
      setsecondPin(true);
      setthirdPin(true);
      setfourthPin(false);
    } else if (data === 4) {
      setfirstPin(true);
      setsecondPin(true);
      setthirdPin(true);
      setfourthPin(true);
    } else {
      setfirstPin(false);
      setsecondPin(false);
      setthirdPin(false);
      setfourthPin(false);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <AppPinInput isFocused={firstPin} />
      <AppPinInput isFocused={secondPin} />
      <AppPinInput isFocused={thirdPin} />
      <AppPinInput isFocused={fourthPin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

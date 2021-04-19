import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  ScrollView,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Consants from "expo-constants";
import AppPin from "../../../components/AppPin";
import AppText from "../../../components/AppText";
import PinNumItem from "../../../components/PinNumItem";
import appTheme from "../../../constants/theme";

export default function Login() {
  const [isModalVisible, setModalVisible] = useState(false);
  const ONE_SECOND_IN_MS = 500;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const [data, setData] = useState("");

  const triggerVibration = () => {
    Vibration.vibrate(PATTERN);
  };
  const checkPin = () => {};

  const onOne = () => {
    if (data.length >= 5) {
      // setData("value limit");
      return;
    }

    if (data.length === 4) {
      //setData("right text");
      return;
    }

    triggerVibration();
    setData(data + "1");
  };
  const onTwo = () => {
    if (data.length >= 5) {
      // setData("value limit");
      return;
    }

    if (data.length === 4) {
      // setData("right text");
      return;
    }
    setData(data + "2");
  };
  const onThree = () => {
    if (data.length >= 5) {
      // setData("value limit");
      return;
    }

    if (data.length === 4) {
      // setData("right text");
      return;
    }
    setData(data + "3");
  };
  const onFour = () => {
    if (data.length >= 5) {
      // setData("value limit");
      return;
    }

    if (data.length === 4) {
      // setData("right text");
      return;
    }
    setData(data + "4");
  };
  const onFive = () => {
    if (data.length >= 5) {
      // setData("value limit");
      return;
    }

    if (data.length === 4) {
      // setData("right text");
      return;
    }
    setData(data + "5");
  };
  const onSix = () => {
    if (data.length >= 5) {
      // setData("value limit");
      return;
    }

    if (data.length === 4) {
      // setData("right text");
      return;
    }
    setData(data + "6");
  };
  const onSeven = () => {
    if (data.length >= 5) {
      // setData("value limit");
      return;
    }

    if (data.length === 4) {
      // setData("right text");
      return;
    }
    setData(data + "7");
  };
  const onEight = () => {
    if (data.length >= 5) {
      //setData("value limit");
      return;
    }

    if (data.length === 4) {
      //setData("right text");
      return;
    }
    setData(data + "8");
  };
  const onNine = () => {
    if (data.length >= 5) {
      // setData("value limit");
      return;
    }

    if (data.length === 4) {
      // setData("right text");
      return;
    }
    setData(data + "9");
  };
  const onZero = () => {
    if (data.length >= 5) {
      // setData("value limit");
      return;
    }

    if (data.length === 4) {
      // setData("right text");
      return;
    }

    setData(data + "0");
  };
  const ondelete = () => {
    setData(data.slice(0, -1));
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#8B3AF3", "#CF71FB"]}
      style={styles.container}
    >
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle="light-content"
      />

      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.appBar}>
          <Text style={styles.appbarText}>Enter PIN</Text>
        </View>

        <View style={styles.inner_container}>
          <View
            style={{
              marginTop: 16,
              justifyContent: "flex-start",
              alignItems: "center",
              flex: 1.5,
            }}
          >
            <AppText style={{ color: appTheme.COLORS.fontColor, margin: 16 }}>
              Enter your Glayds PIN
            </AppText>
            <AppPin data={data.length} />
            <TouchableOpacity style={{ padding: 16 }}>
              <AppText
                style={{ color: appTheme.COLORS.black, fontWeight: "700" }}
              >
                Forgot PIN?
              </AppText>
            </TouchableOpacity>
            <Text>{data}</Text>
          </View>

          <View
            style={{
              backgroundColor: appTheme.COLORS.pinBackground,
              flex: 2,
              justifyContent: "center",
            }}
          >
            {/* first row */}
            <View style={{ flexDirection: "row", padding: 6 }}>
              <View style={{ flex: 1 }}>
                <PinNumItem number={1} onPress={onOne} />
              </View>

              <View style={{ flex: 1 }}>
                <PinNumItem number={2} onPress={onTwo} />
              </View>

              <View style={{ flex: 1 }}>
                <PinNumItem number={3} onPress={onThree} />
              </View>
            </View>
            {/* end first row */}

            {/* second row */}
            <View style={{ flexDirection: "row", padding: 6 }}>
              <View style={{ flex: 1 }}>
                <PinNumItem number={4} onPress={onFour} />
              </View>

              <View style={{ flex: 1 }}>
                <PinNumItem number={5} onPress={onFive} />
              </View>

              <View style={{ flex: 1 }}>
                <PinNumItem number={6} onPress={onSix} />
              </View>
            </View>
            {/* end second row */}

            {/* third row */}
            <View style={{ flexDirection: "row", padding: 6 }}>
              <View style={{ flex: 1 }}>
                <PinNumItem number={7} onPress={onSeven} />
              </View>

              <View style={{ flex: 1 }}>
                <PinNumItem number={8} onPress={onEight} />
              </View>

              <View style={{ flex: 1 }}>
                <PinNumItem number={9} onPress={onNine} />
              </View>
            </View>
            {/* end third row */}

            {/* fouth row */}
            <View style={{ flexDirection: "row", padding: 6 }}>
              <View style={{ flex: 1 }}>
                <PinNumItem />
              </View>

              <View style={{ flex: 1 }}>
                <PinNumItem number={0} onPress={onZero} />
              </View>

              <View style={{ flex: 1 }}>
                <PinNumItem isIcon={true} onPress={ondelete} />
              </View>
            </View>
            {/* end fouth row */}
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },

  safeAreaView: {
    paddingTop: Platform.OS === "ios" ? 0 : Consants.statusBarHeight,
    flex: 1,
  },

  appBar: {
    justifyContent: "center",
    alignItems: "center",
  },
  appbarText: {
    color: appTheme.COLORS.white,
    fontSize: appTheme.SIZES.h3,
  },
  inner_container: {
    backgroundColor: appTheme.COLORS.white,
    justifyContent: "flex-start",
    flex: 1,
  },
});

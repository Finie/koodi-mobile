import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import AuthBtn from "../../../common/buttons/AuthBtn";
import TextBtn from "../../../common/buttons/TextBtn";
import { images } from "../../../constants";

const ToSignUp = ({ navigation }) => {
  const renderHeader = () => (
    <SafeAreaView
      style={{
        alignSelf: "stretch",
        paddingLeft: 13,
        paddingRight: 13,
        justifyContent: "space-between",
        marginHorizontal: Platform.OS === "ios" ? 13 : 0,
        marginTop: Platform.OS === "ios" ? 13 : 0,
        position: "absolute",
        zIndex: 100,
        alignItems: "center",
        alignContent: "center",
        marginLeft: "35%",
        marginRight: "30%",
      }}>
      <Text
        style={{
          lineHeight: 40,
          fontWeight: "bold",
          color: "#A952F6",
          fontSize: 20,
        }}>
        Sign Up
      </Text>
    </SafeAreaView>
  );

  const splashSection = () => (
    <ImageBackground source={images.BG} style={styles.container}>
      <Image
        source={images.logo}
        resizeMode="contain"
        style={{ width: 200, height: 360, marginTop: 245 }}
      />
    </ImageBackground>
  );
  const buttonSection = () => (
    <View
      style={{
        paddingHorizontal: "5%",
      }}>
      <Text
        style={{ marginLeft: "auto", marginRight: "auto", fontWeight: "200" }}>
        Get started using your mobile number
      </Text>
      <AuthBtn
        title={"Sign Up"}
        onPress={() => navigation.navigate("SignUp")}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
        <Text
          style={{
            fontWeight: "200",
          }}>
          Already have an account?
        </Text>
        <TextBtn
          title={"Sign In"}
          onPress={() => navigation.navigate("ToLogin")}
        />
      </View>
    </View>
  );
  return (
    <View
      style={{
        marginTop: "12%",
        marginBottom: "auto",
      }}>
      {renderHeader()}
      {splashSection()}
      {buttonSection()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "81%",
  },
});
export default ToSignUp;

import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AuthBtn from "../../../../common/buttons/AuthBtn";
import TextBtn from "../../../../common/buttons/TextBtn";
import CodeInput from "../../../../common/inputs/CodeInput";

const Pin = ({ navigation }) => {
  const renderHeader = () => (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#A952F6",
        justifyContent: "space-between",
      }}>
      <TouchableOpacity
        style={{ marginLeft: "3%" }}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={30} color={"white"}></AntDesign>
      </TouchableOpacity>
      <Text
        style={{
          lineHeight: 40,
          fontWeight: "300",
          marginRight: "auto",
          marginLeft: "30%",
          color: "white",
          fontSize: 20,
        }}>
        Enter Pin
      </Text>
    </SafeAreaView>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {renderHeader()}

      <View
        style={{
          paddingHorizontal: "5%",
          marginTop: "5%",
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "200",
            paddingVertical: 15,
            textAlign: "center",
          }}>
          Enter your Gladys PIN
        </Text>
        <CodeInput placeholder={"+2547123456789"} />
        <AuthBtn title={"Login"} onPress={() => navigation.navigate("Tabs")} />
        <TextBtn
          title={"Forgot Pin"}
          textStyle={{
            color: "black",
          }}
          onPress={() => navigation.navigate("ToLogin")}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 20,
          }}
        />
      </View>
    </View>
  );
};

export default Pin;

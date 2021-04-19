import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AuthBtn from "../../../../common/buttons/AuthBtn";
import Input from "../../../../common/inputs/Input";

const SignIn = ({ navigation }) => {
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
        Sign In
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
          flexDirection: "column",
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "200",
            paddingVertical: 15,
          }}>
          Enter Your phone number
        </Text>
        <Input placeholder={"+2547123456789"} />
        <AuthBtn
          title={"Continue"}
          onPress={() => navigation.navigate("Pin")}
        />
      </View>
    </View>
  );
};

export default SignIn;

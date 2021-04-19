import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AuthBtn from "../../../common/buttons/AuthBtn";
import Input from "../../../common/inputs/Input";

const AccountVerification = ({ navigation }) => {
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
        Verify Account
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
          Per regulation requirement, we need you to verify your identity. You
          will need your National ID, passport or Alien Card
        </Text>
        <Input placeholder={"Enter ID Number"} />
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "100",
              paddingVertical: 15,
              textAlign: "center",
            }}>
            Your provided information is encrypted and will not be shared by
            anyone
          </Text>
        </View>
        <AuthBtn
          title={"Start Verification"}
          onPress={() => navigation.navigate("DateOfBirth")}
        />
      </View>
    </View>
  );
};

export default AccountVerification;

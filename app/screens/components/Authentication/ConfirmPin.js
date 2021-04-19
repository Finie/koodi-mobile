import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AuthBtn from "../../../common/buttons/AuthBtn";
import TextBtn from "../../../common/buttons/TextBtn";
import CodeInput from "../../../common/inputs/CodeInput";

const ConfirmPin = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const renderHeader = () => (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#A952F6",
        justifyContent: "space-between",
      }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginBottom: 20,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(210,210,210,0.9)",
                  borderWidth: 1,
                  borderColor: "rgb(200,200,200)",
                  borderRadius: 15,
                }}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "500",
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                marginBottom: 15,
                textAlign: "center",
                fontSize: 18,
                fontWeight: "400",
              }}>
              Welcome to Gladys, John!
            </Text>
            <Text style={styles.modalText}>
              We have created your account but with limited features. Please
              verify your account to access full features.
            </Text>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
              }}>
              <AuthBtn
                title={"Start Verification"}
                onPress={() => {
                  setModalVisible(!modalVisible),
                    navigation.navigate("AccountVerification");
                }}
              />
              <AuthBtn
                style={{
                  backgroundColor: "white",
                  borderColor: "#A952F6",
                  borderWidth: 1.8,
                }}
                textStyle={{ color: "#A952F6" }}
                title={"Log in"}
                onPress={() => navigation.navigate("SignUp")}
              />
            </View>
          </View>
        </View>
      </Modal>
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
        Create Pin
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
          Please confirm the PIN
        </Text>
        <CodeInput placeholder={"+2547123456789"} />
        <TextBtn
          title={"Resend Code"}
          onPress={() => navigation.navigate("ToLogin")}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 20,
          }}
        />
        <AuthBtn
          title={"Confirm Registration"}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "rgba(230,230,230,0.99)",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 25,
    flexDirection: "column",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "200",
  },
});

export default ConfirmPin;

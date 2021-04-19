import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import TextBtn from "../../../common/buttons/TextBtn";
import AuthBtn from "../../../common/buttons/AuthBtn";

const AppDashboard = () => {
  const walletBalance = () => (
    <SafeAreaView
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        borderWidth: 2,
        borderColor: "rgb(200,200,200)",
        borderRadius: 15,
        height: 100,
        marginTop: Platform.OS === "ios" ? "20%" : "10%",
        marginHorizontal: "1%",
        marginBottom: 20,
      }}>
      <Text style={{ padding: 10, fontSize: 15, fontWeight: "200" }}>
        My Balance
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ padding: 8, fontWeight: "500", fontSize: 25 }}>
          KSH. 8,354,631.00
        </Text>
        <TextBtn title={"Add Money"} style={{ padding: 10 }} />
      </View>
    </SafeAreaView>
  );
  const activitySection = () => (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
      <View
        style={{
          width: "30%",
          alignItems: "center",
          marginVertical: 25,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 5,
            backgroundColor: "cyan",
            padding: 10,
            borderRadius: 10,
          }}>
          <Feather name="send" color={"white"} size={26} />
        </TouchableOpacity>
        <Text>Send Money</Text>
      </View>
      <View
        style={{
          width: "30%",
          alignItems: "center",
          marginVertical: 25,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 5,
            backgroundColor: "#39ac39",
            padding: 10,
            borderRadius: 10,
          }}>
          <FontAwesome name="money" color={"white"} size={26} />
        </TouchableOpacity>
        <Text>Request Money</Text>
      </View>
      <View
        style={{
          width: "30%",
          alignItems: "center",
          marginVertical: 25,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 5,
            backgroundColor: "#e64900",
            padding: 10,
            borderRadius: 10,
          }}>
          <MaterialCommunityIcons
            name="cash-multiple"
            color={"white"}
            size={26}
          />
        </TouchableOpacity>
        <Text>Withdraw</Text>
      </View>
      <View
        style={{
          width: "30%",
          alignItems: "center",
          marginVertical: 25,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 5,
            backgroundColor: "#A952F6",
            padding: 10,
            borderRadius: 10,
          }}>
          <FontAwesome name="qrcode" color={"white"} size={26} />
        </TouchableOpacity>
        <Text>Scan To Pay</Text>
      </View>
      <View
        style={{
          width: "30%",
          alignItems: "center",
          marginVertical: 25,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 5,
            backgroundColor: "#0082e6",
            padding: 10,
            borderRadius: 10,
          }}>
          <AntDesign name="appstore1" color={"white"} size={26} />
        </TouchableOpacity>
        <Text>Pay A Business</Text>
      </View>
      <View
        style={{
          width: "30%",
          alignItems: "center",
          marginVertical: 25,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 5,
            backgroundColor: "#995725",
            padding: 10,
            borderRadius: 10,
          }}>
          <AntDesign name="carryout" color={"white"} size={26} />
        </TouchableOpacity>
        <Text>Pay Utilities</Text>
      </View>
      <View
        style={{
          width: "30%",
          alignItems: "center",
          marginVertical: 25,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 5,
            backgroundColor: "#0dacd4",
            padding: 10,
            borderRadius: 10,
          }}>
          <AntDesign name="wifi" color={"white"} size={26} />
        </TouchableOpacity>
        <Text>Buy Airtime</Text>
      </View>
    </ScrollView>
  );
  const button = () => (
    <View style={{ top: Platform.OS == "ios" ? "22%" : "25%" }}>
      <AuthBtn title={"Create Business Account"} />
    </View>
  );
  return (
    <ScrollView
      style={{ marginBottom: "auto", marginTop: "auto", padding: 10 }}>
      {walletBalance()}
      {activitySection()}
      {button()}
    </ScrollView>
  );
};

export default AppDashboard;

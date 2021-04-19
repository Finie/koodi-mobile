// import React, { Component } from "react";
// import { Platform, StyleSheet, View, Button, TextInput } from "react-native";

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           placeholder="0"
//           underlineColorAndroid="transparent"
//           style={styles.TextInputStyle}
//           keyboardType={"numeric"}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   headerText: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//     fontWeight: "bold",
//   },
//   TextInputStyle: {
//     textAlign: "center",
//     height: 40,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "#009688",
//     marginBottom: 10,
//   },
// });

import React from "react";
import { Platform, StyleSheet, View, Button, TextInput } from "react-native";

const CodeInput = ({ title, style, onPress }) => (
  <View style={[styles.container, style]}>
    <TextInput
      placeholder="0"
      underlineColorAndroid="transparent"
      style={styles.input}
      keyboardType={"numeric"}
    />
    <TextInput
      placeholder="0"
      underlineColorAndroid="transparent"
      style={styles.input}
      keyboardType={"numeric"}
    />
    <TextInput
      placeholder="0"
      underlineColorAndroid="transparent"
      style={styles.input}
      keyboardType={"numeric"}
    />
    <TextInput
      placeholder="0"
      underlineColorAndroid="transparent"
      style={styles.input}
      keyboardType={"numeric"}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "10%",
  },

  input: {
    backgroundColor: "rgb(240,240,240)",
    width: "10%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E1D4ED",
    height: 50,
    // paddingHorizontal: "3%",
    textAlign: "center",
    marginBottom: 13,
  },
});
export default CodeInput;

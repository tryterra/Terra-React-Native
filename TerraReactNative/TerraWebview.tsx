// import React, { Component } from "react";
// import { View, Button, StatusBar, Text, ImageStyle } from "react-native";
// import { WebView } from "react-native-webview";
// import { StyleSheet, TextStyle, ViewStyle } from "react-native";

// export default class TerraWidget extends Component {
//   state = { showWebView: false };

//   render() {
//     if (this.state.showWebView) {
//       getSessionUrl();
//       return (
//         <WebView
//           //The url you received from "https://api.tryterra.co/v2/auth/generateWidgetSession"
//           source={{
//             uri: "https://widget.tryterra.co/session/xxxx-xxxx-xxxx-xxxx",
//           }}
//           onNavigationStateChange={this.handleWebViewNavigationStateChange}
//           originWhitelist={["*"]}
//         />
//       );
//     }
//     // A simple button that opens the widget when pressed.
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Press to open Widget!</Text>
//         <Button
//           title="Widget"
//           onPress={() => this.setState({ showWebView: true })}
//         />
//         <StatusBar/>
//       </View>
//     );
//   }
//   //Handler for navigation changes
//   handleWebViewNavigationStateChange = (newNavState: { url: any }) => {
//     const { url } = newNavState;
//     if (!url) return;

//     //Close the webview if authentication complete
//     //Can check if the url is the url provided as auth_success_redirect_url" instead
//     if (url.includes("auth=true")) {
//       //Close the webview here?
//     }

//     //Check if authentication failed
//     //Can check if the url is the url provided as "auth_failure_redirect_url" instead
//     if (url.includes("auth-failure")) {
//       //Do something when authentication fails
//     }
//   };
// }

// function getSessionUrl() {
//   throw new Error("Function not implemented.");
// }

// //Styles for which you can use for the webview (configuration)

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     title: {
//         color: "#f00"
//     }
//   });
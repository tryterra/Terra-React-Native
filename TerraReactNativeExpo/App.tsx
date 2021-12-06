import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default function App() {
  const [result, setResult] = useState(null);

  const openWidget = async () => {
    // customize redirect URL to get results wanted
    let result: any = await WebBrowser.openBrowserAsync(
      "https://widget.tryterra.co/session/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    );
    setResult(result);
  };
  return (
    <View style={styles.container}>
      <Button title="Open Terra Widget" onPress={openWidget} />
      <Text>{result && JSON.stringify(result)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},
});

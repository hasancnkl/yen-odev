import React from "react";
import { Image, StyleSheet, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        style={{
          width: "100%",
          height: 180,
          borderWidth: 2,
          borderColor: "red",
        }}
        source={{
          uri: "https://media.istockphoto.com/photos/stockholm-sweden-scenic-summer-sunset-view-with-",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import Login from "./login";

export default function Page() {
  
  return (
    // <View>
    //   <Login/>
    // </View>
     <View style={styles.container}>
       <View style={styles.main}>
       <StatusBar backgroundColor={"red"} barStyle={Platform.OS === "android" ? "light-content" : "dark-content"} />
          <Login/>
       </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
    flex: 1,
    //alignItems: "center",
    padding: 10,
    paddingHorizontal:20,
    justifyContent:'center',
  },
  main: {
    // flex: 1,
    // justifyContent: "center",
    // maxWidth: 960,
    // marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

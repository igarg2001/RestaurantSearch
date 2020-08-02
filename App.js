import { StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "BusinessSearch",
    },
  }
);

export default createAppContainer(navigator);
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

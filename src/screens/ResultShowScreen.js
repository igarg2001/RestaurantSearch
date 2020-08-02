import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import zomato from "../api/zomato";
//import { FlatList } from "react-native-gesture-handler";

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  //console.log(+id);
  const [restaurant, updateRestaurant] = useState({});
  const getResult = async (id) => {
    try {
      const response = await zomato.get("/restaurant", {
        params: {
          res_id: +id,
        },
      });
      updateRestaurant(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text style={styles.textStyle}>{restaurant.name}</Text>
      <Text style={styles.infoStyles}>
        Cuisines :{" "}
        {restaurant.cuisines ? restaurant.cuisines : "No cuisines to show"}
      </Text>
      <Text style={styles.infoStyles}>
        Timings :{" "}
        {restaurant.timings ? restaurant.timings : "No timing to show"}
      </Text>
      <Text style={styles.infoStyles}>
        Phone numbers :{" "}
        {restaurant.phone_numbers
          ? restaurant.phone_numbers
          : "No phone numbers to show"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 36,
    fontWeight: "bold",
  },

  infoStyles: {
    fontSize: 22,
    fontFamily: "sans-serif",
    marginVertical: 12,
    fontWeight: "bold",
  },
});

export default ResultShowScreen;

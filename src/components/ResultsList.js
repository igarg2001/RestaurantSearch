import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

const ResultsList = (props) => {
  let results = null;
  results =
    props.list.length === 0 ? (
      <Text style={{ textAlign: "center" }}>
        There are no results to show here
      </Text>
    ) : (
      <FlatList
        horizontal
        data={props.list}
        keyExtractor={(item) => item.restaurant.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Result", {
                  id: item.restaurant.id,
                })
              }
            >
              <ResultDetail
                name={item.restaurant.name}
                imagePath={item.restaurant.featured_image}
                rating={item.restaurant.user_rating.aggregate_rating}
                noOfReviews={item.restaurant.all_reviews_count}
              />
            </TouchableOpacity>
          );
        }}
      />
    );
  return (
    <View style={{ marginVertical: 8 }}>
      <Text style={styles.headingStyle}>{props.title}</Text>
      {results}
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 36,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default withNavigation(ResultsList);

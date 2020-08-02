import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultDetail = (props) => {
  return (
    <View style={styles.viewStyle}>
        <Image style={styles.imageStyle} source = {{ uri: props.imagePath }} />
      <Text style={styles.nameStyle}>{props.name}</Text>
  <Text style={styles.ratingStyles}>{props.rating} stars, {props.noOfReviews} reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginHorizontal: 12
  },
    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 5
    },
    nameStyle: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    },
    ratingStyles: {
      fontFamily: 'sans-serif',
      opacity: 0.5
    }
});

export default ResultDetail;

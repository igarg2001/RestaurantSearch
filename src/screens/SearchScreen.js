import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SeachBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = (props) => {
  const [val, dispatch, results, getResults] = useResults();
  const filterResultsByPriceRange = (low, high) => {
    return results.filter(
      (result) =>
        result.restaurant.price_range >= low &&
        result.restaurant.price_range <= high
    );
  };
  return (
    <>
      <SeachBar value={val} change={dispatch} submit={() => getResults()} />
      <ScrollView>
        <ResultsList
          list={filterResultsByPriceRange(0, 2)}
          style={styles.reesultsStyle}
          title="Cost Effective"
        />
        <ResultsList
          list={filterResultsByPriceRange(3, 3)}
          style={styles.reesultsStyle}
          title="Bit Pricier"
        />
        <ResultsList
          list={filterResultsByPriceRange(4, 11)}
          style={styles.reesultsStyle}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  reesultsStyle: {},
});

export default SearchScreen;

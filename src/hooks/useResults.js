import { useEffect, useState, useReducer } from 'react';
import zomato from '../api/zomato'

export default () => {
    const initialState = {
        searchVal: "pasta",
      };
      const reducer = (state, action) => {
        switch (action.type) {
          case "SEARCH_CHANGE":
            return { ...state, searchVal: action.payload.value };
          default:
            return state;
        }
      };
      const getResults = async (searchTerm) => {
        try {
          const response = await zomato.get("/search", {
            params: {
              q: state.searchVal,
              sort: "cost",
            },
          });
          setResults(response.data.restaurants);
        } catch (e) {
          console.log(e);
        }
      };
      const [state, dispatch] = useReducer(reducer, initialState);
      const [results, setResults] = useState([]);
      useEffect(() => {getResults()}, [])
      return [state.searchVal, dispatch, results, getResults]
}
import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SeachBar = props => {
    return <View style={styles.background}>
        <Ionicons name="md-search" size={20} />
        <TextInput
        placeholder = "Search"
        autoCorrect={false}
        value = {props.value}
        onChangeText={newVal => props.change({
            type: 'SEARCH_CHANGE',
            payload: {
                value: newVal
            }
        })}
        onEndEditing={props.submit}
        style={styles.text}></TextInput>
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        margin: 10,
        padding: 15,
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        marginLeft: 10,
        flex: 1
    }
})

export default SeachBar
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Square = ({ value, onPress }) => {
    return (
        <TouchableOpacity style={styles.square} onPress={onPress}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    text: {
        fontSize: 40,
        color: '#fff',
    },
});

export default Square;
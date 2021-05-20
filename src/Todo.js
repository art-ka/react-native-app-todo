import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onRemove }) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }

    return (
        <TouchableOpacity activeOpacity={0.5}
            onLongPress={longPressHandler}
            onPress={() => console.log('Pressed', todo.id)}
        // onLongPress={onRemove.bind(null, todo.id)}
        // onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 20,
        marginBottom: 10,

        // shadowColor: 'blue',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 2.62,
        // elevation: 1,
    }
})
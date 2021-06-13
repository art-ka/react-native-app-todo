import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export const Todo = ({ todo, onRemove }) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }

    const NeuMorph = ({ children, size, style }) => {
        return (
            <View style={styles.topShadow}>
                <View style={styles.bottomShadow}>
                    <View 
                    style={[styles.inner,
                    { width: size || '100%', height: size || 48, borderRadius: 20 },
                        style]}>
                        {children}
                    </View>
                </View>
            </View>
        )
    }

    return (
        <TouchableOpacity activeOpacity={0.5}
            onLongPress={longPressHandler}
            onPress={() => console.log('Pressed', todo.id)}
            style={styles.todos}
        // onLongPress={onRemove.bind(null, todo.id)}
        // onLongPress={() => onRemove(todo.id)}
        >
                        

            <NeuMorph style={styles.todo} >
                <Text style={styles.text}>{todo.title}</Text>
            </NeuMorph>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({

    todos: {
        paddingHorizontal: 12,
        paddingTop: 15,
    },
    todo: {
        flexDirection: 'row',
        // alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 20,
        marginBottom: 15,
    },
    text: {
        textAlign: 'left',
    },

    inner: {
    backgroundColor: '#DEE9F7',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1,
    elevation: 10,
},
topShadow: {
    shadowOffset: {
        width: -6,
        height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF',
},
    bottomShadow: {
    shadowOffset: {
        width: 6,
        height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD',
}
})
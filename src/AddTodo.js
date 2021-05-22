import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Alert, Text } from 'react-native'

export const AddTodo = ({ onSubmit, value, setValue }) => {

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
        } else {
            Alert.alert('The field cannot be empty')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='What do you want todo today?'
                autoCorrect={false}
                autoCapitalize='none'
                onSubmitEditing={() => pressHandler()}
                keyboardType='default'
            />
            <TouchableOpacity onPress={pressHandler} style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,

    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: .8,
        borderBottomColor: '#6E7686',
    },
    button: {
        elevation: 8,
        width: '30%',
        height: 38,
        marginLeft: 10,
        backgroundColor: '#fdc341',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        shadowOffset: { width: 4, height: 1 },
        shadowColor: 'black',
        shadowOpacity: .7,
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 50,
        backgroundColor: '#fff',

    },
    buttonText: {
        fontSize: 14,
        color: "#6E7686",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",

    }
})
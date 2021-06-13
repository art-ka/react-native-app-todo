import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';


export const AddTodo = ({ onSubmit, value, setValue }) => {


    const NeuMorph = ({ children, size, style }) => {
        return (
            <View style={styles.topShadow}>
                <View style={styles.bottomShadow}>
                    <View 
                    style={[styles.inner,
                    { width: size || 100, height: size || 48, borderRadius: 20 },
                        style]}>
                        {children}
                    </View>
                </View>
            </View>
        )
    }

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
                placeholder='What do you want to do?'
                autoCorrect={false}
                autoCapitalize='none'
                onSubmitEditing={() => pressHandler()}
                keyboardType='default'
            />
            <NeuMorph width={300} height={48} style={{ backgroundColor: "#3F888F", borderColor: "#3F888F" }}>
                <TouchableOpacity onPress={pressHandler} style={styles.button}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </NeuMorph>
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
        width: '61%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: .8,
        borderBottomColor: '#6E7686',
    },
    buttonText: {
        fontSize: 16,
        // color: "#6E7686",
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    inner: {
        backgroundColor: '#DEE9F7',
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    button: {
        width: 100,
        height: 48,
        display: 'flex', 
        justifyContent: 'center',
    }
})
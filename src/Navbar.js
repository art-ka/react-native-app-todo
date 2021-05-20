import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export const Navbar = ({title}) => {

    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

        shadowOffset:{  width: 4,  height: 1  },
        shadowColor: '#D1D9E6',
        shadowOpacity: 0.8,
        shadowRadius: 12,
        elevation: 50,
        backgroundColor: '#fff',
        

//         background: #ECF0F3;
// box-shadow: 12px 12px 10px #D1D9E6, -12px -12px 20px #FFFFFF;
// border-radius: 18px;

    },
    text: {
        color: '#6E7686',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20,
    }
    // ,
    // image: {
    //     resizeMode: 'contain',
    //     width: '100%',
    //     height: 100,
    //     borderBottomLeftRadius: 20,
    //     borderBottomRightRadius: 20,
    //     overflow: 'hidden',
    // },
})
import React from 'react';
import {View, 
    // Text, 
    StyleSheet, ImageBackground} from 'react-native';
// import fon from '../image/abstr.jpg'
// import fon from '../image/p2.jpg'
// import fon from '../image/a.jpg'
// import fon from '../image/fon.jpg'
// import fon from '../image/book.jpg'
import fon from '../image/5.jpg'
// import fon from '../image/bl.jpeg'
// import fon from '../image/ff.jpg'
// import fon from '../image/ff.jpg'
// import fon from '../image/4.jpeg'


export const Navbar = ({title}) => {

    return (
        
        <View style={styles.navbar}>
            <ImageBackground source={fon} style={styles.image}>
            {/* <Text style={styles.text}>{title}</Text> */}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 180,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 25,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

        borderBottomColor: "#282951",
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#282951',
        // shadowOffset:{  width: 5,  height: 2  },
        // shadowColor: '#D1D9E6',
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        elevation: 50,

    },
    // text: {
    //     // color: '#6E7686',
    //     color: '#fff',
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //     paddingLeft: 20,
    //     paddingTop: 80,
        
    // }
    // ,
    image: {
        // resizeMode: 'contain',
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
    }
})
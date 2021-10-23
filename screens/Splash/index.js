import React, { useEffect } from 'react'
import { Image, SafeAreaView, StatusBar } from 'react-native'
import styles from './styles'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome')
        }, 3000)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <Image style={styles.image} source={require('../../assets/images/splash_screen.png')} />
        </SafeAreaView>
    )
}

export default Splash

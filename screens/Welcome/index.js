import React from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import styles from './styles'

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
            <View style={styles.headerWrapper}>
                <Image style={styles.headerImage} source={require('../../assets/images/welcome_screen.png')} />
                <Text style={styles.headerTitle}>Welcome</Text>
            </View>
            <View style={styles.mainWrapper}>
                <TouchableOpacity style={[styles.button, styles.btnDanger]} onPress={() => navigation.navigate('Register')}>
                    <Text style={[styles.buttonText, styles.textSafe]}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.btnSafe]} onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.buttonText, styles.textDanger]}>Log In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Welcome

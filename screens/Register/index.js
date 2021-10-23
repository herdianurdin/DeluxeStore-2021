import React, { useState } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import colors from '../../assets/colors'
import firebase from 'firebase'

const Register = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [hide, setHide] = useState(true)

    const signUp = () => {
        if (!name || !email || !phoneNumber || !password) {
            alert('Please fill everything!')
        } else {
            setLoading(true)

            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    user.updateProfile({
                        displayName: name,
                    })

                    navigation.replace('BottomBar')
                })
                .catch((error) => {
                    setLoading(false)
                    alert(error.message)
                })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} style={{ width: '100%', height: '100%' }} />
            ) : (
                <View>
                    <View style={styles.headerWrapper}>
                        <Image source={require('../../assets/images/register_screen.png')} style={styles.headerImage} />
                        <View style={styles.headerButtons}>
                            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                                <MaterialCommunityIcons name="arrow-left" color="white" size={24} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonDots}>
                                <MaterialCommunityIcons name="dots-vertical" color="white" size={24} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.headerTitle}>Lets Start</Text>
                    </View>
                    <View style={styles.mainWrapper}>
                        <Text style={styles.mainTitle}>Sign Up</Text>
                        <TextInput style={styles.txtInput} placeholder="Name" value={name} onChangeText={setName} />
                        <TextInput style={styles.txtInput} placeholder="Email" value={email} onChangeText={setEmail} />
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
                        />
                        <View>
                            <TextInput
                                style={styles.txtInput}
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={hide}
                            />
                            <TouchableOpacity style={{ position: 'absolute', right: 16, top: 3 }} onPress={() => setHide(!hide)}>
                                <MaterialCommunityIcons
                                    name={hide ? 'eye' : 'eye-off'}
                                    color={colors.dark}
                                    size={24}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.footerWrapper}>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={[styles.textButton, { color: colors.primary }]}>
                                    Already have an account?
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={signUp}>
                                <Text style={styles.textButton}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Register

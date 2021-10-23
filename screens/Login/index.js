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
import firebase from 'firebase'
import colors from '../../assets/colors'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [hide, setHide] = useState(true)

    const signIn = () => {
        if (!email || !password) {
            alert('Please fill email & password!')
        } else {
            setLoading(true)

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
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
                        <Image source={require('../../assets/images/login_screen.png')} style={styles.headerImage} />
                        <View style={styles.headerButtons}>
                            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                                <MaterialCommunityIcons name="arrow-left" color="white" size={24} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonDots}>
                                <MaterialCommunityIcons name="dots-vertical" color="white" size={24} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.headerTitle}>{`Welcome\nBack`}</Text>
                    </View>
                    <View style={styles.mainWrapper}>
                        <Text style={styles.mainTitle}>Sign In</Text>
                        <TextInput style={styles.txtInput} placeholder="Email" value={email} onChangeText={setEmail} />
                        <View>
                            <TextInput
                                style={styles.txtInput}
                                placeholder="Password"
                                secureTextEntry={hide}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity style={{position: 'absolute', right: 16, top: 3}} onPress={() => setHide(!hide)}>
                                <MaterialCommunityIcons
                                    name={hide ? 'eye' : 'eye-off'}
                                    color={colors.dark}
                                    size={24}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.footerWrapper}>
                            <TouchableOpacity>
                                <Text style={[styles.textButton, { color: colors.primary }]}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={signIn}>
                                <Text style={styles.textButton}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Login

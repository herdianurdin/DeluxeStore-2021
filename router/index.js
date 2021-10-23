import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, SimpleLineIcons, Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux'
import store from '../redux/store'
import colors from '../assets/colors'

import Splash from '../screens/Splash'
import Welcome from '../screens/Welcome'
import Register from '../screens/Register'
import Login from '../screens/Login'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Feed from '../screens/Feed'
import ForYou from '../screens/ForYou'
import Notification from '../screens/Notification'
import Profile from '../screens/Profile'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Router = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} /> */}
                    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="BottomBar" component={BottomBar} options={{ headerShown: false }} />
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
                    <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
                    <Stack.Screen name="ForYou" component={ForYou} options={{ headerShown: false }} />
                    <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
                    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

const BottomBar = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingTop: 4,
                paddingBottom: 12,
                height: 72,
            },
            tabBarActiveTintColor: colors.primary,
            tabBarLabelStyle: { fontSize: 12, marginTop: -8 },
        }}
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Discover',
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name='home-outline'
                        size={26}
                        style={{
                            color: focused ? colors.primary : '#949494',
                        }}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons
                        name="format-list-bulleted"
                        size={26}
                        style={{
                            color: focused ? colors.primary : '#949494',
                        }}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="ForYou"
            component={ForYou}
            options={{
                tabBarLabel: 'For You',
                tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons
                        name="gift-outline"
                        size={26}
                        style={{
                            color: focused ? colors.primary : '#949494',
                        }}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
                tabBarLabel: 'Notification',
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name="notifications-outline"
                        size={26}
                        style={{
                            color: focused ? colors.primary : '#949494',
                        }}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarLabel: 'Profiles',
                tabBarIcon: ({ focused }) => (
                    <SimpleLineIcons
                        name="user"
                        size={26}
                        style={{
                            color: focused ? colors.primary : '#949494',
                        }}
                    />
                ),
            }}
        />
    </Tab.Navigator>
)

export default Router

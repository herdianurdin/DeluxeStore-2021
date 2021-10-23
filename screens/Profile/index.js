import React from 'react'
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../assets/colors'
import data from './data'
import firebase from 'firebase'

const Profile = ({ navigation }) => {
    const user = firebase?.auth()?.currentUser
    const name = user.displayName
    const signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                navigation.replace('Welcome')
            })
    }

    const renderCategory = (item) => {
        return (
            <View style={{width: 64, alignItems: 'center'}} key={item.id.toString()}>
                <TouchableOpacity style={{width: 45, marginBottom: 4, height: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#F4F4F4'}}>
                    <Image source={item.icon} style={{width: 32, height: 32 }} />
                </TouchableOpacity>
                <Text style={{fontSize: 12, textAlign: 'center'}}>{item.title}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ScrollView style={{ width: '100%' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 42,
                        backgroundColor: 'white',
                        paddingBottom: 8,
                        paddingHorizontal: 18,
                        marginBottom: 8,
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: '700' }}>My Account</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons
                                name="bell"
                                size={24}
                                color={colors.dark}
                                style={{ marginRight: 8 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialCommunityIcons
                                name="message-processing"
                                size={24}
                                color={colors.dark}
                                style={{ marginRight: 8 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="settings" size={24} color={colors.dark} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 18 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 18,
                            marginBottom: 4,
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>{name}</Text>
                        <Text style={{ fontSize: 13, color: colors.grey }}>Silver Member</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            paddingHorizontal: 16,
                            paddingVertical: 8,
                            borderWidth: 1,
                            borderColor: '#F0F0F0',
                        }}
                    >
                        <View style={{ backgroundColor: colors.grey, padding: 5, borderRadius: 32 }}>
                            <Ionicons name="person" size={32} color="white" />
                        </View>
                        <View>
                            <Text style={{ fontSize: 10, color: colors.grey }}>Follower: 4</Text>
                            <Text style={{ fontSize: 10, color: colors.grey }}>Following: 31</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 10, color: colors.primary, fontWeight: '700' }}>Kupon Saya</Text>
                            <Text style={{ fontSize: 13, color: 'black' }}>9 Kupon Baru</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: colors.primary, fontSize: 10, fontWeight: '700' }}>Top Up</Text>
                                <Text style={{ color: 'black', fontSize: 10 }}>Saldo :</Text>
                            </View>
                            <Text>Rp. 1.050.000</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: '50%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 32,
                                borderBottomColor: colors.primary,
                                borderBottomWidth: 3,
                            }}
                        >
                            <Text style={{ fontSize: 14 }}>Akun Pembeli</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: '50%', justifyContent: 'center', alignItems: 'center', height: 32 }}
                        >
                            <Text style={{ fontSize: 14 }}>Akun Toko</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 18 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 18,
                            marginBottom: 4,
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Transaksi</Text>
                        <Text style={{ fontSize: 13, color: colors.grey }}>Lihat Riwayat Transaksi {`>`}</Text>
                    </View>
                    <View style={{ backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: '#F0F0F0', }}>
                        <TouchableOpacity style={{borderColor: '#F0F0F0', borderBottomWidth: 1, width: '100%', paddingVertical: 8, paddingHorizontal: 16}}>
                            <Text style={{fontSize: 14, color: 'black'}}>Menunggu Transaksi</Text>
                            <Text style={{fontSize: 14, color: colors.grey}}>Semua transaksi yang belum dibayar</Text>
                        </TouchableOpacity>
                        <View style={{borderColor: '#F0F0F0', borderBottomWidth: 1, width: '100%', paddingVertical: 8, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between'}}>
                            {
                                data.map((item) => renderCategory(item))
                            }
                        </View>
                        <TouchableOpacity style={{width: '100%', paddingVertical: 8, paddingHorizontal: 16}}>
                            <Text style={{fontSize: 14, color: 'black'}}>Komplain sebagai pembeli</Text>
                            <Text style={{fontSize: 14, color: colors.grey}}>Lihat status komplain</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 18 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 18,
                            marginBottom: 4,
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Transaksi</Text>
                        <Text style={{ fontSize: 13, color: colors.grey }}>Lihat Riwayat Transaksi {`>`}</Text>
                    </View>
                    <View style={{ backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: '#F0F0F0', }}>
                        <TouchableOpacity style={{width: '100%', paddingVertical: 8, paddingHorizontal: 16, borderColor: '#F0F0F0', borderBottomWidth: 1,}}>
                            <Text style={{fontSize: 14, color: 'black'}}>Terakhir dilihat</Text>
                            <Text style={{fontSize: 14, color: colors.grey}}>Cek produk terakhir yang dilihat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: '100%', paddingVertical: 8, paddingHorizontal: 16, borderColor: '#F0F0F0', borderBottomWidth: 1,}}>
                            <Text style={{fontSize: 14, color: 'black'}}>Wishlist</Text>
                            <Text style={{fontSize: 14, color: colors.grey}}>Cek produk yang anda wishlist</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: '100%', paddingVertical: 8, paddingHorizontal: 16, borderColor: '#F0F0F0', borderBottomWidth: 1,}}>
                            <Text style={{fontSize: 14, color: 'black'}}>Toko Favorit</Text>
                            <Text style={{fontSize: 14, color: colors.grey}}>Lihat toko yang anda ikuti</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: '100%', paddingVertical: 8, paddingHorizontal: 16 }}>
                            <Text style={{fontSize: 14, color: 'black'}}>Langganan</Text>
                            <Text style={{fontSize: 14, color: colors.grey}}>Jadwalkan pembayaran tagihan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={signOut} style={{backgroundColor: colors.primary, marginHorizontal: 8, height: 44, justifyContent: 'center', alignItems: 'center', marginBottom: 18, borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

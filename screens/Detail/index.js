import React, { useEffect } from 'react'
import { Text, View, StatusBar, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { getDetailProduct } from '../../redux/products'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import colors from '../../assets/colors'

const Detail = ({ navigation }) => {
    const detailProduct = useSelector((state) => state.productReducer.product)

    useEffect(() => {
        getDetailProduct()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="white" hidden={false} translucent={false} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageWrapper}>
                    <View style={{padding: 16}}>
                        <Image source={{ uri: detailProduct?.image }} style={styles.image} resizeMode="contain" />
                    </View>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <MaterialCommunityIcons name="arrow-left" size={24} color={colors.dark} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <MaterialCommunityIcons name="cart" size={24} color={colors.dark} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="dots-vertical" size={24} color={colors.dark} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.mainWrapper}>
                    <View style={{ borderWidth: 1, borderColor: '#F0F0F0', borderRadius: 10, marginTop: -8 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 16,
                                paddingVertical: 10,
                                borderBottomWidth: 1,
                                borderColor: '#F0F0F0',
                            }}
                        >
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: '700', width: 240 }} numberOfLines={1}>{detailProduct?.title}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: '700',
                                            color: colors.primary,
                                            marginRight: 10,
                                        }}
                                    >
                                        $ {detailProduct?.price}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            color: colors.primary,
                                            borderWidth: 1,
                                            borderColor: colors.primary,
                                            paddingHorizontal: 6,
                                            paddingVertical: 2,
                                            borderRadius: 5,
                                        }}
                                    >
                                        Free Antiseptic
                                    </Text>
                                </View>
                            </View>
                            <MaterialCommunityIcons name="heart" size={28} color={colors.dark} />
                        </View>
                        <View
                            style={{
                                paddingHorizontal: 16,
                                paddingVertical: 4,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialCommunityIcons
                                    name="star-outline"
                                    size={20}
                                    color={colors.primary}
                                    style={{ marginRight: 4 }}
                                />
                                <Text style={{ fontSize: 12 }}>{detailProduct?.rating?.rate}</Text>
                                <Text style={{ fontSize: 9 }}> / 5</Text>
                                <Text style={{ marginHorizontal: 6, fontSize: 12 }}>|</Text>
                                <Text style={{ fontSize: 12 }}>{detailProduct?.rating?.count} Sold</Text>
                                <Text style={{ fontSize: 9 }}> / day</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="car-pickup" size={20} color={colors.primary} />
                                <Text style={{ marginLeft: 6, fontSize: 12 }}>Free Delivery</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 16 }}>
                        <Text style={{ fontSize: 14 }}>{detailProduct?.description}</Text>
                    </View>
                </View>
            </ScrollView>
            <View
                style={{
                    width: '100%',
                    height: 72,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 16,
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 0,
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#F0F0F0',
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }}
            >
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: 'green',
                        borderRadius: 8,
                        backgroundColor: 'white',
                        height: 35,
                        width: 35,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <MaterialCommunityIcons name="message-processing-outline" size={20} color="green" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderRadius: 8,
                        borderColor: colors.primary,
                        backgroundColor: 'white',
                        width: '40%',
                        height: 35,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ color: colors.primary, fontSize: 15, fontWeight: '700' }}>Beli Sekarang</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderRadius: 8,
                        borderColor: colors.primary,
                        width: '40%',
                        height: 35,
                        backgroundColor: colors.primary,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <MaterialCommunityIcons name="cart-plus" size={20} color="white" />
                    <MaterialCommunityIcons name="plus" size={15} color="white" />
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>Keranjang</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Detail

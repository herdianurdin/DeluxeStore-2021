import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    StatusBar,
    ScrollView,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ActivityIndicator,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getDetailProduct, getFlashSaleProducts, getPopularProducts } from '../../redux/products'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import colors from '../../assets/colors'
import data from './data'
import Code from '../../assets/icons/iconretangle.png'
import Dollar from '../../assets/icons/dollar.png'
import Coupon from '../../assets/icons/percent.png'

const Home = ({ navigation }) => {
    const allProducts = useSelector((state) => state.productReducer.allProducts)
    const flashSaleProducts = useSelector((state) => state.productReducer.flashSaleProducts)
    const popularProducts = useSelector((state) => state.productReducer.popularProducts)

    const dispatch = useDispatch()
    const width = Dimensions.get('window').width
    const [barHide, setBarHide] = useState(false)
    const [loading, setLoading] = useState(true)

    const detailProduct = (id) => {
        dispatch(getDetailProduct(id)).then(() => {
            navigation.navigate('Detail', {
                id,
            })
        })
    }

    const renderCategory = ({ item }) => {
        return (
            <View style={styles.categoryWrapper}>
                <TouchableOpacity style={styles.categoryIconWrapper}>
                    <Image source={item.icon} style={styles.categoryIcon} />
                </TouchableOpacity>
                <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
        )
    }

    const renderProductHorizontal = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    width: 120,
                    height: 150,
                    borderWidth: 0.7,
                    borderColor: '#F0F0F0',
                    marginRight: 10,
                    borderRadius: 10,
                }}
                onPress={() => detailProduct(item.id)}
            >
                <View
                    style={{
                        width: 120,
                        height: 108,
                        padding: 16,
                        borderRadius: 10,
                        borderWidth: 0.7,
                        borderColor: '#F0F0F0',
                        marginBottom: 2,
                    }}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ marginHorizontal: 9 }}>
                    <Text numberOfLines={1} style={{ fontSize: 12 }}>
                        {item.title}
                    </Text>
                    <Text style={{ fontSize: 10, fontWeight: '700' }}>$ {item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderAllProducts = (item, index) => {
        return (
            <TouchableOpacity
                style={{
                    width: 120,
                    height: 150,
                    borderWidth: 0.7,
                    borderColor: '#F0F0F0',
                    borderRadius: 10,
                    marginBottom: 10,
                    marginRight: (index + 1) % 3 !== 0 ? (width - 360) / 3 : 0,
                }}
                key={item.id.toString()}
                onPress={() => detailProduct(item.id)}
            >
                <View
                    style={{
                        width: 120,
                        height: 108,
                        padding: 16,
                        borderRadius: 10,
                        borderWidth: 0.7,
                        borderColor: '#F0F0F0',
                        marginBottom: 2,
                    }}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ marginHorizontal: 9 }}>
                    <Text numberOfLines={1} style={{ fontSize: 12 }}>
                        {item.title}
                    </Text>
                    <Text style={{ fontSize: 10, fontWeight: '700' }}>$ {item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        dispatch(getFlashSaleProducts())
        dispatch(getPopularProducts())
        dispatch(getAllProducts()).then(() => setLoading(false))

        return () => {
            dispatch(getFlashSaleProducts())
            dispatch(getPopularProducts())
            dispatch(getAllProducts())
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent={true}
                barStyle="dark-content"
                showHideTransition="none"
                backgroundColor="transparent"
                hidden={barHide}
            />
            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} style={{ width: '100%', height: '100%' }} />
            ) : (
                <ScrollView
                    onScroll={(event) => {
                        const positionY = event.nativeEvent.contentOffset.y
                        setBarHide(positionY > 28 ? true : false)
                    }}
                >
                    <View style={styles.headerWrapper}>
                        <Image style={styles.headerBanner} source={require('../../assets/images/banner.png')} />
                        <View style={styles.headerBar}>
                            <View style={styles.searchBar}>
                                <TextInput placeholder="Searching..." style={styles.searchInput} />
                                <MaterialCommunityIcons
                                    name="magnify"
                                    size={24}
                                    color={colors.dark}
                                    style={styles.searchIcon}
                                />
                            </View>
                            <View style={styles.iconBars}>
                                <TouchableOpacity style={styles.iconBar}>
                                    <MaterialCommunityIcons name="heart" size={28} color={colors.dark} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconBar}>
                                    <MaterialCommunityIcons name="message-processing" size={28} color={colors.dark} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconBar}>
                                    <MaterialCommunityIcons name="cart" size={28} color={colors.dark} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.showMore}>
                            <Text style={styles.showMoreText}>Lihat semua promo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuWrapper}>
                        <View style={styles.paymentWrapper}>
                            <View style={styles.codeWrapper}>
                                <Image source={Code} style={{ width: 25, height: 25 }} />
                            </View>

                            <View style={styles.verticalWrapper}>
                                <Image
                                    source={Dollar}
                                    style={{ width: 30, height: 30, alignSelf: 'center', marginRight: 8 }}
                                />
                                <View>
                                    <Text style={{ fontSize: 13 }}>Rp. 1.050.000</Text>
                                    <Text style={{ fontSize: 10, color: colors.primary, fontWeight: '700' }}>
                                        Top Up
                                    </Text>
                                </View>
                            </View>
                            <View style={{ height: 30, width: 1, backgroundColor: 'black' }} />
                            <View style={styles.verticalWrapper}>
                                <Image
                                    source={Coupon}
                                    style={{ width: 30, height: 30, alignSelf: 'center', marginRight: 8 }}
                                />
                                <View>
                                    <Text style={{ fontSize: 13 }}>9 Kupon Baru</Text>
                                    <Text style={{ fontSize: 10, color: colors.primary, fontWeight: '700' }}>
                                        Kupon Saya
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.menuCategory}>
                            <FlatList
                                data={data}
                                renderItem={renderCategory}
                                keyExtractor={(item) => item.id.toString()}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={styles.promoWrapper}>
                        <Image
                            source={require('../../assets/images/promo.png')}
                            style={styles.promoImage}
                            resizeMode="stretch"
                        />
                    </View>
                    <View
                        style={{
                            width: '100%',
                            backgroundColor: 'white',
                            marginBottom: 8,
                            borderRadius: 10,
                            paddingHorizontal: 12,
                            paddingTop: 4,
                            paddingBottom: 8,
                        }}
                    >
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', color: colors.primary, marginRight: 8 }}>
                                Flash Sale
                            </Text>
                            <Text style={{ fontSize: 12 }}>03.30.30</Text>
                            <View
                                style={{ position: 'absolute', right: 0, flexDirection: 'row', alignItems: 'center' }}
                            >
                                <Text style={{ fontSize: 14 }}>All </Text>
                                <MaterialCommunityIcons name="chevron-right" size={12} color={colors.primary} />
                            </View>
                        </View>
                        <View>
                            <FlatList
                                data={flashSaleProducts}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={renderProductHorizontal}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            backgroundColor: 'white',
                            marginBottom: 8,
                            borderRadius: 10,
                            paddingHorizontal: 12,
                            paddingTop: 4,
                            paddingBottom: 8,
                        }}
                    >
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', color: colors.primary, marginRight: 8 }}>
                                Popular Product
                            </Text>
                            <View
                                style={{ position: 'absolute', right: 0, flexDirection: 'row', alignItems: 'center' }}
                            >
                                <Text style={{ fontSize: 14 }}>All </Text>
                                <MaterialCommunityIcons name="chevron-right" size={12} color={colors.primary} />
                            </View>
                        </View>
                        <View>
                            <FlatList
                                data={popularProducts}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={renderProductHorizontal}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            backgroundColor: 'white',
                            marginBottom: 8,
                            borderRadius: 10,
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                        }}
                    >
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', color: colors.primary, marginRight: 8 }}>
                                All Product
                            </Text>
                            <View
                                style={{ position: 'absolute', right: 0, flexDirection: 'row', alignItems: 'center' }}
                            >
                                <Text style={{ fontSize: 14 }}>All </Text>
                                <MaterialCommunityIcons name="chevron-right" size={12} color={colors.primary} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                            {allProducts.map((item, index) => renderAllProducts(item, index))}
                        </View>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    )
}

export default Home

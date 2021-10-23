import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        width: '100%',
        height: 236,
    },
    headerBanner: {
        width: '100%',
        height: '100%',
    },
    headerBar: {
        position: 'absolute',
        top: 32,
        padding: 16,
        alignItems: 'center',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchBar: {
        justifyContent: 'center',
        flex: 1,
    },
    searchIcon: {
        position: 'absolute',
        left: 8,
    },
    searchInput: {
        color: colors.grey,
        backgroundColor: 'white',
        paddingVertical: 6,
        paddingLeft: 40,
        borderRadius: 8,
    },
    iconBars: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconBar: {
        marginLeft: 8,
    },
    showMore: {
        backgroundColor: colors.dark,
        position: 'absolute',
        bottom: 8,
        right: 8,
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    showMoreText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 12,
    },
    menuWrapper: {
        width: '100%',
        height: 196,
        backgroundColor: colors.navy,
    },
    paymentWrapper: {
        backgroundColor: 'white',
        height: 50,
        margin: 12,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 42
    },
    codeWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: '#E4E4E4',
        borderRadius: 8,
    },
    verticalWrapper: {
        flexDirection: 'row',
    },
    menuCategory: {
        marginLeft: 12,
        justifyContent: 'center'
    },
    categoryWrapper: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12
    },
    categoryIconWrapper: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10
    },
    categoryIcon: {
        width: 36,
        height: 36,
    },
    categoryTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    },
    promoWrapper: {
        width: '100%',
        marginTop: -24,
        marginBottom: 8
    },
    promoImage: {
        width: '100%',
        height: 110
    },
})

export default styles

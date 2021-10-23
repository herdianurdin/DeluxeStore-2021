import colors from '../../assets/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerWrapper: {
        width: '100%',
        marginBottom: 344
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    headerButtons: {
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',
        top: 36,
        paddingVertical: 18,
        flexDirection: 'row'
    },
    buttonBack: {
        position: 'absolute',
        alignSelf: 'center',
        left: 18
    },
    buttonDots: {
        position: 'absolute',
        alignSelf: 'center',
        right: 18
    },
    headerTitle: {
        fontSize: 40,
        position: 'absolute',
        top: 100,
        left: 30,
        color: 'white'
    },
    mainWrapper: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        height: 393,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 32
    },
    mainTitle: {
        fontSize: 36,
        fontWeight: '700',
        marginBottom: 36
    },
    txtInput: {
        height: 36,
        borderBottomColor: colors.grey,
        borderBottomWidth: 1.5,
        fontSize: 18,
        marginBottom: 32,
        paddingRight: 48
    },
    footerWrapper: {
        marginTop: 32,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textButton: {
        fontSize: 15,
        fontWeight: '700'
    },
})

export default styles

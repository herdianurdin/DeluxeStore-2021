import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
    headerWrapper: {
        width: '100%',
        marginBottom: 145,
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    headerTitle: {
        position: 'absolute',
        top: 180,
        left: 44,
        fontSize: 44,
        color: 'white',
    },
    mainWrapper: {
        width: '100%',
        height: 177,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingTop: 32,
        bottom: 0,
    },
    button: {
        width: '100%',
        height: 44,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnDanger: {
        backgroundColor: colors.primary,
        marginBottom: 12,
    },
    btnSafe: {
        backgroundColor: 'white',
        borderColor: colors.primary,
        borderWidth: 1,
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 18,
    },
    textSafe: {
        color: 'white',
    },
    textDanger: {
        color: colors.primary,
    },
})

export default styles

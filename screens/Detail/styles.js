import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageWrapper: {
        width: '100%',
        height: 420,
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 300,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 10,
        position: 'absolute',
        width: '100%',
        top: 8,
    },
    mainWrapper: {
        backgroundColor: 'white',
        marginBottom: 80,
    },
})

export default styles

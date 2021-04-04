import { StyleSheet } from 'react-native'
import colors from './config/colors'

const actions = StyleSheet.create({
    action: {
        padding: 10,
        fontSize: 20,
        textAlign: 'center', 
        margin: 10,
        borderRadius: 3,
        width: '90%',
        borderColor: colors.border,
    },
    actionName: {
        fontSize: 20,
        color: colors.text,
    },
    actionPoints: {
        textAlign: 'right',
        color: colors.text,
    },
    list: {
        width: '100%',
        height: '90%',
    },
    actionSelector: {
        /*
        container: {
            width: '100%'
        }
        */
    },
})


const common = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        color: colors.text,
        textAlign: 'center',
    },
    input: {
        padding: 10,
        fontSize: 20,
        textAlign: 'center', 
        borderWidth: 0.3,
        margin: 5,
        borderRadius: 20,
        margin: 2,
        paddingLeft: 20,
        textAlign: 'left',
        color: colors.text,
        borderColor: colors.border,
    },
    button: {
        padding: 10,
        borderRadius: 20,
        borderColor: colors.border,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.text,
    },
})

const selector = StyleSheet.create({
    selector: {
        flexDirection: 'row',
        marginTop: 20,
    },
    left: {
        padding: 10,
        borderRadius: 20,
        flex: 0.5,
        margin: 10,
    },
    right: {
        padding: 10,
        borderRadius: 20,
        flex: 0.5,
        margin: 10,
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: colors.text,
    }
})

export default { common, actions, selector }

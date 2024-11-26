import { StyleSheet } from "react-native";
import { shadow } from "react-native-paper";
const styles = {
    container:{
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    section:{
        borderWidth: 0,
        flex: 1,
        width: '100%',
    },
    logoBox: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    reglogoBox: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        justifyContent: 'center',
        marginBottom: 20,
        marginLeft: 50
    },
    buttonBox:{
        height: 50,
        justifyContent: 'center',
        marginLeft: 60,
        marginTop: 50,
    }
}

export default styles;
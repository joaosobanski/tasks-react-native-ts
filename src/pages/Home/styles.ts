
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#121214'
    },
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    text: {
        margin: 10,
        color: '#fff',
        fontSize: 20
    },
    input: {
        width: '100%',
        backgroundColor: '#29292e',
        color: '#f1f1f1',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 15
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#eba417',
        width: '100%',
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 20,
        borderRadius: 15
    },
    buttonText: {
        color: '#121214',
        fontSize: 18,
        fontWeight: 'bold'
    }

});
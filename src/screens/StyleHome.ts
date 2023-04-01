import { StyleSheet } from 'react-native';

export const StyleHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A3A3A3',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
    },
    form: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        marginBottom: 2,
    },
    button: {
        backgroundColor: '#0080ff',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    image: {
        width: 40,
        height: 40,
        borderRadius: 9,
        marginRight: 8,
    },

    textError: {
        color: "#DC143C",
        paddingLeft: 5,
    },
});
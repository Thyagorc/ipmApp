import { StyleSheet } from 'react-native';

export const StyleContactList = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 40,
      paddingBottom: 50,
    },
    contactContainer: {
      borderWidth: 1,
      borderColor: '#625f5f',
      borderRadius: 8,
      padding: 10,
      marginBottom: 5,
    },
    contactName: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    contactPhone: {
      color: '#2f342e',
      marginBottom: 5,
    },
    contactEmail: {
      color: '#2b2b32',
    },
    contactsList: {
      flex : 1,
    },
  });
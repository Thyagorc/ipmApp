import { View, Text, FlatList, ScrollView, } from 'react-native';
import { ContactProps } from '../../screens/Home';
import { StyleContactList } from './StyleContactList';

interface ContactsArrayProps {
  contacts: ContactProps[] | []
}

export default function ContactList({ contacts }: ContactsArrayProps) {

  function renderContact({ item }: { item: ContactProps }) {
    return (
      <View key={item.id} style={StyleContactList.contactContainer}>
        <Text style={StyleContactList.contactName}>Nome: {item.name}</Text>
        <Text style={StyleContactList.contactPhone}>Telefone: {item.phone}</Text>
        <Text style={StyleContactList.contactEmail}>Email: {item.email}</Text>
      </View>
    );
  }
  return (
    <View style={StyleContactList.container} >
      <ScrollView style={{ height: 350, }}>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={renderContact}
          style={StyleContactList.contactsList}
          contentContainerStyle={{ flexGrow: 1 }}
          scrollEnabled={true}
        />
      </ScrollView>
    </View>
  );
}



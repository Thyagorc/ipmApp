import React from 'react';
import { Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { ContactProps } from '../../screens/Home';
import ContactList from '../Contact/ContactList';
import { StyleSnapping } from './StyleSnapping';

type SnappingListProps = {
    modalRef: React.RefObject<Modalize>;
    contacts: ContactProps[]
};

export function SnappingList({ modalRef, contacts }: SnappingListProps) {
    return (
        <Modalize ref={modalRef} HeaderComponent={
            <View style={StyleSnapping.modal_header}>
                <Text style={StyleSnapping.modal_headerText}>{contacts.length} Contatos salvos</Text>
            </View>
        }
            snapPoint={500}
        >
            <View style={{ paddingBottom: 50 }}>
                <ContactList contacts={contacts} />
            </View>
        </Modalize>
    );
}


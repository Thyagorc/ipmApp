import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import { SnappingList } from '../components/Snapping/SnappingList';
import { StyleHome } from './StyleHome';
import { validateEmail, validateNumber } from '../utils/Regex';

export interface ContactProps {
  id: string;
  name: string;
  phone: number;
  email: string;
}

export default function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState<number | undefined>();
  const [email, setEmail] = useState('');
  const [nameTextError, setNameTextError] = useState('')
  const [phoneTextError, setPhoneTextError] = useState('')
  const [emailTextError, setEmailTextError] = useState('')

  const [contacts, setContacts] = useState<ContactProps[]>([]);
  const modalizeRef = useRef<Modalize>(null);

  function handleOpenModal() {
    modalizeRef.current?.open();
  }

  function handleAddContact() {

    if (!name) {
      setNameTextError("Preencha o nome")
      return;
    }

    const isEmailValid = validateEmail(email);
    const isPhoneValid = validateNumber(phone);

    if (!isEmailValid) {
      setEmailTextError("Preencha o email corretamente")
      return;
    }

    if (!isPhoneValid) {
      setPhoneTextError("Preencha o numero corretamente")
      return;
    }

    const newContact = {
      id: String(Date.now()),
      name,
      phone,
      email,
    };

    setContacts([...contacts, newContact]);
    setName('');
    setPhone(undefined);
    setEmail('');
    setNameTextError("");
    setEmailTextError("");
    setPhoneTextError("");
  }

  return (
    <View style={StyleHome.container}>
      <View style={StyleHome.titleContainer}>
        <Text style={StyleHome.title}>Contatos</Text>
        <Image
          source={require('/Desenvolvimento/TesteIpm/ipmApp/assets/icon.png')} style={StyleHome.image}
        />
      </View>
      <View style={StyleHome.form}>
        <TextInput
          style={StyleHome.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <Text style={StyleHome.textError}>{nameTextError}</Text>
        <TextInput
          style={StyleHome.input}
          placeholder="Phone"
          value={phone ? phone.toString() : ''}
          onChangeText={text => setPhone(Number(text))}
          keyboardType="numeric"
        />
        <Text style={StyleHome.textError}>{phoneTextError}</Text>

        <TextInput
          style={StyleHome.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={StyleHome.textError}>{emailTextError}</Text>

        <TouchableOpacity style={StyleHome.button} onPress={handleAddContact}>
          <Text style={StyleHome.buttonText}>Adicionar contato</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleOpenModal}
        activeOpacity={0.9}>
        <AntDesign name="contacts" size={35} color="black" />
      </TouchableOpacity>

      <SnappingList modalRef={modalizeRef} contacts={contacts} />

    </View>

  );
}
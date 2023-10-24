import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
} from 'react-native';
import Form from './src/components/Form';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Administrador de Citas</Text>
    <Text style={styles.subtitle} >Veterinaria</Text>
    <Pressable
    onPress={ ()=> setModalVisible(true) }
    style={styles.btnNewAppointment}
    >
    <Text
    style={styles.btnTextNewAppointment}
    > Nueva Cita </Text>
    </Pressable>
    <Form
      modalVisible={modalVisible}
      closeModal={closeModal}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 40,
    color: '#374151',
    fontSize: 30,
    fontWeight: '600',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 10,
    color: '#6D28D9',
    fontSize: 25,
    fontWeight: '900',
  },
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  btnNewAppointment: {
    padding: 15,
    backgroundColor: '#6D28D9',
    marginTop: 30,
    borderRadius: 15,
    marginHorizontal: 20,
  },
  btnTextNewAppointment: {
    color: '#FFF',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default App;

import React, { useState } from 'react'
import { Modal, Text, StyleSheet, View, PanResponder, TextInput, ScrollView } from 'react-native'

const Form = ({ modalVisible, closeModal }) => {

    const [patient, setPatient] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderRelease: (e, gestureState) => {
            if (gestureState.dy > 50) {
                closeModal();
            }}
    });

    return (
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => closeModal()}
      >
        <View style={styles.content} {...panResponder.panHandlers} >
            <ScrollView>
          <Text style={styles.title}>Nueva{' '}
            <Text style={styles.titleBold}>Cita</Text>
          </Text>
          <View style={styles.field} > 
            <Text style={styles.label} >Nombre paciente</Text>
            <TextInput
                style={styles.input}
                placeholder='Nombre paciente'
                placeholderTextColor={'#666'}
                value={patient}
                onChangeText={setPatient}
            />
          </View>
          <View style={styles.field} > 
            <Text style={styles.label} >Nombre propietario</Text>
            <TextInput
                style={styles.input}
                placeholder='Nombre propietario'
                placeholderTextColor={'#666'}
                value={owner}
                onChangeText={setOwner}
                maxLength={40}
            />
          </View>
          <View style={styles.field} > 
            <Text style={styles.label} >Email propietario</Text>
            <TextInput
                style={styles.input}
                placeholder='Email propietario'
                placeholderTextColor={'#666'}
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
            />
          </View>
          <View style={styles.field} > 
            <Text style={styles.label} >Teléfono propietario</Text>
            <TextInput
                style={styles.input}
                placeholder='Teléfono propietario'
                placeholderTextColor={'#666'}
                keyboardType='number-pad'
                value={phone}
                onChangeText={setPhone}
                maxLength={13}
            />
          </View>
          <View style={styles.field} > 
            <Text style={styles.label} >Síntomas paciente</Text>
            <TextInput
                style={[styles.input, styles.symptoms]}
                placeholder='Síntomas paciente'
                placeholderTextColor={'#666'}
                value={symptoms}
                onChangeText={setSymptoms}
                multiline={true}
                numberOfLines={4}
            />
          </View>
          </ScrollView>
        </View>
      </Modal>
    );
  };
  

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#fff'
    },
    titleBold: {
        fontWeight: '900'
    },
    content: {
        backgroundColor: '#6D28D9',
        flex: 1,
    },
    field: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        color: '#fff'
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    },
    symptoms: {
        height: 100
    }
})

export default Form
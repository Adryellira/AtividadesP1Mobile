import React, { useState } from 'react'
import { Image, Text, View, StyleSheet, TextInput, Button } from 'react-native'

export default function Atividade5() {
  const [name, setName] = useState('');
  const [nameField, setNameField] = useState('');
  const [confirm, setConfirm] = useState(false);

  const handleSendName = () => {
    setName(nameField);
    setNameField('');
  }

  const handleClear = () => {
    setName('');
  }

  const handleConfirm = () => {
    setConfirm(true)
  }

  return (
    <View style={styles.container}>
      {name == '' &&
        <View style={styles.layout1}>
          <Text style={styles.texto1}>Qual o seu nome?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setNameField(texto)} />

          <Button
            title="Enviar"
            color='#FFA051'
            onPress={handleSendName}
          />
        </View>
      }

      {!confirm ? (
        <>
          {name != '' &&
            <View style={styles.layout2}>
              <Text style={styles.texto2}>Olá {name}</Text>
              <Text style={styles.texto1}>Tudo bem?</Text>
              <Button
                title={`Não sou ${name}`}
                color='#FFA051'
                onPress={handleClear}
              />
              <View style={{ height: 10 }} />
              <Button
                title={'CONFIRMAR'}
                color='green'
                onPress={handleConfirm}
              />
            </View>
          }</>
      ) : (
        <View style={{ height: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
          <Image
           source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2XYp2u1SAhcLivt7X4ED9DrrlwSoFmMQtI3rRrfAWdDhDsW_h'}}
           style={{ width: 250, height: 250, marginTop: '25%' }}
          />
          <Text style={{ fontSize: 30}}>{name}</Text>
          <View style={styles.layout3}>
            <Button
              title={'LOGOUT'}
              color='#FFA051'
              onPress={() => [setConfirm(false), handleClear()]}
            />
          </View>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: '#FFF'
  },

  layout1: {
    height: 450,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#131047',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 15
  },
  layout2: {
    height: 200,
    width: '100%',
    marginTop: 10,
    backgroundColor: '#131047',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 15
  },
  layout3: {
    height: 200,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#131047',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 15
  },
  texto1: {
    color: '#fff',
    fontSize: 20,
    margin: 10
  },
  texto2: {
    color: '#fff',
    fontSize: 30,
  },
  input: {
    fontSize: 15,
    padding: 10,
    width: 300,
    outline: 'none',
    borderRadius: 15,
    backgroundColor: '#f1f1f1',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 20,
  },
});


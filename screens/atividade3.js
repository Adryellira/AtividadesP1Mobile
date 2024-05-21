/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function Atividade3() {
  const [senha, setSenha] = useState('')
  const [confirmar, setConfirmar] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Digitar senha"
        onChangeText={setSenha}
        value={senha}
      />
      <Text style={styles.label}>Confirmar Senha</Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Confirmar senha"
        onChangeText={setConfirmar}
        value={confirmar}
      />

      {senha === '' ? (
        <View></View>
      ) : (
        <View>
          {senha === confirmar ? (
            <Text style={styles.iguais}>Senhas iguais</Text>
          ) : (
            <Text style={styles.diferentes}>Senhas não conferem</Text>
          )}
        </View>
      )}


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    padding: '10%'
  },
  label: {
    alignSelf: 'flex-start'
  },

  textInput: {
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: '100%', 
    marginBottom: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  mensagemValidacao: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: 250,
    height: 100,
  },

  iguais: {
    color: 'green',
    alignSelf: 'flex-start',
  },

  diferentes: {
    color: '#FF0000',
  },
})

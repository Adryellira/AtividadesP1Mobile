import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'

export default function Atividade4({ navigation }) {
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digitar email"
        value={email}
        onChangeText={setEmail}
      />
      <Text>Confirmar Email</Text>

      <TextInput
        style={styles.input}
        placeholder="Confirmar Email"
        onChangeText={setConfirmEmail}
        value={confirmEmail}
      />
      {email === '' ? (
        <></>
      ) : (
        <>
          {email != confirmEmail ? (
            <Text style={styles.error}>Os email precisam ser iguais</Text>
          ) : (
            <Text style={styles.success}>Muito bem!</Text>
          )}
        </>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%'
  },
  input: {
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  success: {
    color: 'green',
    marginTop: 10,
  },
})

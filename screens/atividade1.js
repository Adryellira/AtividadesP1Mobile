import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'

export default function App({ navigation }) {
  const [nome, setNome] = useState('')
  const [time, setTime] = useState('')

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.label}>
          Nome: <Text style={styles.result}>{nome}</Text>
        </Text>

        {nome === '' ? (
          <View style={{ flexDirection: 'row', width: 183, paddingRight: 5 }}>
            <TouchableOpacity
              style={[styles.buttons, { backgroundColor: 'orange' }]}
              onPress={() => setNome('Carlos')}
            >
              <Text style={styles.options}>Carlos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttons, { backgroundColor: 'blue' }]}
              onPress={() => setNome('Saulo')}
            >
              <Text style={styles.options}>Saulo</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            {nome === 'Carlos' ? (
              <TouchableOpacity
                style={[styles.buttons, { backgroundColor: 'blue' }]}
                onPress={() => setNome('Saulo')}
              >
                <Text style={styles.options}>Saulo</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttons, { backgroundColor: 'orange' }]}
                onPress={() => setNome('Carlos')}
              >
                <Text style={styles.options}>Carlos</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        <Text style={[styles.label, { marginTop: 20 }]}>
          Time: <Text style={styles.result}>{time}</Text>
        </Text>

        {time === '' ? (
          <View style={{ flexDirection: 'row', width: 183, paddingRight: 5 }}>
            <TouchableOpacity
              style={[styles.buttons, { backgroundColor: 'black' }]}
              onPress={() => setTime('Vasco')}
            >
              <Text style={styles.options}>Vasco</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttons, { backgroundColor: 'red' }]}
              onPress={() => setTime('Flamengo')}
            >
              <Text style={styles.options}>Flamengo</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            {time === 'Flamengo' ? (
              <TouchableOpacity
                style={[styles.buttons, { backgroundColor: 'black' }]}
                onPress={() => setTime('Vasco')}
              >
                <Text style={styles.options}>Vasco</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttons, { backgroundColor: 'red' }]}
                onPress={() => setTime('Flamengo')}
              >
                <Text style={styles.options}>Flamengo</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        <Pressable
          style={{
            width: 100,
            height: 40,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 50,
          }}
          onPress={() => [setTime(''), setNome('')]}
        >
          <Text style={{ color: 'white' }}>Limpar</Text>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 30,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  options: {
    fontSize: 20,
    color: 'white',
  },
  result: {
    color: 'black',
  },
})

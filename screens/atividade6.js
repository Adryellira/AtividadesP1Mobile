import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function Atividade6({ navigation }) {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if(count === 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>–</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})

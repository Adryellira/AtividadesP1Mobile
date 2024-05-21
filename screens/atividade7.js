import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

export default function Atividade7({ navigation }) {
  const [display, setDisplay] = useState('')
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('')

  const handleNumber = (number) => {
    if (operator === '') {
      setNum1(num1 + number)
    } else {
      setNum2(num2 + number)
    }
  }

  const handleOperator = (op) => {
    setOperator(op)
  }

  const handleCalculate = () => {
    let result = 0
    switch (operator) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2)
        break
      case '-':
        result = parseFloat(num1) - parseFloat(num2)
        break
      case '*':
        result = parseFloat(num1) * parseFloat(num2)
        break
      case '/':
        if (num2 === '0') {
          alert('Cannot divide by zero')
          return
        }
        result = parseFloat(num1) / parseFloat(num2)
        break
    }
    setDisplay(result.toString())
    setNum1(result.toString())
    setNum2('')
    setOperator('')
  }

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setOperator('');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{num1}{operator}{num2}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Pressable style={styles.button} onPress={() => handleNumber('7')}>
            <Text style={styles.buttonText}>7</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumber('8')}>
            <Text style={styles.buttonText}>8</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumber('9')}>
            <Text style={styles.buttonText}>9</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleOperator('/')}>
            <Text style={styles.buttonText}>/</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.button} onPress={() => handleNumber('4')}>
            <Text style={styles.buttonText}>4</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumber('5')}>
            <Text style={styles.buttonText}>5</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumber('6')}>
            <Text style={styles.buttonText}>6</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleOperator('*')}>
            <Text style={styles.buttonText}>*</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.button} onPress={() => handleNumber('1')}>
            <Text style={styles.buttonText}>1</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumber('2')}>
            <Text style={styles.buttonText}>2</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleNumber('3')}>
            <Text style={styles.buttonText}>3</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleOperator('-')}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.button} onPress={() => handleNumber('0')}>
            <Text style={styles.buttonText}>0</Text>
          </Pressable>
          <Pressable style={[styles.button, { paddingHorizontal: 20 }]} onPress={handleClear}>
            <Text style={styles.buttonText}>CE</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleCalculate}>
            <Text style={styles.buttonText}>=</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleOperator('+')}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  display: {
    height: 80,
    width: '100%',
    marginHorizontal: 20,
    padding: 20,
    fontSize: 24,
    textAlign: 'right',
    borderWidth: 1,
  },
  buttonsContainer: {
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 25,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const IconCards = ({ icone, corIcone, texto, corBackground, onpress }) => {
  return (
    <Pressable onPress={onpress} style={[styles.container, styles.border]}>
      <View style={[styles.bg, { backgroundColor: `${corBackground}` }]}>
        <Icons name={icone} size={30} color={corIcone} />
      </View>
      <Text>{texto}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '30%',
    height: '40%',
    marginBottom: '7%',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: '#fcfcfc',
    borderWidth: 0,
  },
  bg: {
    padding: 15,
    borderRadius: 100,
  },
})

export default IconCards

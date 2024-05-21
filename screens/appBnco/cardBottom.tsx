import React from 'react'

import { Text, Pressable, StyleSheet } from 'react-native'

type InfoCardBottom = {
  text?: string
  value?: number
  bgColor?: string
}

export default function CardBottoms({
  text = 'Não informado',
  value = 0,
  bgColor,
}: InfoCardBottom) {
  return (
    <Pressable style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.value}>${value}</Text>
    </Pressable>
  )
}
export const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 120,
    borderRadius: 15,
    padding: 15,
    justifyContent: 'space-between',
    marginHorizontal: 8 
  },
  text: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 18,
  },
  value: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

import React from 'react'
import { View, Text, Alert, Pressable, ScrollView, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconCards from './iconCard'
import CardBottoms from './cardBottom'

export default function Banco() {
  function Mensagem() {
    Alert.alert('Vai')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headHeader}>
          <Icons onPress={Mensagem} name="menu" size={20} color="#fff" />
          <Icons
            onPress={Mensagem}
            name="bell-outline"
            size={20}
            color="#fff"
          />
        </View>
        <View style={styles.headBody}>
          <View style={styles.headBodyValue}>
            <Text style={styles.textValue}>3000,00 $ </Text>
            <Text style={styles.textBalance}>Avaible Balance </Text>
          </View>
          <View style={styles.headBodyButton}>
            <Pressable style={styles.buttonTopMe}>
              <Text style={styles.textButtonTopMe}>TOP ME</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.modaloptions}>
        <IconCards
          icone="send"
          corIcone="#4A44FF"
          texto="Send"
          corBackground="#F3F3FF"
          onpress={Mensagem}
        />
        <IconCards
          icone="credit-card-settings-outline"
          corIcone="#00BBF4"
          texto="Pay"
          corBackground="#F3F3FF"
          onpress={Mensagem}
        />
        <IconCards
          icone="message-arrow-left"
          corIcone="#FF814A"
          texto="Request"
          corBackground="#FFF1EB"
          onpress={Mensagem}
        />
        <IconCards
          icone="newspaper-variant-outline"
          corIcone="#FF4085"
          texto="Invoice"
          corBackground="#FFEFF5"
          onpress={Mensagem}
        />
        <IconCards
          icone="cards-heart"
          corIcone="#C871F7"
          texto="Charity"
          corBackground="#F9F0FE"
          onpress={Mensagem}
        />
        <IconCards
          icone="piggy-bank"
          corIcone="#825EED"
          texto="Loan"
          corBackground="#F4F1FD"
          onpress={Mensagem}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.textUpcoming}>Upcoming</Text>

        <View style={styles.cardView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: '5%'}}>
            <CardBottoms
              text="Design logo for ASA"
              value={225}
              bgColor="#4F49FF"
            />
            <CardBottoms text="Next meeting" value={114} bgColor="#009CFF" />
            <CardBottoms
              text="Norman send your money"
              value={190}
              bgColor="#FF684C"
            />
            <CardBottoms value={190} bgColor="#A70EEC" />
            <CardBottoms value={190} bgColor="#D95D69" />
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FaFaFa',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: '#4A44FF',
    width: '100%',
    height: '30%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingVertical: '10%',
    paddingHorizontal: '10%',
    position: 'absolute'
  },
  modaloptions: {
    backgroundColor: 'white',
    width: '80%',
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: '50%'
  },

  headHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '30%',
  },

  headBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50%',
  },

  body: {
    marginHorizontal: 10,
    marginVertical: 25,
  },

  headBodyValue: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
  },

  headBodyButton: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  textValue: {
    fontSize: 35,
    fontWeight: '500',
    color: '#fff',
  },

  textBalance: {
    fontSize: 15,
    fontWeight: '400',
    color: '#fff',
  },

  buttonTopMe: {
    width: '90%',
    height: 50,
    backgroundColor: '#00CCFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  textUpcoming: {
    fontSize: 20,
    bottom: 10,
    fontWeight: 'bold',
    color: '#808080',
    marginLeft: '10%'
  },
  textButtonTopMe: {
    fontSize: 15,
    fontWeight: '400',
    color: '#fff',
  },
  cardView:{
    flexDirection: 'row'
    
  }

})

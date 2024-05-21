import React from 'react'
import { TouchableHighlight, Text, View , StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Atividades({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => navigation.navigate('appbanco')} underlayColor={'rgba(200,200,200,1)'} style={styles.button}>
                <View style={styles.box}>
                    <Text style={styles.title}>App Banco</Text>
                    <AntDesign name="caretright" size={24} color="black" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('atividade1')} underlayColor={'rgba(200,200,200,1)'} style={styles.button}>
                <View style={styles.box}>
                    <Text style={styles.title}>Atividade 1</Text>
                    <AntDesign name="caretright" size={24} color="black" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('atividade3')} underlayColor={'rgba(200,200,200,1)'} style={styles.button}>
                <View style={styles.box}>
                    <Text style={styles.title}>Atividade 3</Text>
                    <AntDesign name="caretright" size={24} color="black" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('atividade4')} underlayColor={'rgba(200,200,200,1)'} style={styles.button}>
                <View style={styles.box}>
                    <Text style={styles.title}>Atividade 4</Text>
                    <AntDesign name="caretright" size={24} color="black" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('atividade5')} underlayColor={'rgba(200,200,200,1)'} style={styles.button}>
                <View style={styles.box}>
                    <Text style={styles.title}>Atividade 5</Text>
                    <AntDesign name="caretright" size={24} color="black" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('atividade6')} underlayColor={'rgba(200,200,200,1)'} style={styles.button}>
                <View style={styles.box}>
                    <Text style={styles.title}>Atividade 6</Text>
                    <AntDesign name="caretright" size={24} color="black" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('atividade7')} underlayColor={'rgba(200,200,200,1)'} style={styles.button}>
                <View style={styles.box}>
                    <Text style={styles.title}>Atividade 7</Text>
                    <AntDesign name="caretright" size={24} color="black" />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('stack')} underlayColor={'rgba(200,200,200,1)'} style={styles.button}>
                <View style={styles.box}>
                    <Text style={styles.title}>Atividade Stack</Text>
                    <AntDesign name="caretright" size={24} color="black" />
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 18
    },
    button: {
        paddingHorizontal: 18,
        marginVertical: 9
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 18,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20
    }
})

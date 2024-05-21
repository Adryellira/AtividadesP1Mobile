import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { receitas } from "./receitas";

export default function HomeStack() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {receitas.map((receitas) => (
                <View style={styles.box} key={receitas.id}>
                    <TouchableOpacity onPress={() => navigation.navigate('detalhes', { receitaId: receitas.id })} style={styles.boxButton}>
                        <Image
                            source={{ uri: receitas.uri }}
                            style={styles.image}
                        />
                        <View style={styles.information}>
                            <Text style={styles.title}>{receitas.titulo}</Text>
                            <Text style={styles.description}>{receitas.descricao}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25
    },
    box: {
        backgroundColor: 'white',
        width: '100%',
        elevation: 15,
        padding: 20,
        borderRadius: 20,
        marginVertical: 10
    },
    boxButton: {
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 20,
        backgroundColor: 'gray'
    },
    information: {
        justifyContent: 'space-evenly'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16
    }
})
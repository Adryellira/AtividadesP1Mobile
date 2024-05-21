import React from "react";
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Image, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { receitas, lasanha, smoothie, pudim, batata } from "./receitas";

export default function Detalhes({ route, navigation }) {

    const { receitaId } = route.params;
    const receita = receitas.find(r => r.id === receitaId);

    const navigateToPreviousReceita = () => {
        if (receitaId > 1) {
            const prevId = receitaId - 1
            navigation.navigate('detalhes', { receitaId: prevId });
        } else {

        }
    };

    const navigateToNextReceita = () => {
        if (receitaId < receitas.length) {
            const nextId = receitaId + 1
            navigation.navigate('detalhes', { receitaId: nextId });
        } else {

        }
    };


    return (
        <View style={styles.container}>
            <ScrollView style={{ padding: 30 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{receita.descricao}</Text>
                <Image
                    source={{ uri: receita.uri }}
                    style={{ width: '100%', height: 300, backgroundColor: 'gray', marginVertical: 20 }}
                />
                <Text style={styles.subTitle}>Ingredientes</Text>
                {receitaId === 1 && (
                    <>
                        {lasanha.map((ingrediente) => (
                            <Text style={{ fontSize: 18 }} key={ingrediente.id}>
                                <Text style={styles.traces}>- </Text>
                                {ingrediente.text}
                            </Text>
                        ))}
                    </>
                )}
                {receitaId === 2 && (
                    <>
                        {batata.map((ingrediente) => (
                            <Text style={{ fontSize: 18 }} key={ingrediente.id}>
                                <Text style={styles.traces}>- </Text>
                                {ingrediente.text}
                            </Text>
                        ))}
                    </>
                )}
                {receitaId === 3 && (
                    <>
                        {smoothie.map((ingrediente) => (
                            <Text style={{ fontSize: 18 }} key={ingrediente.id}>
                                <Text style={styles.traces}>- </Text>
                                {ingrediente.text}
                            </Text>
                        ))}
                    </>
                )}
                {receitaId === 4 && (
                    <>
                        {pudim.map((ingrediente) => (
                            <Text style={{ fontSize: 18 }} key={ingrediente.id}>
                                <Text style={styles.traces}>- </Text>
                                {ingrediente.text}
                            </Text>
                        ))}
                    </>
                )}

                <Text style={styles.subTitle}>Modos de Preparo</Text>
                <Text style={{ fontSize: 18, paddingBottom: 200 }}>{receita.preparo}</Text>
            </ScrollView>

            <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center', position: 'absolute', bottom: 0, padding: 35, backgroundColor: '#F2F2F2', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={navigateToPreviousReceita} style={styles.buttons}>
                    <AntDesign name="left" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('stack')} style={[styles.buttons, { paddingHorizontal: 65 }]}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Sair</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(navigateToNextReceita)} style={styles.buttons}>
                    <AntDesign name="right" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    subTitle: {
        fontSize: 22,
        fontWeight: '800',
        marginVertical: 10
    },
    traces: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttons: {
        backgroundColor: '#D0CECE',
        padding: 15,
        borderRadius: 10
    }
})

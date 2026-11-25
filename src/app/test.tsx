import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TestScreen() {

    const [projets, setProjets] = useState<{ name: string }[]>([])

    useEffect(() => refresh(), []);

    function refresh() {
        fetch("http://10.234.173.137:8080/project/all")
            .then((reponse) => reponse.json())
            .then((projets) => setProjets(projets));
    }


    function onDelete(item: any) {
        fetch("http://10.234.173.137:8080/project/" + item.id, { method: "DELETE" })
            .then(() => refresh());
    }

    return (
        <SafeAreaView style={styles.contenu}>
            <Text>Nombre de projets : {projets?.length}</Text>

            <FlatList
                data={projets}
                renderItem={({ item }) => (
                    <View style={styles.projet}>
                        <Text>{item.name}</Text>
                        <Pressable onPress={() => onDelete(item)}>
                            <Text>Supprimer</Text>
                        </Pressable>
                    </View>
                )}>
            </FlatList>

        </SafeAreaView>

    )
}


const styles = StyleSheet.create(
    {
        contenu: { justifyContent: 'center', alignItems: 'center', flex: 1 },
        projet: { borderColor: 'black', borderWidth: 1, padding: 10, margin: 10 },
        texteHello: { color: 'red' }
    }
)

import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function DetailsProjectScreen() {

    const params = useLocalSearchParams()

    console.log(params);

    //TODO afficher les details d'un projet



    return <Text>Détails</Text>;
}
import { meditations } from "@/data";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MeditationDetails() {
    const {id} = useLocalSearchParams<{id: string}>();

    const meditation = meditations.find((m) => m.id === Number(id));

    if(!meditation){
        return <Text>Meditation not found</Text>  
    }
    return (
        <SafeAreaView>
            <FontAwesome onPress={()=>router.back()} className="absolute top-16 right-10 z-10 " name="close" size={24} color="black" />
            <Text className="text-3xl ">  {meditation?.title}</Text>
        
        </SafeAreaView>
    )
}
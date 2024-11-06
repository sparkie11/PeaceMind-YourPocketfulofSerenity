import { meditations } from "@/data";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function MeditationDetails() {
    const {id} = useLocalSearchParams<{id: string}>();

    const {top} = useSafeAreaInsets();

    const meditation = meditations.find((m) => m.id === Number(id));

    if(!meditation){
        return <Text>Meditation not found</Text>  
    }
    return (
        <SafeAreaView className="bg-orange-500 flex-1">
            <View className="flex-row items-center  justify-between p-10">
                <FontAwesome name="info" size={24} color="black" />
                <View className="bg-zinc-900 p--2 rounded-md">
                    <Text className="text-zinc-100 font-semibold "> Today's Meditation</Text>
                </View>

                <FontAwesome onPress={()=>router.back()}  className="  right-4 z-10 " name="close" size={24} color="black" />
            </View>
            <Text className="text-3xl ">  {meditation?.title}</Text>
        
        </SafeAreaView>
    )
}
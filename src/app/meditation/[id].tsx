import { meditations } from "@/data";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function MeditationDetails() {
    const {id} = useLocalSearchParams<{id: string}>();

    const {top} = useSafeAreaInsets();

    const meditation = meditations.find((m) => m.id === Number(id));

    if(!meditation){
        return <Text>Meditation not found</Text>  
    }
    return (
        <SafeAreaView className="bg-orange-500 flex-1 p-2">
            <View className="flex-row items-center  justify-between p-10">
                <FontAwesome name="info" size={24} color="black" />
                <View className="bg-zinc-900 p--2 rounded-md">
                    <Text className="text-zinc-100 font-semibold "> Today's Meditation</Text>
                </View>

                <FontAwesome onPress={()=>router.back()}  className="  right-4 z-10 " name="close" size={24} color="black" />
            </View>
            <Text className="text-3xl mt-10 text-zinc-800 text-center font-semibold ">  {meditation?.title}</Text>

            <Pressable className="bg-zinc-800 self-center p-6 rounded-full w-20 aspect-square items-center  ">
                
                <FontAwesome6 name="play" size={24} color="snow" />
                {/* <FontAwesome6 name="pause" size={24} color="black" /> */}
            </Pressable>

            <View>
                
            </View>
        
        </SafeAreaView>
    )
}
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
        <SafeAreaView className="bg-orange-500 flex-1 p-2 justify-between">
            <View>
                <View className="flex-row items-center  justify-between p-10">
                    <FontAwesome name="info" size={24} color="black" />
                    <View className="bg-zinc-900 p--2 rounded-md">
                        <Text className="text-zinc-100 font-semibold "> Today's Meditation</Text>
                    </View>

                    <FontAwesome onPress={()=>router.back()}  className="  right-4 z-10 " name="close" size={24} color="black" />
                </View>
                <Text className="text-3xl mt-10 text-zinc-800 text-center font-semibold ">  {meditation?.title}</Text>
            </View>

            <Pressable className="bg-zinc-800 self-center p-6 rounded-full w-20 aspect-square items-center  ">
                
                <FontAwesome6 name="play" size={24} color="snow" />
                {/* <FontAwesome6 name="pause" size={24} color="black" /> */}
            </Pressable>

            <View className="p-5 ">
                <View className="flex-row justify-between">
                    <FontAwesome name="eercast" size={24} color="black" />
                    <FontAwesome name="cog" size={24} color="#3A3937" />
                </View>
                <View>
                    <View className="bg-zinc-400 h-2"/>
                </View>
            </View>
        
        </SafeAreaView>
    )
}
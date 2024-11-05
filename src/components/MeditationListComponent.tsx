import { Pressable, Text, View } from "react-native";
import { Meditation } from "@/types";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";

export function MeditationListComponent({meditation} : {meditation : Meditation  }) {
    return (
        <Link href={`/meditation/${meditation.id}`} asChild>
            <Pressable className="flex-row items-center gap-5 ">
                <View className="bg-green-700 p-2 rounded-full">
                    <FontAwesome name="check" size={16} color="white" />
                </View>
                <View className="flex-1 p-5 border border-gray-300 rounded-xl ">
                    <Text className="font-semibold text-2xl mb-2 ">{meditation.title}</Text>
                    <View className="flex-row items-center gap-1">

                        <FontAwesome5 name="clock" size={15} color="#6B7280" />
                        <Text className="text-gray-600">{meditation.duration} min</Text>
                
                    </View>
                </View>
            </Pressable>
        </Link>

    )
}
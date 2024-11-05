import { Text, View } from "react-native";
import { Meditation } from "@/types";

export function MeditationListComponent({meditation} : {meditation : Meditation  }) {
    return (
        <View className="p-5 border border-gray-300 rounded-xl m-5">
            <Text className="font-semibold text-2xl  ">{meditation.title}</Text>
        </View>
    )
}
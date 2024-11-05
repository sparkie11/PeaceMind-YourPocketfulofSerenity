import { Text, View } from "react-native";
import { meditations } from "../data";


const meditation = meditations[0];

export default function HomeScreen() {
  return (
    <View className="p-5">

        <Text className="font-semibold text-2xl  ">{meditation.title}</Text>
    </View>
  )
}

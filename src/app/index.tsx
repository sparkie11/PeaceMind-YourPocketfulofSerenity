import { FlatList, Text, View } from "react-native";
import { meditations } from "@/data";
import { Meditation } from "@/types";
import { MeditationListComponent } from "@/components/MeditationListComponent";





export default function HomeScreen() {
    return (
        <FlatList
            data={meditations}
            renderItem={({item})=> <MeditationListComponent meditation={item}/>}
        />
  )
}

import { FlatList, Text, View } from "react-native";
import { meditations } from "@/data";
import { Meditation } from "@/types";
import { MeditationListComponent } from "@/components/MeditationListComponent";





export default function HomeScreen() {
    return (
        <FlatList
            data={meditations}
            className="bg-white"
            contentContainerClassName="gap-8 p-3 "
            renderItem={({item})=> <MeditationListComponent meditation={item}/>}
        />
  )
}

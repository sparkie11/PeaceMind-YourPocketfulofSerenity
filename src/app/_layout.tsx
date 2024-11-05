import { Stack } from "expo-router";
import "../../global.css";

export default function RootLAyout(){
    return (
        <Stack>
        <Stack.Screen name="index" options={{title: "Indexfff"}} />
        </Stack>
        )
     ;
}
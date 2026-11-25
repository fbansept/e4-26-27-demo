import { Stack } from "expo-router";

export default function ProjectsLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Projets" }} />
            <Stack.Screen name="details-project" options={{ title: "Details" }} />
        </Stack>
    );
}
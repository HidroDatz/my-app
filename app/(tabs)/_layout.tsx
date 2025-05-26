import { Tabs } from "expo-router";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8e8e93",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="apps/index"
        options={{
          title: "All Apps",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="apps" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="gold/index"
        options={{
          title: "Gold",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="money" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="games/index"
        options={{
          title: "Games",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

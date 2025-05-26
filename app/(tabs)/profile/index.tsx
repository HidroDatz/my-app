import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const gradientPresets = [
  ["#FF6B6B", "#FF8E53"],
  ["#4ECDC4", "#45B7D1"],
  ["#96F2D7", "#D8B5FF"],
  ["#FFAFBD", "#FFC3A0"],
];

export default function ProfileScreen() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [gradientColors, setGradientColors] = useState<string[]>([
    "#f0f0f0",
    "#f0f0f0",
  ]);
  const userName = "John Doe";
  const userInitial = userName.charAt(0).toUpperCase();
  const position = "Senior Developer";

  useEffect(() => {
    // Set random gradient on mount
    const randomGradient =
      gradientPresets[Math.floor(Math.random() * gradientPresets.length)];
    setGradientColors(randomGradient);
  }, []);

  const menuItems = [
    { icon: "person", title: "My Profile" },
    { icon: "settings", title: "Setting" },
    { icon: "support-agent", title: "Support" },
    { icon: "help-outline", title: "FAQ" },
    { icon: "admin-panel-settings", title: "Admin" },
    { icon: "logout", title: "Logout", color: "red" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Background with Avatar */}
      <View style={styles.profileHeader}>
        <LinearGradient
          colors={gradientColors}
          style={styles.backgroundContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.avatarContainer}>
            {avatar ? (
              <Image source={{ uri: avatar }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatar, styles.initialContainer]}>
                <Text style={styles.initialText}>{userInitial}</Text>
              </View>
            )}
            <Pressable style={styles.cameraButton}>
              <MaterialIcons name="photo-camera" size={20} color="white" />
            </Pressable>
          </View>
        </LinearGradient>

        {/* Name and Position */}
        <View style={styles.nameContainer}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.position}>Senior Developer</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <View key={index}>
            <Pressable style={styles.menuItem}>
              <MaterialIcons
                name={item.icon as any}
                size={24}
                color={item.color || "#666"}
                style={styles.menuIcon}
              />
              <Text
                style={[styles.menuText, item.color && { color: item.color }]}
              >
                {item.title}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="#666"
                style={styles.arrowIcon}
              />
            </Pressable>
            {index !== menuItems.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileHeader: {
    marginBottom: 20,
  },
  backgroundContainer: {
    height: 200,
    position: "relative",
    marginTop: 40,
    margin: 20,
    borderRadius: 10,
  },
  avatarContainer: {
    position: "absolute",
    bottom: -75,
    alignSelf: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#fff",
  },
  initialContainer: {
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  initialText: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "bold",
  },
  cameraButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  },
  nameContainer: {
    marginTop: 90,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  position: {
    fontSize: 16,
    color: "#666",
  },
  menuContainer: {
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  arrowIcon: {
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginLeft: 20,
  },
});

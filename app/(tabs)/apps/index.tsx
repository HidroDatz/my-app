import { ScrollView, View, Text, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const SectionList = ({
  title,
  items,
}: {
  title: string;
  items: Array<{
    icon: any;
    iconComponent: React.ElementType;
    title: string;
    description?: string;
  }>;
}) => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    {items.map((item, index) => (
      <View key={index} style={styles.listItem}>
        <item.iconComponent
          name={item.icon}
          size={24}
          color="#007AFF"
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          {item.description && (
            <Text style={styles.itemDescription}>{item.description}</Text>
          )}
        </View>
      </View>
    ))}
  </View>
);

export default function AppsScreen() {
  const workItems = [
    {
      icon: "checkcircle",
      iconComponent: AntDesign,
      title: "Approve Now",
      description: "Approval workflow system",
    },
    {
      icon: "gift",
      iconComponent: AntDesign,
      title: "Reward",
      description: "Employee recognition program",
    },
    {
      icon: "warning",
      iconComponent: AntDesign,
      title: "Discipline",
      description: "Policy compliance portal",
    },
    {
      icon: "book",
      iconComponent: AntDesign,
      title: "Learning",
      description: "E-learning platform",
    },
  ];

  const utilitiesItems = [
    {
      icon: "heart",
      iconComponent: AntDesign,
      title: "FPT Care",
      description: "Employee support system",
    },
    {
      icon: "calendar",
      iconComponent: AntDesign,
      title: "Event",
      description: "Company events calendar",
    },
    {
      icon: "assignment",
      iconComponent: MaterialIcons,
      title: "Survey",
      description: "Employee feedback surveys",
    },
    {
      icon: "adduser",
      iconComponent: AntDesign,
      title: "FPT Dating",
      description: "Internal social platform",
    },
    {
      icon: "file1",
      iconComponent: AntDesign,
      title: "Payslip",
      description: "Salary and compensation details",
    },
    {
      icon: "gift",
      iconComponent: AntDesign,
      title: "Birthday",
      description: "Employee birthday calendar",
    },
  ];

  const newItems = [
    {
      icon: "notification",
      iconComponent: AntDesign,
      title: "News",
      description: "Company news and updates",
    },
    {
      icon: "rocket1",
      iconComponent: AntDesign,
      title: "Start Ave",
      description: "New employee onboarding portal",
    },
  ];

  const wikiItems = [
    {
      icon: "infocirlceo",
      iconComponent: AntDesign,
      title: "Employee Info",
      description: "Company directory and profiles",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainHeader}>All Apps</Text>

      <SectionList title="WORK" items={workItems} />
      <SectionList title="UTILITIES" items={utilitiesItems} />
      <SectionList title="NEW" items={newItems} />
      <SectionList title="WIKI" items={wikiItems} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 16,
  },
  sectionContainer: {
    marginVertical: 8,
  },
  sectionHeader: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: "#666",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: "#666",
  },
});

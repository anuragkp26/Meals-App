import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";

// import { useNavigation } from "@react-navigation/native";
// import { useRoute } from "@react-navigation/native";

function CategoryGridTile({ title, color, onPress }) {

  // const navigation = useNavigation();
  // const route = useRoute();

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: Colors.ripple }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "Black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

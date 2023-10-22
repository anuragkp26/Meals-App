import { StyleSheet, View, Text, Pressable, Image, Platform } from "react-native";
import Colors from "../constants/colors";
import MealInfo from "./MealInfo";

function MealItem({ title, imageUrl, duration, complexity, affordability, onPress }) {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        android_ripple={{color: Colors.ripple}}
        style={({pressed}) => [ pressed ? styles.pressed : null] }
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
            
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>

          <MealInfo duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginHorizontal: 14,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',

  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});

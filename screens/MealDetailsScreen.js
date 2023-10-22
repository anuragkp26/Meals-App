import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealInfo from "../components/MealInfo";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/FavoriteStore";

function MealDetailsScreen({ navigation, route }) {
  //const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteReducer.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const meal = MEALS.find((it) => it.id === mealId);

  //const isFaforite = favoriteMealsCtx.ids.includes(mealId);
  const isFaforite = favoriteMealIds.includes(mealId);

  function menuClickHandler() {
    if (isFaforite) {
      //favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      //favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      //title: meal.title,
      headerRight: () => {
        return (
          <IconButton
            icon={isFaforite ? "star" : "star-outline"}
            color={isFaforite ? "yellow" : "white"}
            onPress={menuClickHandler}
          />
        );
      },
    });
  }, [mealId, menuClickHandler]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.rootScreen}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealInfo
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>

          {meal.ingredients.map((ingredient) => {
            return (
              <View key={ingredient}>
                <Text style={styles.bodytText}>{ingredient}</Text>
              </View>
            );
          })}

          <Text style={styles.subtitle}>Steps</Text>

          {meal.steps.map((step) => {
            return (
              <View key={step}>
                <Text style={styles.bodytText}>{step}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
  subtitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    borderBottomWidth: 2,
  },
  infoContainer: {
    width: "100%",
    margin: 16,
    padding: 16,
  },
  bodytText: {
    fontSize: 14,
    padding: 4,
  },
});

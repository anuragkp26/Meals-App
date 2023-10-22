import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";



function FavoriteMealsScreen({ navigation, route }) {

    //const favoriteMealsCtx = useContext(FavoritesContext)
    //const favList = MEALS.filter(it => favoriteMealsCtx.ids.includes(it.id))

    const favoriteMealIds = useSelector((state) => state.favoriteReducer.ids)
    const favList = MEALS.filter(it => favoriteMealIds.includes(it.id))

    if(favList.length == 0){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>No favorite meals yet</Text>
        </View>
    }

    return <MealList mealList={favList}/>
    
  
}

export default FavoriteMealsScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray'
    }
  });



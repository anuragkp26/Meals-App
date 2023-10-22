import { useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

function MealsScreen({ navigation, route }) {

  const catId = route.params.categoryId;

  const mealsItems = MEALS.filter((it) => it.categoryIds.indexOf(catId) > -1)

  
  //execute before component render
  useLayoutEffect(() => {

    const catTitle = CATEGORIES.find((it) => it.id === catId).title;

    navigation.setOptions({
      title: catTitle
    })
  }, [catId, navigation])

  

  // function renderMealItem(itemData){

  //   const item = itemData.item
  //   const mealProps = {
  //     title : item.title,
  //     imageUrl: item.imageUrl,
  //     duration: item.duration,
  //     complexity: item.complexity,
  //     affordability: item.affordability
  //   }

  //   function pressHandler() {
  //     navigation.navigate('Details', { mealId: item.id});
  //   }

  //   return <MealItem {...mealProps} onPress={pressHandler}/>
  // }


  // return (
  //   <View style={styles.rootContainer}>
  //     <FlatList 
  //       data={mealsItems}
  //       keyExtractor={(item, Index) => item.id}
  //       showsVerticalScrollIndicator = {false}
  //       renderItem={renderMealItem}
  //     />
  //   </View>
  // );

  return <MealList mealList={mealsItems}/>
}

export default MealsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

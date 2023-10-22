import { useLayoutEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {


  function menuHandler(){
    navigation.toggleDrawer()
  }

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerLeft: () =>{
        return  <Ionicons name="menu" size={24} color="white" style={{marginLeft: 15,}} onPress={menuHandler} />
      },
    })
  }, [])

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate(
        "Meals", 
        { 
          categoryId: itemData.item.id,
          categoryTitle: itemData.item.title
        }
      );
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item, index) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    //backgroundColor: "#91e2d5",
  },
});

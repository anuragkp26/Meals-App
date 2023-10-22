import MealItem from "./MealItem";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";


function MealList({mealList}){

    const navigation = useNavigation()

    function renderMealItem(itemData){

        const item = itemData.item
        const mealProps = {
          title : item.title,
          imageUrl: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability
        }
    
        function pressHandler() {
          navigation.navigate('Details', { mealId: item.id});
        }
    
        return <MealItem {...mealProps} onPress={pressHandler}/>
      }
    
    
      return (
        <View style={styles.rootContainer}>
          <FlatList
            data={mealList}
            keyExtractor={(item, Index) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={renderMealItem}
          />
        </View>
      );

}

export default MealList;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
  });
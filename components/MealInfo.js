import { StyleSheet, View, Text } from "react-native";

function MealInfo({duration, complexity, affordability}) {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
    );
}

export default MealInfo;

const styles = StyleSheet.create({
    infoContainer: {
        width: '100%',
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      detailItem: {
        fontSize: 12,
        marginHorizontal: 4,
      },
});
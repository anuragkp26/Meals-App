import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import FavoriteMealsScreen from "./screens/FavoriteMealsScreen";
import Colors from "./constants/colors";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FavoritesContextProvider from "./store/context/favorites-context";
import { Store } from "./store/redux/Store";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#d57730",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: Colors.background,
              },
            }}
          >
            {/* <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "Meal App",
            }}
          /> */}

            <Stack.Screen
              name="MealApp"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Meals"
              component={MealsScreen}
              // options={({route, navigation}) => {
              //   return {
              //     title: route.params.categoryTitle
              //   }
              // }}
            />

            <Stack.Screen name="Details" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      //useLegacyImplementation={true}
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#d57730",
        },
        headerTintColor: "white",
        drawerStyle: {
          backgroundColor: Colors.primary,
        },
        //drawerActiveBackgroundColor: Colors.background,
        drawerActiveTintColor: "#d57730",
        drawerInactiveTintColor: "gray",
        sceneContainerStyle: {
          backgroundColor: "white", // screen background
        },
        drawerContentStyle: {
          backgroundColor: "white", //drawer background
        },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={BottomNavigator}
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Favorite"
        component={FavoriteMealsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function BottomNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#d57730",
        },
        headerTintColor: "white",
        tabBarActiveTintColor: "#d57730",
        tabBarInactiveTintColor: "gray",
        tabBarIconStyle: {},
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

import React from "react";
import { createAppContainer } from "react-navigation"; //🧩🧩[CONNECTIONS]🧩🧩
import { createStackNavigator } from "react-navigation-stack"; //🧩🧩[CONNECTIONS]🧩🧩 importing the Navigation
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index", //🧩🧩[CONNECTIONS]🧩🧩 this represents the initial route that will be displayed from the start when we first open the App
    defaultNavigationOptions: {
      title: "Blogs",
    }, //🧩🧩[CONNECTIONS]🧩🧩 this will be our 'title' that will be displayed on all our pages, on our App when is opened
  }
); //🧩🧩[CONNECTIONS]🧩🧩

const App = createAppContainer(navigator); //🧩🧩[CONNECTIONS]🧩🧩inside of this 'createAppContainer' we pass the 'navigator' wich contains all our App files, in this way we wrap our App inside of the React Navigation

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  ); //🧩🧩[CONNECTIONS]🧩🧩
};

import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );
  }
}

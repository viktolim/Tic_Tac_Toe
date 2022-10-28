import React from "react";
import { View, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import EnterNameScreen from "./src/screens/EnterNameSreen";
import { PlayersProvider } from "./src/context/PlayersContext";
import { GridProvider } from "./src/context/GridContext";
import { createStackNavigator } from "react-navigation-stack";
import ChooseGridScreen from "./src/screens/ChooseGridSreen";
import GameScreen from "./src/screens/GameScreen";
import GameContext, { GameProvider } from "./src/context/GameContext";
import { setNavigator } from "./src/navigate";
const switchNavigator = createSwitchNavigator({
  playScreen: createStackNavigator({
    EnterNameScreen: EnterNameScreen,
    ChooseGridScreen: ChooseGridScreen,
  }),
  GameScreen: () => (
    <GameProvider>
      <GameScreen />
    </GameProvider>
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <PlayersProvider>
      <GridProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </GridProvider>
    </PlayersProvider>
  );
};

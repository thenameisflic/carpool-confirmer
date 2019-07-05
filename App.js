import React from 'react';
import AppNavigator from "./components/AppNavigator";
import { createAppContainer } from "react-navigation";

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <AppContainer />
  );
};

export default App;

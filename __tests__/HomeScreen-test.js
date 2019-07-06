import "react-native";
import React from "react";
import HomeScreen from "../components/screens/HomeScreen";
import { TouchableOpacity } from "react-native";

import renderer from "react-test-renderer";

jest.mock("react-native-location", () => ({requestPermission: () => {}, configure: () => {}}))

it("renders HomeScreen correctly", () => {
  const tree = renderer.create(<HomeScreen navigation={{navigate: ""}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("navigates to correct screen when clicking on a TouchableOpacity", () => {
  const navigateMock = jest.fn();
  const instance = renderer.create(<HomeScreen navigation={{navigate: navigateMock}} />);
  const driverBtn = instance.root.findAllByType(TouchableOpacity)[0];
  const passengerBtn = instance.root.findAllByType(TouchableOpacity)[1];
  driverBtn.props.onPress();
  passengerBtn.props.onPress();
  expect(navigateMock).toBeCalledWith(expect.stringMatching("Driver"));
  expect(navigateMock).toBeCalledWith(expect.stringMatching("Passenger"));
});

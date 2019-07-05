import "react-native";
import React from "react";
import PassengerScreen from "../components/screens/PassengerScreen";

import renderer from "react-test-renderer";

jest.mock("react-native-qrcode-scanner", () => "QRCodeScanner");
jest.mock("react-native-location", () => ({}));

it("renders PassengerScreen correctly", () => {
  const tree = renderer.create(<PassengerScreen navigation={{navigate: ""}} />);
  expect(tree.toJSON()).toMatchSnapshot();
});

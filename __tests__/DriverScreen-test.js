import "react-native";
import React from "react";
import DriverScreen from "../components/screens/DriverScreen";

import renderer from "react-test-renderer";
import { mockFetch, createResetAction } from "../utils";

it("renders DriverScreen correctly", () => {
  const tree = renderer.create(<DriverScreen navigation={{navigate: ""}} />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it("doesn't let the user proceed if the passenger hasn't already scanned the code", () => {
    fetch = jest.fn(() => mockFetch({
        passengerScanned: false
    }));
    const navigate = jest.fn();
    const instance = renderer.create(<DriverScreen navigation={{navigate}} />);
    const button = instance.root.findByProps({title: "Continuar"});
    button.props.onPress();
    expect(fetch).toBeCalled();
    expect(navigate).not.toHaveBeenCalled();
});
  
test("navigates away if the user has scanned the code", async () => {
    fetch = jest.fn(() => mockFetch({
        passengerScanned: true,
        id: 1,
        driverPosition: "-10,-10",
        passengerPosition: "-10,-10",
        distance: 10
    }));
    const dispatch = jest.fn();
    const instance = renderer.create(<DriverScreen navigation={{dispatch}} />);
    const button = instance.root.findByProps({title: "Continuar"});
    button.props.onPress();
    await((await fetch()).json());
    expect(dispatch).toBeCalledWith(expect.objectContaining(createResetAction({
        routeName: "ShareLocation",
        params: expect.objectContaining({
            driverPosition: "-10,-10",
            passengerPosition: "-10,-10",
            distance: 10,
            role: "DRIVER"
        })
    })));
});
  
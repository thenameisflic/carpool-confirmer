import "react-native";
import React from "react";
import Button from "../components/ui/Button";
import Title from "../components/typography/Title";
import Body from "../components/typography/Body";

import renderer from "react-test-renderer";

it("renders Buttons correctly", () => {
  const title = "Test Button";
  const tree = renderer.create(<Button title={title} />).toJSON();
  expect(tree.children[0].children[0]).toEqual(title);
  expect(tree).toMatchSnapshot();
});

it("renders Titles correctly", () => {
  const title = "Test Title";
  const tree = renderer.create(<Title>{title}</Title>).toJSON();
  expect(tree.children[0]).toEqual(title);
  expect(tree).toMatchSnapshot();
});

it("renders Body correctly", () => {
  const title = "Test Body";
  const tree = renderer.create(<Body>{title}</Body>).toJSON();
  expect(tree.children[0]).toEqual(title);
  expect(tree).toMatchSnapshot();
});

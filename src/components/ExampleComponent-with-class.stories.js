import React from "react";
import ExampleClassComponent from "./ExampleComponent-with-class";

export default {
  title: "Example/ClassComponent",
  component: ExampleClassComponent,
};

const Template = (args) => <ExampleClassComponent {...args} />;

export const ExampleOne = Template.bind({});
ExampleOne.args = {
  PropertyA: "I am a storybook arg passed as a prop to the component",
  PropertyB: 233,
};

export const ExampleTwo = Template.bind({});
ExampleTwo.args = {
  PropertyA: "Another String",
  PropertyB: 55,
  PropertyC: ["String one", "String Two"],
};

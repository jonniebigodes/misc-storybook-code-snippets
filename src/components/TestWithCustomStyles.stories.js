import React from "react";

import TestWithCustomStyles from "./TestsWithCustomStyles";

export default {
  component: TestWithCustomStyles,
  title: "Example/TestWithCustomStyles",
};

export const CustomStylesExample = (args, context) => {
  const { viewMode } = context;
  const {globals,}= context
  console.log(`CustomStylesExample viewMode:${viewMode}`);
  console.log(`CustomStylesExample globals:${JSON.stringify(globals,null,2)}`);
  return <TestWithCustomStyles {...args} />;
};

CustomStylesExample.args = {
  propertyA: "La la la",
};




import React from "react";

/* export const decorators = [
  (Story, context) => {
    const { viewMode } = context;
    console.log(`viewMode value:${viewMode}`);
    if (viewMode === "canvas") {
      return (
        <div style={{ border: "0.3rem solid tomato", margin: "3rem" }}>
          <Story />
        </div>
      );
    }
    return <Story />;
  },
]; */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

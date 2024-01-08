import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({
  children,
  isDarkBackground,
  bgImage,
  ...boxProps
}) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      background={bgImage ? `url(${bgImage})` : "none"} // Set the background image
      // backgroundSize="cover" // Cover the entire section
      // backgroundRepeat="no-repeat"
      // backgroundPosition="center center"
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;

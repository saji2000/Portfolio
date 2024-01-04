import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sajad!";
const bio1 = "A Full-Stack developer";
const bio2 = "specialised in React.js and Node.js";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        name="Sajad"
        src="https://media.licdn.com/dms/image/D5635AQHmtYRtACb8HA/profile-framedphoto-shrink_400_400/0/1695841973114?e=1705010400&v=beta&t=JeJsicbyBHOu87wydsKZdx_afIbwXN3C13FBbOzRjcY"
        size="2xl"
      ></Avatar>
      <Heading size="md">{greeting}</Heading>
      <Heading size="2xl">{bio1}</Heading>
      <Heading size="2xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

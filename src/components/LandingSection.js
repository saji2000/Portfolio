import React from "react";
import {
  Avatar,
  Heading,
  VStack,
  HStack,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting =
  "Hello, I am Sajad! A Full-Stack developer, specialised in React.js and Node.js";
const bio1 = "";
const bio2 = "";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    // backgroundColor="#2A4365"
    bgImage={require("../images/dark.jpg")} // URL of your background image
    w="80%"
  >
    <VStack>
      <Avatar
        name="Sajad"
        src="https://media.licdn.com/dms/image/D5635AQHmtYRtACb8HA/profile-framedphoto-shrink_400_400/0/1695841973114?e=1705010400&v=beta&t=JeJsicbyBHOu87wydsKZdx_afIbwXN3C13FBbOzRjcY"
        size="2xl"
      ></Avatar>
      <Heading size="md">{greeting}</Heading>
      {/* <Heading size="xl">{bio1}</Heading>
      <Heading size="xl">{bio2}</Heading> */}
      <Heading size="lg" mt="10px">
        👨🏻‍🎓 Education:
      </Heading>
      <Text fontSize="lg">
        Bachelor of Applied Sciences in Software Engineering - University of
        Alberta - Sept 2018 – April 2023
      </Text>

      <Heading size="lg" mt="20px">
        💻 Skills:
      </Heading>
      <Text fontSize="lg">
        JavaScript, React.js, Node.js, Python, Django, Java, C/C++, Front-End,
        Back-End, SQLite3, MongoDB, MySQL, AWS, DynamoDB, S3, EC2, Firebase,
        GitHub, Scrum, Agile, Software Development Life Cycle (SDLC), Jira,
        Trello, Slack.
      </Text>
      <HStack spacing={4}>
        {" "}
        {/* Use HStack to create a horizontal layout */}
        <a href="https://www.javascript.com" target="_blank">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="60"
            height="60"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="reactjs"
            width="60"
            height="60"
          />
        </a>
        <a href="https://nodejs.org/en/" target="_blank">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
            alt="nodejs"
            width="60"
            height="60"
          />{" "}
        </a>
        <a href="https://www.aws.com/" target="_blank">
          {" "}
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-aws-1869025-1583149.png?f=webp&w=512"
            alt="aws"
            width="60"
            height="60"
          />{" "}
        </a>
        <a href="https://www.mysql.com/" target="_blank">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            alt="mysql"
            width="60"
            height="60"
          />{" "}
        </a>
        <a href="https://www.mongodb.com/" target="_blank">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
            alt="mongodb"
            width="60"
            height="60"
          />{" "}
        </a>
        <a href="https://www.python.org" target="_blank">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="python"
            width="60"
            height="60"
          />{" "}
        </a>
        <a href="https://www.cprogramming.com/" target="_blank">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            alt="c"
            width="60"
            height="60"
          />{" "}
        </a>
        <a href="https://www.cplusplus.com/" target="_blank">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="c++"
            width="60"
            height="60"
          />{" "}
        </a>
        <a href="https://www.java.com" target="_blank">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="java"
            width="60"
            height="60"
          />{" "}
        </a>
        <a href="https://www.tensorflow.org" target="_blank">
          {" "}
          <img
            src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
            alt="tensorflow"
            width="60"
            height="60"
          />{" "}
        </a>
        <a href="https://git-scm.com/" target="_blank">
          {" "}
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width="60"
            height="60"
          />{" "}
        </a>
      </HStack>
      <Heading size="lg" mt="20px">
        👨🏻‍💻 Work Expereince:
      </Heading>
      <Text fontSize="xl">
        CEO & Co-Founder – Maple Dating Inc. – Oct 2018 – Dec 2023
      </Text>
      <UnorderedList spacing={3}>
        <ListItem fontSize="lg">
          Contributed to the development of a mobile application, integrating
          Node.js, Firebase, MySQL, MongoDB for backend and Flutter for
          frontend, with Figma for innovative UI/UX design.
        </ListItem>
        <ListItem fontSize="lg">
          Formed and guided a team of 7 accomplished professionals, fostering a
          collaborative atmosphere conducive to innovation and a heightened
          commitment to quality enhancement.
        </ListItem>
        <ListItem fontSize="lg">
          Achieved a 40% reduction in server costs through data-driven
          optimizations, improving financial efficiency.
        </ListItem>
        <ListItem fontSize="lg">
          Served as Scrum Master, using agile methodologies and facilitating
          efficient team collaboration and problem-solving.
        </ListItem>
        <ListItem fontSize="lg" mb="30px">
          Conducted regular team meetings to review project progress, and
          delegate tasks, ensuring a project's lifecycle.
        </ListItem>
      </UnorderedList>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

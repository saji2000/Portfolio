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

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    backgroundColor="#F3F3F3"
    justifyContent="center"
    alignItems="center"
    w="90%"
  >
    <VStack>
      <Avatar
        name="Sajad"
        src={require("../images/Sajad.jpeg")}
        size="2xl"
      ></Avatar>
      <Heading size="md">{greeting}</Heading>
      <Heading size="lg" mt="10px">
        👨🏻‍🎓 Education:
      </Heading>
      <Text fontSize="lg">
        Bachelor of Applied Sciences in Software Engineering | University of
        Alberta | Sept 2018 – April 2023
      </Text>

      <Heading size="lg" mt="20px">
        💻 Skills:
      </Heading>
      <Text fontSize="lg">
        JavaScript, React.js, Next.js, Node.js, Express.js, Next.js, TypeScript,
        MUI, Python, Django, Java, C/C++, PHP, Front-End, Back-End, NoSQL, SQL
        SQLite3, MongoDB, MySQL, AWS, DynamoDB, S3, EC2, Firebase, CI/CD, REST
        APIs. GitHub, Scrum, Agile, Software Development Life Cycle (SDLC),
        Jira, Trello, Slack.
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
        Backend Developer & CEO | Maple | May 2021 - Feb 2024
      </Text>
      <UnorderedList spacing={3}>
        <ListItem fontSize="lg">
          Designed and optimized databases using Node.js with MongoDB, MySQL,
          and Firebase, enhancing query performance.
        </ListItem>
        <ListItem fontSize="lg">
          Collaborated on user authentication, security, and REST APIs using
          Node.js/Express.js for improved user experience.
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

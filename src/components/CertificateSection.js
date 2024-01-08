import React from "react";
import {
  Heading,
  VStack,
  Text,
  ListItem,
  UnorderedList,
  HStack,
  Box,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import GitHubCalendar from "react-github-calendar";

const CertificateSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    // backgroundColor="#2b2b2b"
    bgImage={require("../images/dark-purple.jpg")}
    w="90%"
  >
    <VStack justifyContent="center" alignItems="center">
      <Heading size="lg" mt="10px" id="certificates-section">
        📚 Certifcates:
      </Heading>
      <HStack spacing={4}>
        <img alt="Meta" src={require("../images/Meta.png")} />
        <Text fontSize="xl" ml="20px">
          Advanced React by Meta
        </Text>
        <UnorderedList spacing={3}>
          <ListItem fontSize="lg">
            Acquired a solid understanding of React.js and Front-End
            fundamentals, including practical knowledge of state management,
            hooks, fetching APIs and testing in addition to creating a portfolio
            website.
          </ListItem>
        </UnorderedList>
        <iframe
          src={require("../images/Advanced React.pdf")}
          height="200"
          width="300"
        ></iframe>
      </HStack>
      <HStack spacing={4}>
        <img
          alt="Stanford"
          src={require("../images/Stanford.png")}
          width="150px"
          height="150px"
        />
        <Text fontSize="xl" ml="20px">
          Supervised Machine Learning
        </Text>
        <UnorderedList spacing={3}>
          <ListItem fontSize="lg">
            Proficient in supervised ML techniques, regression, classification,
            and practical Python implementation using scikit-learn and NumPy,
            addressing underfitting and overfitting.
          </ListItem>
        </UnorderedList>
        <iframe
          src={require("../images/Supervised Machine Learning.pdf")}
          height="200"
          width="300"
        ></iframe>
      </HStack>
      <Heading size="lg" mt="10px" mb="20px">
        📈 GitHub Stats:
      </Heading>
      <HStack justifyContent="center" alignItems="center">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=saji2000&layout=compact&theme=radical&langs_count=6&hide=html,Makefile&exclude_repo=leetcode"
          alt="Sajad's GitHub Language Stats"
          mr="40px"
        />
        {/* <img
          src="https://github-readme-stats.vercel.app/api?username=saji2000&show_icons=true&include_all_commits=true&theme=radical"
          alt="Sajad's GitHub Stats"
        /> */}
        <div
          style={{
            backgroundColor: "#141321",
            padding: "20px",
            borderRadius: "5px",
            borderColor: "#e4e2e3",
            borderWidth: "1px",
          }}
        >
          <GitHubCalendar username="saji2000" />
        </div>

        {/* <img src="https://github-readme-stats.vercel.app/api?username=saji2000&show_icons=true&theme=radical" /> */}
      </HStack>
    </VStack>
  </FullScreenSection>
);

export default CertificateSection;

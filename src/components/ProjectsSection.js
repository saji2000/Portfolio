import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Weather App",
    description:
      "City Weather Dashboard is a React.js app providing real-time global weather updates using GeoDB Cities and OpenWeather APIs deployed on AWS S3, perfect for timely info on multiple locations.",
    getImageSrc: () => require("../images/weather-images.jpg"),
    link: "http://sajad-portfolio.s3-website.us-east-2.amazonaws.com/",
  },
  {
    title: "Maple",
    description:
      "A complex dating mobile application which uses Node.js, MySQL, Firebase for the back-end and Flutter for front-end, published on both iOS and Android.",
    getImageSrc: () => require("../images/maple-logo.png"),
    link: "https://maple.dating",
  },
  {
    title: "UEvents",
    description:
      "An event planning tool for University of Alberta students and groups developed using Node.js, Express.js, DynamoDB, EC2, S3 for the back-end and React.js and Material UI for front-end.",
    getImageSrc: () => require("../images/UEvents.png"),
    link: "https://github.com/ECE493-Group11-UEvents/UEvents-API",
  },
  {
    title: "Social Network",
    description:
      "Social networking application created by React.js and MUI (Material UI), has features such as navigation bar, side bars, feed, posts, dark theme and etc.",
    getImageSrc: () => require("../images/logo.png"),
    link: "http://sajad-social-network.s3-website.us-east-2.amazonaws.com",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#1A1A1A"
      // bgImage={require("../images/dark-pink.jpg")}
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

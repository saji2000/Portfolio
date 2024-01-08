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
    title: "Edmonton OSM",
    description:
      "Developed a SQLite3 database using Python for Edmonton's OpenStreetMap data. Focused on extracting specific details like restaurant names, park accessibility, and locations.",
    getImageSrc: () => require("../images/OSM.png"),
    link: "https://github.com/saji2000/Edmonton-OSM",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      // backgroundColor="#14532d"
      bgImage={require("../images/dark-pink.jpg")}
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

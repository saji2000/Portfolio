import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  link = "https://github.com/";

  return (
    <HStack>
      <VStack backgroundColor="white" borderRadius="md" spacing="20px">
        <Image src={imageSrc} alt="project-image" borderRadius="md"></Image>
        <Heading color="black">{title}</Heading>
        <Text color="gray" m="8px">
          {description}
        </Text>
        <HStack color="black" mb="10px">
          <a href={link}>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Card;

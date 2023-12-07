import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import CardWrapper from "./CardWrapper";

const skills = [
  {
    title: "Frontend",
    description:
      "HTML5, CSS3, ReactJS, Chakra UI, Vite, React Redux",
  },
  {
    title: "Backend",
    description:
      "NodeJS, Express.js",
  },
  {
    title: "Database",
    description:
      "Firebase, MongoDB",
  },
];

const ResumeSection = () => {
  return (
    <FullScreenSection
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="resume-section" pt={8}>
        Developer Skills
      </Heading>
      <Flex
        minH='30vh' 
        justifyContent="center"
        alignItems="center" >
        <Box
          display="grid"
          gridTemplateColumns={{ base: 'repeat(2,minmax(0,1fr))', md: 'repeat(3,minmax(0,1fr))' }}
          gridGap={{ base: '6', md: '12' }}
        >
          {skills.map((skill) => (
            <CardWrapper 
              p={6}
              key={skill.title}>
              <Heading as="h4" fontSize='xl' pb={4}>
                {skill.title}
              </Heading>
              <Text>
                {skill.description}
              </Text>
            </CardWrapper>
          ))}
        </Box>
      </Flex>
    </FullScreenSection>
  )
}

export default ResumeSection
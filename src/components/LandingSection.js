import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { Text } from '@chakra-ui/react'

const greeting = "Hello, I am Xo'janazar!";
const bio1 = "Full Stack Developer";
const bio2 = "I am a Junior FullStack Developer. So far I have been working on smaller and easier projects. My goal is to get a job in a big company and work with a big team in the future.";
const avatar = "https://avatars.githubusercontent.com/u/85152499?v=4"

// Implement the UI for the LandingSection component according to the instructions. 
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
  >
    <VStack maxW={600}>
      
      <Avatar
        size='2xl'
        name="Xo'janazar Hayitboyev"
        src={avatar}
      />
      
      <Text
        fontSize='xl'
        >
        {greeting}
      </Text>
      
      <Heading 
        as='h1' 
        size='2xl' 
        noOfLines={1}>
        {bio1}
      </Heading>
      
      <Text 
        fontSize='lg'
        align='center'
        >
        {bio2}
      </Text>
    
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

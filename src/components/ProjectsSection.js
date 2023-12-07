import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projectsHighlighted = [
  {
    title: "Instagram Clone",
    url: "https://instagram-react-firebase.netlify.app",
    description:
      "This is a small clone of the popular Instagram app. I used ReactJs framework, Vite library and Chakra libraries to make this. I preferred Firebase for the database.",
    getImageSrc: () => require("../images/instagram.png"),
    tags: ['React','Vite','Firebase', 'Chakra UI']
  },
  {
    title: "Dropbox Clone",
    url: "https://https://dropboxreactjsapp.netlify.app/",
    description:
      "This is a Dropbox Clone designed to look like the real Dropbox App. You can upload, create and delete files and folders.",
    getImageSrc: () => require("../images/dropbox.png"),
    tags: ['React','Mui Materials','Redux','Firebase']
  },
  {
    title: "Pokemon App",
    url: "https://reactjs-pokemon-app.netlify.app/",
    description:
      "Turned static website into Content Managment System using Sanity Studio for Ideal Properties Group - a trusted listing pipeline for unique property finds in New York.",
    getImageSrc: () => require("../images/pokemon.png"),
    tags: ['React','Pokemon API']
  },
]

const projects = [
  {
    title: "Calculator App",
    url: "https://hayitboyev-reactjs-calculator.netlify.app/",
    description:
      "Turned static website into Content Managment System using Sanity Studio for Ideal Properties Group - a trusted listing pipeline for unique property finds in New York.",
    getImageSrc: () => require("../images/calculator.png"),
    tags: ['React']
  }
];

const ProjectsSection = () => {

  const cardsLoop = (projects, size) => {
    return (
      projects.map((project) => (
          <Card
            size={size}
            key={project.title}
            title={project.title}
            tags={project.tags}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))
    )
  }
  
  return (
    <FullScreenSection
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" pt={8}>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: 'repeat(1,minmax(0,1fr))', md: 'repeat(3,minmax(0,1fr))' }}
        gridGap={8}
      >
          {cardsLoop(projectsHighlighted)}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{ base: 'repeat(1,minmax(0,fr))', md: 'repeat(4,minmax(0,1fr))' }}
        gridGap={4}
      >
        {cardsLoop(projects, 'small')}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
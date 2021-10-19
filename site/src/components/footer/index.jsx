import { Box, Button, Icon, Link as ChakraLink, Text } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa"

import { MAX_WIDTH } from "config"

// Fell free to add your social media accounts!
const socialAccounts = [
  { icon: "teste", path: "https://github.com/", title: "Github" },
  { icon: "teste", path: "https://www.linkedin.com/", title: "Linkedin" },
  { icon: "teste", path: "https://www.instagram.com/", title: "Instagram" },
]

const Footer = () => (
  <>
    <Box as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Box py="2">
          {socialAccounts.map((item, index) => (
            <ChakraLink
              href={item.path}
              aria-label={item.title}
              mx="2"
              _focus={{ outline: "none" }}
              key={index}
              isExternal
            >
              <Button aria-label={item.title}>
                <Icon as={item.icon} w="6" h="6" />
              </Button>
            </ChakraLink>
          ))}
        </Box>
      </Box>
    </Box>
  </>
)

export default Footer

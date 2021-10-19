import { chakra } from "@chakra-ui/react"
import NextLink from "next/link"
import NextImage from "next/image"

const Logo = () => (
  <>
    <NextLink href="/" passHref>
      <NextImage
          src="/logoSolidariedade.jpg"
          width="200"
          height="50"
          alignItems="center"
        />
    </NextLink>
  </>
)

export default Logo

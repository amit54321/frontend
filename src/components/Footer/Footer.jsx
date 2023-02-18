import {
  Box,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaGooglePlay,
} from "react-icons/fa";
import { FcPrivacy } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href, color }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      color={color}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "0rem" }}>
      <Box color={useColorModeValue("black.700", "black.200")}>
        {/*   <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>
                <Image
                  src="https://images.dailyobjects.com/marche/icons/logo_named.png?tr=cm-pad_resize,v-2,w-135,h-27,dpr-1"
                  alt=""
                />
              </ListHeader>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact Us</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <br />
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Safety Center</Link>
              <Link href={"#"}>Community Guidelines</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <br />
              <Link href={"#"}>Cookies Policy</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
            </Stack>
          </SimpleGrid>
        </Container> */}
        <Box borderTopWidth={1} borderStyle={"solid"}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text>© 2023. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              {/* <SocialButton
                label={"Twitter"}
                href={"https://www.youtube.com/watch?v=33l5TNRUKdE"}
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"googlePlay"} href={"#"}>
                <FaGooglePlay />
              </SocialButton> */}
              <SocialButton label={"googlePlay"} href={"/privacyPolicy"}>
                <FcPrivacy />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;

import React from "react";
import { logo } from "../assets";
import { Heading, Image, Text, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router";


const Login = () => {
const navigate = useNavigate();

const handleLinkClick = (path) => {
    navigate(path);
};
  return (
    <Container bg="brand.300" w="full" h="100%" p="5" py="10">
      <Container
        align="center"
        p="5"
        py="100"
        h="70%"
        bg="#ffffff"
        rounded="3xl"
      >
        <Image src={logo} />
        <Heading fontSize="25px">Get rewarded for finishing your food!</Heading>
        <Text fontSize="18px" mt="2">
          Clean Bowl is bla bla bla bla
        </Text>
        <Container mt="9" bg="brand.300" w="80%" p="3" rounded="3xl" onClick={() => handleLinkClick("local")}>
          <Heading fontSize="21px" color="white">
            I'm a Local
          </Heading>
        </Container>
        <Container mt="3" bg="#1557BF" w="80%" p="3" rounded="3xl" onClick={() => handleLinkClick("tourist")}>
          <Heading fontSize="21px" color="white">
            I'm a Tourist
          </Heading>
        </Container>
      </Container>
    </Container>
  );
};

export default Login;

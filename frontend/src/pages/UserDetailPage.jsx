import React from "react";
import { Text, Stack, Avatar, Box, Heading, Button } from "@chakra-ui/react";
import styles from "../Styles/userDetail.module.css";

const UserDetailPage = () => {
  return (
    <div className={styles.profile}>
      <Box border={"1px solid black"} height={"40px"}></Box>
      <Stack pl={5} direction={"row"} spacing={5} align={"center"}>
        <Avatar
          size={"lg"}
          src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          alt={"Author"}
        />
        <Stack direction={"column"} spacing={2} fontSize={"sm"}>
          <Heading textAlign={"left"} fontWeight={400}>
            Achim Rolle
          </Heading>
          <Button
            height={"30px"}
            width={"260px"}
            bgColor={"#EFEFEF"}
            fontSize={"14px"}
          >
            Edit Profile
          </Button>
        </Stack>
      </Stack>
      <Stack pt={5} pl={5} textAlign={"left"}>
        <Box>
          <Text>Achim Role</Text>
          <Text>#however#</Text>
          <Text>First Love</Text>
        </Box>
      </Stack>
      <Stack
      mt={2}
        display={"flex"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        border= "1px solid rgb(219, 219, 219)"
      >
        <Box>
          <Text>4</Text>
          <Text>posts</Text>
        </Box>
        <Box>
          <Text>4</Text>
          <Text>posts</Text>
        </Box>
        <Box>
          <Text>4</Text>
          <Text>posts</Text>
        </Box>
      </Stack>
    </div>
  );
};

export default UserDetailPage;

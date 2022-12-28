import React from "react";
import {
  Text,
  Stack,
  Avatar,
  Box,
  Heading,
  Button,
  Icon,
} from "@chakra-ui/react";
import styles from "../Styles/userDetail.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { MdApps,MdOutlinePersonPin } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";

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
        border="1px solid rgb(219, 219, 219)"
      >
        <Box>
          <Text fontWeight={600}>4</Text>
          <Text color={"#8E8E8E"}>posts</Text>
        </Box>
        <Box>
          <Text fontWeight={600}>4</Text>
          <Text color={"#8E8E8E"}>posts</Text>
        </Box>
        <Box>
          <Text fontWeight={600}>4</Text>
          <Text color={"#8E8E8E"}>posts</Text>
        </Box>
      </Stack>
      <Stack>
        <Tabs colorScheme={"gray"} isFitted>
          <TabList>
            <Tab>
              <Icon color={"#8E8E8E"} boxSize={6} as={MdApps} />
              {/* <MdApps /> */}
            </Tab>
            <Tab>
              <Icon color={"#8E8E8E"} boxSize={5} as={BsBookmark} />
            </Tab>
            <Tab>
              <Icon color={"#8E8E8E"} boxSize={7} as={MdOutlinePersonPin}/>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </div>
  );
};

export default UserDetailPage;

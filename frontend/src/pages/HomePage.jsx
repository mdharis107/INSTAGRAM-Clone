import {
  Avatar,
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/HomePage.module.css";
import { BsSearch, BsHeartFill, BsHeart } from "react-icons/bs";
import { useState } from "react";

const HomePage = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <div className={styles.topBox}>
        <div>
          <Image
            w={"103px"}
            objectFit={"contain"}
            // border={"1px solid red"}
            bg={"transparent"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
            alt="instagramLogo"
          />
        </div>
        <div className={styles.rightBox}>
          <div>
            <InputGroup w={"110%"} borderColor="#E0E1E7">
              <InputLeftElement
                pointerEvents="none"
                children={<BsSearch color="#8E8E8E" />}
              />
              <Input
                bg={"#EFEFEF"}
                placeholder="Search"
                type="text"
                fontWeight={"100"}
              />
            </InputGroup>
          </div>
          <div>
            <Box
              p={4}
              alignItems="center"
              justifyContent={"space-between"}
              roundedBottom={"sm"}
              cursor="pointer"
              onClick={() => setLiked(!liked)}
            >
              {liked ? (
                <BsHeartFill fill="red" fontSize={"22px"} />
              ) : (
                <BsHeart fontSize={"22px"} />
              )}
            </Box>
          </div>
        </div>
      </div>

      <div className={styles.status}>
        <Box spacing={1} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Text fontSize={'12px'} fontWeight={400}>Achim Rolle</Text>
        </Box>
        <Box spacing={1} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Text fontSize={'12px'} fontWeight={400}>Achim Rolle</Text>
        </Box>
        <Box spacing={1} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Text fontSize={'12px'} fontWeight={400}>Achim Rolle</Text>
        </Box>
        <Box spacing={1} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Text fontSize={'12px'} fontWeight={400}>Achim Rolle</Text>
        </Box>
        <Box spacing={1} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Text fontSize={'12px'} fontWeight={400}>Achim Rolle</Text>
        </Box>
        <Box spacing={1} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Text fontSize={'12px'} fontWeight={400}>Achim Rolle</Text>
        </Box>
       
      </div>
    </div>
  );
};

export default HomePage;

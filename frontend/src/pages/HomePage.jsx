import {
  Avatar,
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/HomePage.module.css";
import {
  BsSearch,
  BsHeartFill,
  BsHeart,
  BsFillBookmarkFill,
  BsBookmark,
} from "react-icons/bs";
import { FiMessageCircle, FiSend } from "react-icons/fi";
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
          <Text fontSize={"12px"} fontWeight={400}>
            Achim Rolle
          </Text>
        </Box>
        <Box spacing={1} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Text fontSize={"12px"} fontWeight={400}>
            Achim Rolle
          </Text>
        </Box>
        <Box spacing={1} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Text fontSize={"12px"} fontWeight={400}>
            Achim Rolle
          </Text>
        </Box>
        <Box spacing={1} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Text fontSize={"12px"} fontWeight={400}>
            Achim Rolle
          </Text>
        </Box>
        <Box spacing={1} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Text fontSize={"12px"} fontWeight={400}>
            Achim Rolle
          </Text>
        </Box>

        {/* <Box spacing={1} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Text fontSize={"12px"} fontWeight={400}>
            Achim Rolle
          </Text>
        </Box> */}
      </div>

      <div className={styles.posts}>
        <Stack padding={"5px 10px"} direction={"row"} align={"center"}>
          <Avatar
            w={"40px"}
            h={"40px"}
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Box>
            <Text direction={"column"} fontSize={"12px"} fontWeight={600}>
              Achim Rolle
            </Text>
          </Box>
        </Stack>
        <Stack>
          <Image
            src="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </Stack>

        <Stack
          p={4}
          direction={"row"}
          justifyContent={"space-between"}
          align={"center"}
        >
          <Box display={"flex"} gap={"20px"}>
            <Box
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
            <Box>
              <FiMessageCircle fontSize={"24px"} />
            </Box>
            <Box>
              <FiSend fontSize={"22px"} />
            </Box>
          </Box>
          <Box cursor={"pointer"} onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsFillBookmarkFill fill="black" fontSize={"22px"} />
            ) : (
              <BsBookmark fontSize={"22px"} />
            )}
          </Box>
        </Stack>
      </div>
      <div className={styles.posts}>
        <Stack padding={"5px 10px"} direction={"row"} align={"center"}>
          <Avatar
            w={"40px"}
            h={"40px"}
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Box>
            <Text direction={"column"} fontSize={"12px"} fontWeight={600}>
              Achim Rolle
            </Text>
          </Box>
        </Stack>
        <Stack>
          <Image
            src="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </Stack>

        <Stack
          p={4}
          direction={"row"}
          justifyContent={"space-between"}
          align={"center"}
        >
          <Box display={"flex"} gap={"20px"}>
            <Box
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
            <Box>
              <FiMessageCircle fontSize={"24px"} />
            </Box>
            <Box>
              <FiSend fontSize={"22px"} />
            </Box>
          </Box>
          <Box cursor={"pointer"} onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsFillBookmarkFill fill="black" fontSize={"22px"} />
            ) : (
              <BsBookmark fontSize={"22px"} />
            )}
          </Box>
        </Stack>
      </div>

      {/* <div className={styles.bottomBox}>
        <Box>
          <MdHomeFilled fontSize={"26px"} />
        </Box>
        <Box>
          <ImCompass2 fontSize={"26px"} />
        </Box>
        <Box>
          <CgAddR fontSize={"26px"} />
        </Box>
        <Box>
          <AiOutlineMessage fontSize={"26px"} />
        </Box>
        <Box>
          <Avatar
            w={"30px"}
            h={"30px"}
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
        </Box>
      </div> */}
      {/* <BottomNavbar/> */}
    </div>
  );
};

export default HomePage;

import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import styles from "../Styles/BottomNav.module.css";
import { AiOutlineMessage } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import { ImCompass2 } from "react-icons/im";
import { CgAddR } from "react-icons/cg";
import { Link as ReachLink } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const BottomNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const [post, setPost] = useState({});
  const inputRef = useRef();
  const token = useSelector((state)=>state.AuthReducer.token);

  console.log(token, "token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData();

    // formData.append("title", post.title);
    // formData.append("caption", post.caption);
    // formData.append("location", post.location);
    // formData.append("image", inputRef.current.files[0]);

    // console.log(formData)
    const imageData = inputRef.current.files[0];

    const payload = {
      title: post.title,
      caption: post.caption,
      location: post.location,
      image:imageData,
    };

    axios
      .post("http://localhost:8000/post/addPost", payload, {
        headers: {
          Authorization: token,
          // "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className={styles.bottomBox}>
      <Box as={ReachLink} to="/">
        <MdHomeFilled fontSize={"26px"} />
      </Box>
      <Box>
        <ImCompass2 fontSize={"26px"} />
      </Box>
      <Box onClick={onOpen} _hover={{ bg: "none" }} bg={"none"} as={Button}>
        <CgAddR fontSize={"26px"} />
        {/* </Box> */}
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <form action="" onSubmit={handleSubmit}  >
              <ModalHeader>Create your Post</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="title"
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Select Post</FormLabel>
                  <input ref={inputRef} type="file" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Captions</FormLabel>
                  <Input
                    name="caption"
                    onChange={handleChange}
                    placeholder="Give some Captions"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Location</FormLabel>
                  <Input
                    name="location"
                    onChange={handleChange}
                    placeholder="Enter your location"
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button type="submit" variant="ghost">
                  SUBMIT
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </Box>
      <Box>
        <AiOutlineMessage fontSize={"26px"} />
      </Box>
      <Box as={ReachLink} to="/user">
        <Avatar
          w={"30px"}
          h={"30px"}
          src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          alt={"Author"}
        />
      </Box>
    </div>
  );
};

export default BottomNavbar;

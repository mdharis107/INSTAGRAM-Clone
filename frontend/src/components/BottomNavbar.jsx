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
import React, { useRef } from "react";
import styles from "../Styles/BottomNav.module.css";
import { AiOutlineMessage } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import { ImCompass2 } from "react-icons/im";
import { CgAddR } from "react-icons/cg";

const BottomNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  return (
    <div className={styles.bottomBox}>
      <Box as={'a'} href='/' >
        <MdHomeFilled fontSize={"26px"} />
      </Box>
      <Box>
        <ImCompass2 fontSize={"26px"} />
      </Box>
      {/* <Box ref={finalRef} tabIndex={-1} > */}
      <Box onClick={onOpen} _hover={{ bg: "none" }} bg={"none"} as={Button}>
        <CgAddR fontSize={"26px"} />
        {/* </Box> */}
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter your name" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Select Post</FormLabel>
                <input type="file"  />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Captions</FormLabel>
                <Input placeholder="Give some Captions" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input placeholder="Enter your location" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">SUBMIT</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Box>
        <AiOutlineMessage fontSize={"26px"} />
      </Box>
      <Box as={'a'} href="/user" >
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

import React, { useState } from "react";
import styles from "../Styles/Signup.module.css";
import {
  Box,
  Button,
  Divider,
  Image,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { Center, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../redux/auth/action";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(user);
    dispatch(signup(user))
      .then((res) => {
        alert(res.payload.msg)
        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className={styles.outbox}>
        <div className={styles.image_div}>
          <Image
            w={"174px"}
            m={"auto"}
            objectFit={"contain"}
            // border={"1px solid red"}
            bg={"transparent"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
            alt="instagramLogo"
          />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <Stack mt={"10px"}>
            <Box>
              <h3 className={styles.text}>
                Sign up to see photos and videos from your friends.
              </h3>
            </Box>
            <Box>
              <Button
                type="submit"
                _hover={{
                  bg: "#0095F6",
                }}
                bg={"rgb(0,149,246)"}
                h={"32px"}
                w={"100%"}
                color={"white"}
                leftIcon={<FaFacebook />}
              >
                <Center>
                  <Text>Log in with Facebook</Text>
                </Center>
              </Button>
            </Box>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              direction="row"
              h="100px"
              p={4}
            >
              <Divider border={"1px solid rgb(219, 219, 219)"} />
              <Text>Or</Text>
              <Divider border={"1px solid rgb(219, 219, 219)"} />
            </Stack>
            <Box>
              <Input
                name="email"
                onChange={handleChange}
                fontSize={"13px"}
                type={"email"}
                placeholder="Phone number, username, or email"
                borderRadius={0}
              />
            </Box>
            <Box>
              <Input
                name="name"
                onChange={handleChange}
                fontSize={"13px"}
                type={"text"}
                placeholder="Full Name"
                borderRadius={0}
              />
            </Box>
            <Box>
              <Input
                name="username"
                onChange={handleChange}
                fontSize={"13px"}
                type={"text"}
                placeholder="Username"
                borderRadius={0}
              />
            </Box>

            <Box>
              <Input
                name="password"
                onChange={handleChange}
                fontSize={"13px"}
                type={"password"}
                placeholder="Password"
                borderRadius={0}
              />
            </Box>
            <Box>
              <Button
                type="submit"
                _hover={{
                  bg: "#0095F6",
                }}
                bg={"#0095F6"}
                h={"32px"}
                w={"100%"}
                color={"white"}
              >
                Sign up
              </Button>
            </Box>
          </Stack>
        </form>
      </div>
      <div className={styles.bottom_box}>
        <p>
          Have an account?{" "}
          <Link color={"#0095F6"} _hover={{ textDecoration: "none" }}>
            Log in
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;

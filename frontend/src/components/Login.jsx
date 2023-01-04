import React from "react";
import styles from "../Styles/Login.module.css";
import { Box, Button, Image, Input, Link, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/action";

const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const token = useSelector((state) => console.log(state.AuthReducer))

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user))
    .then((res)=>{
      if(res.payload){
        alert("Login Successful")
      }
      else{
        alert("Login Failure")
      }
      // console.log(res.payload)
    })
      // console.log(token)
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
          <Stack pb={"15px"} mt={"10px"}>
            <Box>
              <Input
                name="username"
                onChange={handleChange}
                fontSize={"13px"}
                type={"text"}
                placeholder="Phone number, username, or email"
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
              >
                Log in
              </Button>
            </Box>
          </Stack>
        </form>
      </div>
      <div className={styles.bottom_box}>
        <p>
          Don't have an account?{" "}
          <Link color={"#0095F6"} _hover={{ textDecoration: "none" }}>
            Sign up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;

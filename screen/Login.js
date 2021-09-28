import React from "react";
import { Dimensions, ImageBackground, Input } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";

let Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`
let FormWrapper = styled.View`
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`
let Form = styled.View`
  width: 90%;
  height: 400px;
  background-color: black;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  justify-content: center;
`


const Login = () => {
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <ImageBackground
          source={{
            uri: "https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg",
          }}
          resizeMode="cover"
          style={{ flex: 1, height: Dimensions.get("window").height }}
        >
          <Overlay>
            <FormWrapper>
              <Form>
                <SignInText>Sign In</SignInText>
                <Input placeholder='Enter your email' placeholderTextColor='grey' />
                <Input placeholder='Enter your password' placeholderTextColor='grey' secureTextEntry />
                <SubmitForm>Sign In</SubmitForm>
                <NewToNetflixTextWrapper activeOpacity={0.5} >
                  <NewToNetflix>
                    New To Netflix ? Sign Up
                  </NewToNetflix>
                </NewToNetflixTextWrapper>
              </Form>
            </FormWrapper>
          </Overlay>
        </ImageBackground>
      </Container>
    </>
  );
};

export default Login;

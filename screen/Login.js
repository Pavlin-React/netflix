import React, { useState } from "react";
import { Dimensions, ImageBackground, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";

let Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;
let FormWrapper = styled.View`
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;
let Form = styled.View`
  width: 90%;
  height: 400px;
  background-color: black;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  justify-content: center;
`;
let SubmitForm = styled.TouchableOpacity`
  width: 95%;
  height: 50px;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #e7442e;
  color: white;
  margin-top: 20px;
`;
let ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5px;
  color: white;
`;
let SignInText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin: 10px;
  text-align: left;
`;
let NewToNetflixTextWrapper = styled.TouchableOpacity`
  width: 100%;
`;
let NewToNetflix = styled.Text`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #ccc;
  margin: 15px;
`;
let Overlay = styled.View`
  background-color: "rgba(0,0,0,0.5)";
  flex: 1;
`;
let Input = styled.TextInput`
  width: 95%;
  height: 50px;
  border: none;
  padding: 10px;
  border-radius: 15px;
  background-color: #333333;
  color: white;
  margin-top: 10px;
`;

const Login = ({ navigation }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);

  let login = () => {
    setLoading(true);

    if (!email || !password) {
      alert("All fields are mandatory");
      setPassword("");
      setEmail("");
      setLoading(false);
      return;
    }
    auth.signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        navigation.replace("Register");
        setPassword("");
        setEmail("");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };

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
                <Input
                  placeholder="Enter your email"
                  placeholderTextColor="grey"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
                <Input
                  placeholder="Enter your password"
                  placeholderTextColor="grey"
                  secureTextEntry
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <SubmitForm
                  activeOpacity={0.5}
                  onPress={login}
                  disabled={loading}
                >
                  <ButtonText>{loading ? "Loading..." : "Sign In"}</ButtonText>
                </SubmitForm>
                <NewToNetflixTextWrapper
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Register')}
                >
                  <NewToNetflix>New To Netflix ? Sign Up</NewToNetflix>
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

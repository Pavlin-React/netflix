import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { auth } from '../firebase'

let Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center
`

const Splash = ({navigation}) => {

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Register")
      } else {
        navigation.replace("Login")
      }
    })
    return () => {
      unsubscribe()
    }
    
  }, [])

  return (
    <>
      <StatusBar style='light'/>
      <Container/>
    </>
  );
};

export default Splash;
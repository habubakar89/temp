import React,{useState} from 'react';
import {
  View, Button, Text, Image, StyleSheet, useWindowDimensions,ScrollView
} from 'react-native';
import { initializeApp } from "firebase/app";
import Logo from '../../assets/photos/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { AppleButton } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';

import { appleAuth } from '@invertase/react-native-apple-authentication';

/////initializeApp();
const firebaseConfig = {
  apiKey: "AIzaSyCafy0xOjTTNZizJGDAhHoNXqqMQpJhH54",
  authDomain: "rescom-347118.firebaseapp.com",
  projectId: "rescom-347118",
  storageBucket: "rescom-347118.appspot.com",
  messagingSenderId: "121545648255",
  appId: "1:121545648255:web:349ebedba732df1a72374a",
  measurementId: "G-0DT895XNNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Login = () => {
  
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  
  const {height}=useWindowDimensions();
  const onSignInPressed = () => {
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
  const onRegisterPressed = () => {
    auth()
      .createUserWithEmailAndPassword(username, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
      
  }
  const onSignInGooglePressed = () => {
    console.warn("Sign in Google");
  }
  const onSignInApplePressed = () => {
    console.warn("Sign in Apple");
  }
  const onSignUpPressed = () => {
    console.warn("Sign Up");
  }
  const onSignInGithubPressed = () => {
    console.warn("Sign in Github");
  }
  const onForgotPassword = () => {
    console.warn("Forgot Password");
  }
  
  return (
    <ScrollView>
    <View style = {styles.root}>
      <Image source={Logo} style ={[styles.logo, {height:height*0.3}]} resizeMode="contain"/>
      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}
      secureTextEntry="False"/>
      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry="True"/>
      <CustomButton 
      text="Sign In"
      onPress = {onSignInPressed}
      type="PRIMARY"
      />
      <CustomButton 
      text="Forgot Password?"
      onPress = {onForgotPassword}
      type = "TERTIARY"
      />
      <CustomButton 
      text="Sign In with Google"
      onPress = {onSignInGooglePressed}
      type="PRIMARY"
      bgColor="#FAE9EA"
      fgColor="#DD4D44"
      />
      <CustomButton 
      text="Sign In with Apple"
      onPress = {onSignInApplePressed}
      type="PRIMARY"
      bgColor="#e3e3e3"
      fgColor="#363636"
      />
      <CustomButton 
      text="Register now"
      onPress = {onRegisterPressed}
      type="PRIMARY"
      bgColor="#e3e3e3"
      fgColor="#363636"
      />
      <CustomButton 
      text="Sign In with Github"
      onPress = {onSignInGithubPressed}
      type="PRIMARY"
      bgColor="#e3e3e3"
      fgColor="#363636"
      />
      <CustomButton 
      text="Don't have an account? Create one"
      onPress = {onSignUpPressed}
      type="TERTIARY"
      />
    </View>
    </ScrollView>
  )
 }
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  }
})

 export default Login

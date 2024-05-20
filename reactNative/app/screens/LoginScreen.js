import React, {useState} from 'react';
import { SafeAreaView, View, StyleSheet, Button, Platform } from 'react-native';
import axios from 'axios';
import FormTextField from '../components/FormTextField';

export default function App() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

async function handleLogin() {
    try{
        // ERROR: AXIOS NETWORK ERROR!
      await axios.post("http://localhost:8000/api/login", {
          email,
          password,
          device_name: `${Platform.OS} ${Platform.Version}`
      }, {
          headers: {
              Accept: "application/json"
          }
      });
    } catch (e){
           console.log(e);
    }
}
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <FormTextField label="Email address:" value={email} onChangeText={(text) => setEmail(text)} keyboardType="email-address"  />
                <FormTextField label="Password:" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}
                />
                <Button title='Login' onPress={handleLogin}/>
               
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: "#fff", 
        flex: 1
    },
    container:{
        padding: 20, rowGap: 16
    }
})
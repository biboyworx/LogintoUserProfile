import {ScrollView, View, StyleSheet} from 'react-native'
import { Avatar, Text, TextInput, Button} from 'react-native-paper';
import styles from '../styles/styles';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const Register = () => {
    const router = useRouter( );
    const [text, setText] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [togglePassword, setTogglePassword] = useState(false);
    return (
        <View style={loginStyle.container}>
            <View style={{...loginStyle.section,...loginStyle.reglogoBox}}>
                <Avatar.Image style={{ backgroundColor: 'transparent', borderWidth: 2}}source={require("../assets/images/avatar.jpg")}size={70}/>
                <Text variant='displayMedium' style={{marginTop: 10, color: 'black'}}>Registration</Text>
                <Text variant='headlineMedium' style={{marginTop: 10, color: 'black'}}>Basta App</Text>
            </View>
            <View style={loginStyle.section}>
            <TextInput
                textContentType='emailAddress'
                style ={{...loginStyle.inputBox, marginTop: 45}}
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
                mode='outlined'
                left={<TextInput.Icon icon="email"/>}
            />
            <TextInput
                style ={{...loginStyle.inputBox}}
                textContentType='password'
                label="Password"
                value={password}
                onChangeText={password => setPassword(password)}
                mode='outlined'
                left={<TextInput.Icon icon="key"/>}
                right={<TextInput.Icon onPress={() => setTogglePassword(!togglePassword)}
                icon={togglePassword ? "eye" : "eye-off"} size={18}/>}
                secureTextEntry={!togglePassword}
            />
                        <TextInput
                style ={{...loginStyle.inputBox}}
                textContentType='password'
                label="Confirm Password"
                value={password}
                onChangeText={password => setPassword(password)}
                mode='outlined'
                left={<TextInput.Icon icon="key"/>}
                right={<TextInput.Icon onPress={() => setTogglePassword(!togglePassword)}
                icon={togglePassword ? "eye" : "eye-off"} size={18}/>}
                secureTextEntry={!togglePassword}
            />
            </View>
            <View style={loginStyle.section}> 
                <Button style={{...loginStyle.buttonBox, width: 300}} icon="account-check" mode="contained-tonal" onPress={() => router.back()}>Register</Button>
            </View>
            
        </View>
    )
}

export default Register

const loginStyle = StyleSheet.create(styles)
import {ScrollView, View, StyleSheet} from 'react-native'
import { Avatar, Text, TextInput, Button} from 'react-native-paper';
import styles from '../styles/styles';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const ResetPass = () => {
    const router = useRouter();
    const [text, setText] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [togglePassword, setTogglePassword] = useState(false);
    return (
        <View style={loginStyle.container}>
            <View style={{...loginStyle.section,...loginStyle.reglogoBox}}>
                <Avatar.Image style={{ backgroundColor: 'transparent', borderWidth: 2}}source={require("../assets/images/avatar.jpg")}size={70}/>
                <Text variant='displayMedium' style={{marginTop: 10, color: 'black'}}>Forgot Password</Text>
                <Text variant='headlineMedium' style={{marginTop: 10, color: 'black'}}>Basta App</Text>
                <Text variant='bodyLarge' style={{marginTop: 10, color: 'black', width: 340, textAlign: 'justify'}}>To reset your password, please enter your email address below. We'll send a secure code to your email, which you can use to complete the reset process and regain access to your account</Text>
            </View>
            <View style={loginStyle.section}>
            <TextInput
                textContentType='emailAddress'
                style ={{...loginStyle.inputBox, marginTop: 10}}
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
                mode='outlined'
                left={<TextInput.Icon icon="email"/>}
            />
            <Button style={{...loginStyle.buttonBox, width: 300, marginTop: 10}} icon="email-lock" mode="contained-tonal" onPress={() => console.log('CODE-SENT')}>Send Code</Button>
            <Button style={{...loginStyle.buttonBox, width: 300, marginTop: 10}} icon="arrow-left" mode="text" onPress={() => router.back()}>Go Back</Button>
            </View>
        </View>
    )
}

export default ResetPass

const loginStyle = StyleSheet.create(styles)
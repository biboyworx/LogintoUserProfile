import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import styles from '../styles/styles';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [togglePassword, setTogglePassword] = useState(false);

    return (
        <View style={loginStyle.container}>
            {/* Logo Section */}
            <View style={[loginStyle.section, loginStyle.logoBox]}>
                <Avatar.Image
                    style={loginStyle.avatar}
                    source={require("../assets/images/avatar.jpg")}
                    size={100}
                />
                <Text variant="headlineLarge" style={loginStyle.appTitle}>
                    Laboratory Four
                </Text>
            </View>

            {/* Input Section */}
            <View style={loginStyle.section}>
                <TextInput
                    textContentType="emailAddress"
                    style={[loginStyle.inputBox, loginStyle.inputSpacing]}
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    mode="outlined"
                    left={<TextInput.Icon icon="email" accessibilityLabel="Email Icon" />}
                />
                <TextInput
                    style={loginStyle.inputBox}
                    textContentType="password"
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    mode="outlined"
                    secureTextEntry={!togglePassword}
                    left={<TextInput.Icon icon="key" accessibilityLabel="Password Icon" />}
                    right={
                        <TextInput.Icon
                            onPress={() => setTogglePassword(!togglePassword)}
                            icon={togglePassword ? "eye" : "eye-off"}
                            accessibilityLabel="Toggle Password Visibility"
                        />
                    }
                />
            </View>

            {/* Action Buttons */}
            <View style={loginStyle.section}>
                <Button
                    style={loginStyle.button}
                    icon="login"
                    mode="contained-tonal"
                    onPress={() => router.replace("dashboard")}
                >
                    Login
                </Button>
                <Button
                    style={loginStyle.linkButton}
                    mode="text"
                    onPress={() => router.push("register")}
                >
                    Don't have an account yet?
                </Button>
                <Button
                    style={loginStyle.linkButton}
                    mode="text"
                    onPress={() => router.push("resetpass")}
                >
                    Forgot Password
                </Button>
            </View>
        </View>
    );
};

export default Login;

const loginStyle = StyleSheet.create({
    ...styles, // Include external styles if needed
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    section: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logoBox: {
        marginBottom: 40,
    },
    avatar: {
        backgroundColor: 'transparent',
        borderWidth: 2,
    },
    appTitle: {
        marginTop: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    inputBox: {
        width: 300,
    },
    inputSpacing: {
        marginTop: 45,
    },
    button: {
        width: 300,
        marginBottom: 10,
    },
    linkButton: {
        width: 300,
        marginTop: 0,
    },
});

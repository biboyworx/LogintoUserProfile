import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SignOutButton = ({ onPress, isDarkMode }) => (
    <TouchableOpacity
        style={[styles.button, isDarkMode && styles.darkButton]}
        onPress={onPress}
    >
        <Text style={styles.buttonText}>Sign Out</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#dc3545',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20
    },
    darkButton: { backgroundColor: '#ff5a5f' },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});

export default SignOutButton;
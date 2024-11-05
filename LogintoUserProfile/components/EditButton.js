import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const EditButton = ({ onPress, color }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.editText, { color } ]}>Edit Profile</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    editText: { fontSize: 18, marginTop: 10, textDecorationLine: 'underline'},
});

export default EditButton;  
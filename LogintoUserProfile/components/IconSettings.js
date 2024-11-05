import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconSettings = ({ onPress, color }) => (
    <TouchableOpacity onPress={onPress} style={Styles.container}>
        <Icon name="settings-outline" size={30} color={color} />
    </TouchableOpacity>
);

const Styles = StyleSheet.create({
    container: { position: 'absolute', top: 30, right: 20 },
});

export default IconSettings;
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ToggleSwitch = ({ isDarkmode, toggleDarkMode }) => (
    <View style={styles.container}>
        <Text style={styles.label}>{isDarkmode ? 'Dark Mode' : 'Light Mode'}</Text>
        <Switch
            value={isDarkmode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkmode ? '#f4f3f4' : '#f4f3f4'} // You might want to change this if you want different colors for thumb
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
    },
    label: { 
        fontSize: 18, 
        fontWeight: '600',
    },
});

export default ToggleSwitch;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoSect = ({ label, content, isDarkMode }) => (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <Text style={[styles.label, isDarkMode && styles.darklabel]}>{label}:</Text>
        <Text style={[styles.content, isDarkMode && styles.darkContent]}>{content}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { marginTop: 10},
    darkContainer: { backgroundColor: '#333' },
    label: { fontSize: 18, fontWeight: '600' },
    darklabel: { color: '#bbbbbb' },
    content: { fontSize: 16, color: '#333' },
    darkContent: { color: '#f2f2f2' },
});

export default InfoSect;
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';

const Settings = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const dynamicStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <Text style={[styles.header, dynamicStyles.text]}>Settings</Text>

      
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, dynamicStyles.text]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Account Settings"
          onPress={() => navigation?.navigate('AccountSettings')}
        />
      </View>

     
      <View style={[styles.buttonContainer, styles.logoutButton]}>
        <Button
          title="Log Out"
          color="red"
          onPress={() => navigation?.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default Settings;

const lightTheme = {
  container: {
    backgroundColor: '#f8f9fa',
  },
  text: {
    color: '#000',
  },
};

const darkTheme = {
  container: {
    backgroundColor: '#121212',
  },
  text: {
    color: '#fff',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
  logoutButton: {
    marginTop: 30,
  },
});

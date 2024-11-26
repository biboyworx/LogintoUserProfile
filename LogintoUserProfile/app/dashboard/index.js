import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning!';
    if (hour < 18) return 'Good Afternoon!';
    return 'Good Evening!';
  };

  const HomeButton = ({ title, onPress }) => (
    <View style={styles.buttonContainer}>
      <Button title={title} onPress={onPress} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{getGreeting()}</Text>
      <Text style={styles.message}>Welcome to the Home Screen</Text>

      <View style={styles.navButtons}>
        <HomeButton
          title="Go to Profile"
          onPress={() => navigation?.navigate('profile')}
        />
        <HomeButton
          title="Go to Settings"
          onPress={() => navigation?.navigate('settings')}
        />
        <HomeButton
          title="Log Out"
          onPress={() => navigation?.navigate('index')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 30,
  },
  navButtons: {
    width: '100%',
    marginTop: 20,
  },
  buttonContainer: {
    marginBottom: 15,
    width: '100%',
  },
});

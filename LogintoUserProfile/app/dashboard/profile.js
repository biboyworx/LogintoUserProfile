import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const Profile = ({ navigation }) => {
  const user = {
    name: 'Rodel Madrid',
    email: 'biboymadrid81@gmail.com',
    profilePicture: 'https://via.placeholder.com/100', 
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: user.profilePicture }}
        style={styles.profilePicture}
      />

      
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      
      <View style={styles.buttonContainer}>
        <Button
          title="Edit Profile"
          onPress={() => navigation?.navigate('EditProfile')}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
});

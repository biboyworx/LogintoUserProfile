import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const AvatarProfile = ({ name, joinedDate, profilePicture, joinedDateColor }) => {
    return (
        <View style={styles.container}>
            
            <Avatar
                rounded
                size='xlarge'
                source={profilePicture} 
                containerStyle={styles.avatar}
                title={name.charAt(0)} 
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={[styles.joinedText, { color: joinedDateColor }]}>Joined {joinedDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { alignItems: 'center', padding: 30 },
    avatar: { marginBottom: 10 },
    name: { fontSize: 28, color: '#fff', fontWeight: 'bold' },
    joinedText: { fontSize: 16, marginTop: 5 },
});

export default AvatarProfile;
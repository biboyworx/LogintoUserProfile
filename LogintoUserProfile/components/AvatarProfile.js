import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const AvatarProfile = ({ name, joinedDate, profilePicture, joinedDateColor }) => {
    return (
        <View style={styles.container}>
            {/* Use the correct source format for the Avatar */}
            <Avatar
                rounded
                size='xlarge'
                source={profilePicture} // Directly use the profilePicture prop
                containerStyle={styles.avatar}
                title={name.charAt(0)} // Fallback title with the first character of the name
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
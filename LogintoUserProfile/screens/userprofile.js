import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import ToggleSwitch from '../components/ToggleSwitch';
import InfoSect from '../components/InfoSect';
import SignOutButton from '../components/SignOutButton';

const UserProfile = () => {
    const navigation = useNavigation();

    const [user] = useState({
        name: 'Rodel Madrid',
        email: 'biboymadrid81@gmail.com',
        phone: '+639619325548',
        bio: 'Chances are low, but never zero.',
        profilePicture: require('../assets/images/avatar.jpg'),
        joinedDate: 'Joined 3 months ago',
    });

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    const handleImageError = () => {
        setImageLoading(false);
    };

    return (
        <ScrollView style={[styles.container, isDarkMode && styles.containerDark]}>
            <View style={[styles.header, isDarkMode && styles.headerDark]}>
                {imageLoading && <ActivityIndicator size="large" color={isDarkMode ? '#00ffcc' : '#007bff'} />}
                <Image
                    source={user.profilePicture}
                    style={styles.profileImage}
                    onLoadEnd={() => setImageLoading(false)}
                    onError={handleImageError}
                />
                <Text style={[styles.name, isDarkMode && styles.nameDark]}>{user.name}</Text>
                <Text style={[styles.joinedDate, isDarkMode && styles.joinedDateDark]}>{user.joinedDate}</Text>

                
                <Icon 
                    name="cog" 
                    size={30} 
                    color={isDarkMode ? '#00ffcc' : '#000080'} 
                    style={styles.settingsIcon} 
                    onPress={() => alert('Settings Pressed')} 
                />
            </View>

            <ToggleSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <View style={styles.infoContainer}>
                <InfoSect label="Email" content={user.email} isDarkMode={isDarkMode} />
                <InfoSect label="Phone" content={user.phone} isDarkMode={isDarkMode} />
                <InfoSect label="Bio" content={user.bio} isDarkMode={isDarkMode} />
            </View>
            <SignOutButton onPress={() => navigation.navigate('Login')} isDarkMode={isDarkMode} />
        </ScrollView>
    );
};


UserProfile.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    containerDark: {
        backgroundColor: '#121212',
    },
    header: {
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#007bff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'relative',
    },
    headerDark: {
        backgroundColor: '#1f1f1f',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000080',
        marginTop: 5,
    },
    nameDark: {
        color: '#00ffcc',
    },
    joinedDate: {
        fontSize: 14,
        color: '#555555',
    },
    joinedDateDark: {
        color: '#aaaaaa',
    },
    infoContainer: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    settingsIcon: {
        position: 'absolute', 
        top: 30,
        right: 30, 
    },
});

export default UserProfile;

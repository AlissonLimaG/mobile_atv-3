import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PersonItemComp from '../../../../common/personItem/PersonItemComp';
import SearchBarComp from '../../../../common/searchBar/SearchBarComp';
import UserService from '../../../../services/UserService';

export default function Header() {

    const [profile, setProfile] = useState({});

    const getUser = async (id) => {
        const user = await UserService.findById(id);
        setProfile(user);
    }

    useEffect(() => getUser(1), [])


    return (
        <View style={styles.header}>
            <PersonItemComp
                data={profile}
            />
            <SearchBarComp data={{width:'95%', borderR:32}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#1E325C',
        borderRadius:16,
        paddingBottom:24,
        paddingTop:8,
        paddingHorizontal:16,
        gap:16
    }
});
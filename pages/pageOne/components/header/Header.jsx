import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PersonItemComp from '../../../../common/personItem/PersonItemComp';
import SearchBarComp from '../../../../common/searchBar/SearchBarComp';

export default function Header() {
    return (
        <View style={styles.header}>
            <PersonItemComp
                data={{ name: 'Alisson Lima', title: 'Bem vindo', avatarSize:48 }}
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
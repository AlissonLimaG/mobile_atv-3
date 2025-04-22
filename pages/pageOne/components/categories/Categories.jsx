import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CategorieIcon from '../../../../common/CardIcon/CardIcon';

export default function Categories() {

    const categories = [
        { icon: 'ambulance', name: 'Emergency', background:'white', color:'#1E325C', boxShadow:true },
        { icon: 'tooth', name: 'Dentist', background:'white', color:'#1E325C', boxShadow:true },
        { icon: 'heartbeat', name: 'Cardiologist', background:'white', color:'#1E325C', boxShadow:true },
        { icon: 'hospital', name: 'Hospital', background:'white', color:'#1E325C', boxShadow:true },
        { icon: 'flask', name: 'Laboratory', background:'white', color:'#1E325C', boxShadow:true },
        { icon: 'user-md', name: 'Consulation', background:'white', color:'#1E325C', boxShadow:true },
    ]

    return (

        <View style={styles.categoriesContainer}>
            <View style={styles.categoriesTitles}>
                <Text style={{ fontSize: 16 }}>Categories.</Text>
                <Text style={{ fontSize: 16 }}>Show All</Text>
            </View>

            <View style={styles.categoriesIconsContainer}>
                {categories.map((d, index) => (
                    <CategorieIcon key={index} data={d} />
                ))}
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    categoriesContainer: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#F2F6FF'
    },
    categoriesTitles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 3
    },
    categoriesIconsContainer: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
        alignContent: 'space-evenly',
        minHeight: 250
    }
});